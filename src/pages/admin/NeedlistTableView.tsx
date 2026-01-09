// src/pages/admin/NeedlistTableView.tsx
import { PageBackground } from '@/components/PageBackground';
import { NeedlistTable } from '@/pages/admin/needlist-table-view/NeedlistTable';
import { NeedlistTableFilters } from '@/pages/admin/needlist-table-view/NeedlistTableFilters';
import { NeedlistTableHeader } from '@/pages/admin/needlist-table-view/NeedlistTableHeader';

import {
  Box,
} from '@mui/material';

import { COLORS } from '@/constants/design/colors';
import { TABLE_CARD_SHADOW, TABLE_CARD_RADIUS, TABLE_CARD_BORDER_WIDTH } from '@/constants/design/table_styles';
import { PAGE_MAX_WIDTH } from '@/constants/design/layout_constraints';

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