import { AllNeedListsDto, NeedListControllerFindAllRequest } from '@/api/generated';
import { PageBackground } from '@/components/PageBackground';
import { COLORS } from '@/constants/design/colors';
import { PAGE_MAX_WIDTH } from '@/constants/design/layout_constraints';
import { TABLE_CARD_BORDER_WIDTH, TABLE_CARD_RADIUS, TABLE_CARD_SHADOW } from '@/constants/design/table_styles';
import { FONT_SIZE_BODY_MD, FONT_WEIGHT_MEDIUM } from '@/constants/design/typography';
import { NeedlistTable } from '@/pages/admin/needlist-table-view/NeedlistTable';
import { NeedlistTableFilters } from '@/pages/admin/needlist-table-view/NeedlistTableFilters';
import { NeedlistTableHeader } from '@/pages/admin/needlist-table-view/NeedlistTableHeader';
import { getNeedlists } from '@/services/NeedListApiService';
import { Box, CircularProgress, Typography } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useQuery } from '@tanstack/react-query';
import { useSearch, useNavigate } from '@tanstack/react-router'; // Added hooks
import React from 'react';

export const NeedlistTableView = () => {
  // 1. Hook into the Route Search Params
  const searchParams = useSearch({ from: '/admin/needlist-table-view' });
  const navigate = useNavigate({ from: '/admin/needlist-table-view' });
  const selectedId = searchParams.needlistId;
  const nameFromUrl = searchParams.name ?? '';
  const createdAtSort = searchParams.sort ?? 'created_at:desc';
  const createdAtSortToApply = searchParams.sort === undefined
    ? 'created_at:desc'
    : createdAtSort === 'created_at:desc'
    ? 'created_at:asc'
    : 'created_at:desc';

  const [limit, setLimit] = React.useState(10);
  const [nameInput, setNameInput] = React.useState(nameFromUrl);

  React.useEffect(() => {
    setNameInput(nameFromUrl);
  }, [nameFromUrl]);

  const debouncedNameInput = useDebouncedValue(nameInput, 300);
  const nameQuery = debouncedNameInput.trim() === '' ? undefined : debouncedNameInput.trim();

  React.useEffect(() => {
    if (nameQuery === searchParams.name) return;
    navigate({
      search: (prev) => ({ ...prev, name: nameQuery, needlistId: undefined }),
      replace: true,
    });
  }, [nameQuery, navigate, searchParams.name]);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setLimit(Number(event.target.value));
  };

  // 2. Navigation handlers for the sliding panel
  const handleOpenPanel = (id: string) => {
    navigate({ search: (prev) => ({ ...prev, needlistId: id }) });
  };

  const handleClosePanel = () => {
    navigate({ search: (prev) => ({ ...prev, needlistId: undefined }) });
  };

  const handleApplyCreatedAtSort = () => {
    navigate({ search: (prev) => ({ ...prev, sort: createdAtSortToApply }) });
  };

  const request: NeedListControllerFindAllRequest = {
    limit: limit,
    name: nameQuery,
    sort: createdAtSort,
  };

  const needlistsQuery = useQuery<AllNeedListsDto[]>({
    queryKey: ['needlists', limit, nameQuery, createdAtSort] as const,
    queryFn: async () => {
      const response = await getNeedlists(request);
      if (!response) throw new Error('Unable to load needlists right now.');
      return response;
    },
  });

  const isLoading = needlistsQuery.isPending;
  const errorMessage = needlistsQuery.isError 
    ? (needlistsQuery.error as Error).message 
    : null;

  const needs = needlistsQuery.data ?? [];

  return (
    <PageBackground>
      <Box sx={{ maxWidth: PAGE_MAX_WIDTH, mx: 'auto' }}>
        <NeedlistTableHeader />

        <Box
          sx={{
            bgcolor: COLORS.background,
            borderRadius: TABLE_CARD_RADIUS,
            boxShadow: TABLE_CARD_SHADOW,
            border: `${TABLE_CARD_BORDER_WIDTH} solid ${COLORS.inputBorder}`,
            overflow: 'hidden',
          }}
        >
          <NeedlistTableFilters
            value={limit}
            handleChange={handleChange}
            searchValue={nameInput}
            onSearchValueChange={setNameInput}
            createdAtSort={createdAtSortToApply}
            onToggleCreatedAtSort={handleApplyCreatedAtSort}
            createdAtSortDisabled={nameInput.trim() !== ''}
          />
          
          {isLoading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
              <CircularProgress size={32} />
            </Box>
          )}

          {!isLoading && errorMessage && (
            <Box sx={{ px: 4, py: 5 }}>
              <Typography
                sx={{
                  color: COLORS.error,
                  fontSize: FONT_SIZE_BODY_MD,
                  fontWeight: FONT_WEIGHT_MEDIUM,
                }}
              >
                {errorMessage}
              </Typography>
            </Box>
          )}

          {!isLoading && !errorMessage && (
            <NeedlistTable 
              needs={needs} 
              selectedId={selectedId} // Passing URL state down
              onRowClick={handleOpenPanel} // Handler to open panel via URL
              onClosePanel={handleClosePanel} // Handler to close panel via URL
            />
          )}
        </Box>
      </Box>
    </PageBackground>
  );
};

function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handle = setTimeout(() => setDebouncedValue(value), delayMs);
    return () => clearTimeout(handle);
  }, [value, delayMs]);

  return debouncedValue;
}
