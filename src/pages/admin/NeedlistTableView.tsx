import { Box } from '@mui/material';

import { PageBackground } from '@/components/PageBackground';
import { COLORS } from '@/constants/design/colors';
import { PAGE_MAX_WIDTH } from '@/constants/design/layout_constraints';
import { TABLE_CARD_BORDER_WIDTH, TABLE_CARD_RADIUS, TABLE_CARD_SHADOW } from '@/constants/design/table_style';
import { NeedlistTable } from '@/features/admin/needlist-table-view/NeedlistTable';
import { NeedlistTableFilters } from '@/features/admin/needlist-table-view/NeedlistTableFilters';
import { NeedlistTableHeader } from '@/features/admin/needlist-table-view/NeedlistTableHeader';

export const NeedlistTableView = () => {
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
          <NeedlistTableFilters />
          <NeedlistTable />
        </Box>
      </Box>
    </PageBackground>
  );
};
