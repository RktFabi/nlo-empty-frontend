import { AllNeedListsDto } from '@/api/generated';
import { PageBackground } from '@/components/PageBackground';
import { COLORS } from '@/constants/design/colors';
import { PAGE_MAX_WIDTH } from '@/constants/design/layout_constraints';
import { TABLE_CARD_BORDER_WIDTH, TABLE_CARD_RADIUS, TABLE_CARD_SHADOW } from '@/constants/design/table_style';
import { FONT_SIZE_BODY_MD, FONT_WEIGHT_MEDIUM } from '@/constants/design/typography';
import { NeedlistTable } from '@/features/admin/needlist-table-view/NeedlistTable';
import { NeedlistTableFilters } from '@/features/admin/needlist-table-view/NeedlistTableFilters';
import { NeedlistTableHeader } from '@/features/admin/needlist-table-view/NeedlistTableHeader';
import { getNeedlists } from '@/services/NeedListApiService';
import { Box, CircularProgress, Typography } from '@mui/material'; // for loading
import { useQuery } from '@tanstack/react-query';

export const NeedlistTableView = () => {
  const needlistsQuery = useQuery<AllNeedListsDto[]>({
    queryKey: ['needlists'] as const,
    queryFn: async () => {
      const response = await getNeedlists();
      if (!response) {
        throw new Error('Unable to load needlists right now.');
      }
      return response;
    },
  });

  const isLoading = needlistsQuery.isPending; // useQuery hanlding for page loading

  let errorMessage: string | null = null;
  if (needlistsQuery.isError) {
    errorMessage = needlistsQuery.error instanceof Error
      ? needlistsQuery.error.message
      : 'Unable to load needlists right now.';
  }

  const needs = needlistsQuery.data ?? [];

  return (
    <PageBackground>
        {isLoading
            ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
                <CircularProgress size={32} />
              </Box>
            )
            : null}
          {!isLoading && errorMessage
            ? (
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
            )
            : null}
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
          <NeedlistTableFilters />
          {!isLoading && !errorMessage ? <NeedlistTable needs={needs} /> : null}
        </Box>
      </Box>
    </PageBackground>
  );
};
