import { Box } from '@mui/material';

import { PageBackground } from '@/components/PageBackground';
import { COLORS } from '@/constants/design/colors';
import { PAGE_MAX_WIDTH } from '@/constants/design/layout_constraints';
import { TABLE_CARD_BORDER_WIDTH, TABLE_CARD_RADIUS, TABLE_CARD_SHADOW } from '@/constants/design/table_style';
import { NeedlistDetailDescription } from '@/features/admin/needlist-detail-view/NeedlistDetailDescription';
import { NeedlistDetailFields } from '@/features/admin/needlist-detail-view/NeedlistDetailFields';
import { NeedlistDetailHeader } from '@/features/admin/needlist-detail-view/NeedlistDetailHeader';

const NEED_DETAIL = {
  id: 'NL-2024-001',
  title: 'Winter Coats for Kids',
  description:
    'We are looking for 50 winter coats for children aged 5-12. The temperature is dropping fast and we have many new families in our shelter who are unprepared for the winter season. New or gently used condition is acceptable.',
  org: 'Safe Haven Youth',
  orgLocation: 'Toronto, ON',
  category: 'Clothing',
  quantity: 50,
  urgency: 'Urgent',
  status: 'Active',
  postedDate: 'Oct 24, 2024',
  deadline: 'Nov 30, 2024',
};

export const NeedlistDetailView = () => {
  return (
    <PageBackground>
      <Box sx={{ maxWidth: PAGE_MAX_WIDTH, mx: 'auto' }}>
        <Box
          sx={{
            bgcolor: COLORS.background,
            borderRadius: TABLE_CARD_RADIUS,
            boxShadow: TABLE_CARD_SHADOW,
            border: `${TABLE_CARD_BORDER_WIDTH} solid ${COLORS.inputBorder}`,
            overflow: 'hidden',
          }}
        >
          <NeedlistDetailHeader
            data={{
              id: NEED_DETAIL.id,
              title: NEED_DETAIL.title,
              org: NEED_DETAIL.org,
              orgLocation: NEED_DETAIL.orgLocation,
              status: NEED_DETAIL.status,
            }}
          />

          <Box sx={{ p: { xs: 3, md: 4 }, borderBottom: `1px solid ${COLORS.inputBorder}` }}>
            <NeedlistDetailDescription description={NEED_DETAIL.description} />
            <NeedlistDetailFields
              data={{
                category: NEED_DETAIL.category,
                quantity: NEED_DETAIL.quantity,
                urgency: NEED_DETAIL.urgency,
                postedDate: NEED_DETAIL.postedDate,
                deadline: NEED_DETAIL.deadline,
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: { xs: 3, md: 4 },
              bgcolor: COLORS.surface,
            }}
          >
          </Box>
        </Box>
      </Box>
    </PageBackground>
  );
};
