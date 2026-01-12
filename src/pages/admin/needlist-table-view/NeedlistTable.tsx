// src/features/admin/needlist-table-view/NeedlistTable.tsx
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import { StatusBadge } from '@/components/common/ui/StatusBadge';
import { COLORS } from '@/constants/design/colors';
import { BUTTON_HEIGHT_SM } from '@/constants/design/sizing';

import {
  FONT_FAMILY_PRIMARY,
  FONT_SIZE_BODY_SM,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_MEDIUM,
  FONT_WEIGHT_SEMIBOLD,
} from '@/constants/design/typography';

import { AllNeedListsDto } from '@/api/generated';
import { formatDate, formatNumber } from '@/utils/FormatUtils';

type NeedlistTableProps = { // define the type of what we should pass to the Feature Component
  needs: AllNeedListsDto[],
};

export function NeedlistTable({ needs }: NeedlistTableProps) {
  const itemCount = needs.length;
  const countLabel = itemCount === 0
    ? 'No items to display'
    : `Showing ${itemCount} item${itemCount === 1 ? '' : 's'}`; // handling no items

  return (
    <Box>
      <TableContainer sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: COLORS.surface }}>
              {['ID', 'Name', 'status', 'total donated', 'total price'].map((label) => (
                <TableCell
                  key={label}
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: FONT_SIZE_BODY_SM,
                    fontWeight: FONT_WEIGHT_SEMIBOLD,
                    letterSpacing: '0.08em',
                    color: COLORS.mutedText,
                    borderBottom: `1px solid ${COLORS.inputBorder}`,
                  }}
                >
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {needs.map((need) => (
              <TableRow key={need.id} sx={{ '&:hover': { bgcolor: COLORS.accentYellowTint } }}>
                <TableCell sx={{ fontFamily: FONT_FAMILY_PRIMARY, color: COLORS.mutedText }}>
                  {need.id}
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontWeight: FONT_WEIGHT_BOLD, color: COLORS.primaryText }}>
                    {need.needlistName}
                  </Typography>
                </TableCell>
                <TableCell sx={{ color: COLORS.mutedText }}>{need.needlistStatus}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 2,
                      bgcolor: COLORS.surface,
                      border: `1px solid ${COLORS.inputBorder}`,
                    }}
                  >
                    <Typography
                      sx={{ fontSize: FONT_SIZE_BODY_SM, color: COLORS.mutedText, fontWeight: FONT_WEIGHT_MEDIUM }}
                    >
                      {need.totalDonated}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: COLORS.mutedText, fontWeight: FONT_WEIGHT_MEDIUM }}>
                  {need.totalPrice}
                </TableCell>

                <TableCell align="right">
                  <Box
                    component="button"
                    type="button"
                    title="View Details"
                    style={{
                      background: 'transparent',
                      border: `1px solid ${COLORS.inputBorder}`,
                      borderRadius: '999px',
                      width: BUTTON_HEIGHT_SM,
                      height: BUTTON_HEIGHT_SM,
                      cursor: 'pointer',
                    }}
                  >
                    <ArrowRight size={18} color={COLORS.primaryText} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          py: 2,
          borderTop: `1px solid ${COLORS.inputBorder}`,
          bgcolor: COLORS.surface,
        }}
      >
        <Typography sx={{ fontSize: FONT_SIZE_BODY_SM, color: COLORS.mutedText }}>
          {countLabel}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box
            component="button"
            type="button"
            style={{
              background: COLORS.background,
              border: `1px solid ${COLORS.inputBorder}`,
              borderRadius: '8px',
              width: BUTTON_HEIGHT_SM,
              height: BUTTON_HEIGHT_SM,
              cursor: 'pointer',
            }}
          >
            <ChevronLeft size={18} color={COLORS.mutedText} />
          </Box>
          <Box
            component="button"
            type="button"
            style={{
              background: COLORS.background,
              border: `1px solid ${COLORS.inputBorder}`,
              borderRadius: '8px',
              width: BUTTON_HEIGHT_SM,
              height: BUTTON_HEIGHT_SM,
              cursor: 'pointer',
            }}
          >
            <ChevronRight size={18} color={COLORS.primaryText} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
