// Needlist detail page showing comprehensive information about a single needlist.
import { Box, Typography } from '@mui/material';
import { useSearch } from '@tanstack/react-router';

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

// Static mock data for the detail view (will be replaced with API call later)
const MOCK_NEEDLIST = {
  id: 'NL-2024-001',
  title: 'Winter Coats for Kids',
  status: 'Active',
  organizationName: 'Safe Haven Youth',
  location: 'Toronto, ON',
  description:
    'We are looking for 50 winter coats for children aged 5-12. The temperature is dropping fast and we have many new families in our shelter who are unprepared for the winter season. New or gently used condition is acceptable.',
  quantityNeeded: 50,
  datePosted: '2024-10-24',
  deadline: '2024-11-30',
};

export const NeedlistDetailView = () => {
  // Get the URL query parameters
  const search = useSearch({ from: '/admin/needlist-detail-view' });
  const needlistId = search.needlistId;

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

  // For now, use static mock data
  // In the future, this will be replaced with an API call using the needlistId
  const needlist = { ...MOCK_NEEDLIST, id: needlistId };

  return (
    <PageBackground>
      <Box sx={{ maxWidth: PAGE_MAX_WIDTH, mx: 'auto' }}>
        <NeedlistDetailHeader
          needlistId={needlist.id}
          title={needlist.title}
          status={needlist.status}
          organizationName={needlist.organizationName}
          location={needlist.location}
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
            description={needlist.description}
            quantityNeeded={needlist.quantityNeeded}
            datePosted={needlist.datePosted}
            deadline={needlist.deadline}
          />
        </Box>
      </Box>
    </PageBackground>
  );
};
