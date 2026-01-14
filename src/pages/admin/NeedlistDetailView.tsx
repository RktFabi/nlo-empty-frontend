// Needlist detail page showing comprehensive information about a single needlist.
import { Box, CircularProgress, Typography } from '@mui/material';
import { useSearch } from '@tanstack/react-router';

import { useQuery } from '@tanstack/react-query';

import { AllNeedListsDto } from '@/api/generated';

import { PageBackground } from '@/components/PageBackground';
import { COLORS } from '@/constants/design/colors';
import { PAGE_MAX_WIDTH } from '@/constants/design/layout_constraints';
import {
  TABLE_CARD_BORDER_WIDTH,
  TABLE_CARD_RADIUS,
  TABLE_CARD_SHADOW,
} from '@/constants/design/table_style';
import { FONT_SIZE_BODY_MD, FONT_WEIGHT_MEDIUM } from '@/constants/design/typography';
import { NeedlistDetailContent } from '@/features/admin/needlist-detail-view/NeedlistDetailContent';
import { NeedlistDetailHeader } from '@/features/admin/needlist-detail-view/NeedlistDetailHeader';
import { getOneNeedlist } from '@/services/NeedListApiService';


export const NeedlistDetailView = () => {
  // Get the URL query parameters
  const search = useSearch({ from: '/admin/needlist-detail-view' });
  const needlistId = search.needlistId;

   // Fetch data from API using TanStack Query
    const needlistQuery = useQuery<AllNeedListsDto>({
      queryKey: ['needlist', needlistId] as const,
      queryFn: async () => {
        if(!needlistId) {
          throw new Error('No needlist ID provided.');
        }
        const response = await getOneNeedlist({id: needlistId});
        if (!response) {
          throw new Error('Unable to load this needlist right now.');
        }
        return response;
      },
    });

    const isLoading = needlistQuery.isPending;

    let errorMessage: string | null = null;
    if (needlistQuery.isError) {
      errorMessage = needlistQuery.error instanceof Error
      ? needlistQuery.error.message
      : 'Unable to load this needlist right now.';
    }

    const need = needlistQuery.data;
  
  // If no needlist ID is provided, show an error
  if (!needlistId) {
    return (
      <PageBackground>
        <Box sx={{ maxWidth: PAGE_MAX_WIDTH, mx: 'auto' }}>
          <Box
            sx={{
              bgcolor: COLORS.background,
              borderRadius: TABLE_CARD_RADIUS,
              boxShadow: TABLE_CARD_SHADOW,
              border: `${TABLE_CARD_BORDER_WIDTH} solid ${COLORS.inputBorder}`,
              p: 4,
            }}
          >
            <Typography
              sx={{
                color: COLORS.error,
                fontSize: FONT_SIZE_BODY_MD,
                fontWeight: FONT_WEIGHT_MEDIUM,
              }}
            >
              No needlist ID provided. Please select a needlist from the table.
            </Typography>
          </Box>
        </Box>
      </PageBackground>
    );
  }

  if (isLoading) {
  return (
    <PageBackground>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress size={40} />
      </Box>
    </PageBackground>
  );
}

// 3. Handling Error State
if (errorMessage) {
  return (
    <PageBackground>
      <Box sx={{ maxWidth: PAGE_MAX_WIDTH, mx: 'auto', mt: 4 }}>
         <Typography sx={{ color: COLORS.error }}>{errorMessage}</Typography>
      </Box>
    </PageBackground>
  );
}
  
  // In the future, this will be replaced with an API call using the needlistId
  const needlist = need;

  return (
    <PageBackground>
      <Box sx={{ maxWidth: PAGE_MAX_WIDTH, mx: 'auto' }}>
        <NeedlistDetailHeader
          needlistId={needlist?.id ?? ''} 
          title={needlist?.needlistName ?? ''}
          status={needlist?.needlistStatus ?? ''}
          organizationName={needlist?.orgId ?? ''}
          location={needlist?.locationId ?? ''}
        />

        <Box
          sx={{
            bgcolor: COLORS.background,
            borderRadius: TABLE_CARD_RADIUS,
            boxShadow: TABLE_CARD_SHADOW,
            border: `${TABLE_CARD_BORDER_WIDTH} solid ${COLORS.inputBorder}`,
            p: 4,
          }}
        >
          <NeedlistDetailContent
            quantityNeeded={needlist?.totalItems ?? 0}
            datePosted={needlist?.createdAt ?? ''}
            deadline={needlist?.dueDate ?? ''}
            description='This is a description of the Needlist.'
          />
        </Box>
      </Box>
    </PageBackground>
  );
};