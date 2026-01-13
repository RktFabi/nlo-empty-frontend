import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import { AllNeedListsDto } from '@/api/generated';
import { StatusBadge } from '@/components/StatusBadge';
import { COLORS } from '@/constants/design/colors';
import { BUTTON_HEIGHT_SM } from '@/constants/design/sizing';
import {
  FONT_FAMILY_PRIMARY,
  FONT_SIZE_BODY_SM,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_MEDIUM,
  FONT_WEIGHT_SEMIBOLD,
} from '@/constants/design/typography';
import { formatDate, formatNumber } from '@/utils/FormatUtils';

// NEW: Accept needs as props
type NeedlistTableProps = {
  needs: AllNeedListsDto[];
};

export function NeedlistTable({ needs }: NeedlistTableProps) {
  const itemCount = needs.length;
  const countLabel = itemCount === 0
    ? 'No items to display'
    : `Showing ${itemCount} item${itemCount === 1 ? '' : 's'}`;

  return (
    <Box>
      <TableContainer sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: COLORS.surface }}>
              {/* UPDATED: Column names to match API data */}
              {['ID', 'Name', 'Status', 'Total Donated', 'Total Items', 'Due Date', 'Action'].map((label) => (
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
                  {/* UPDATED: Use API field name */}
                  <Typography sx={{ fontWeight: FONT_WEIGHT_BOLD, color: COLORS.primaryText }}>
                    {need.needlistName}
                  </Typography>
                </TableCell>
                <TableCell>
                  {/* UPDATED: Use API field name */}
                  <StatusBadge status={need.needlistStatus} />
                </TableCell>
                <TableCell sx={{ color: COLORS.mutedText, fontWeight: FONT_WEIGHT_MEDIUM }}>
                  ${formatNumber(need.totalDonated)}
                </TableCell>
                <TableCell sx={{ color: COLORS.mutedText, fontWeight: FONT_WEIGHT_MEDIUM }}>
                  {formatNumber(need.totalItems)}
                </TableCell>
                <TableCell sx={{ color: COLORS.mutedText }}>
                  {formatDate(need.dueDate)}
                </TableCell>
                <TableCell align="right">
                  <Box
                    component={Link}
                    to={`/admin/needlist-detail-view?needlistId=${need.id}`}
                    title="View Details"
                    sx={{
                      background: 'transparent',
                      border: `1px solid ${COLORS.inputBorder}`,
                      borderRadius: '999px',
                      width: BUTTON_HEIGHT_SM,
                      height: BUTTON_HEIGHT_SM,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      '&:hover': {
                        bgcolor: COLORS.surface,
                      },
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
            sx={{
              background: COLORS.background,
              border: `1px solid ${COLORS.inputBorder}`,
              borderRadius: '8px',
              width: BUTTON_HEIGHT_SM,
              height: BUTTON_HEIGHT_SM,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ChevronLeft size={18} color={COLORS.mutedText} />
          </Box>
          <Box
            component="button"
            type="button"
            sx={{
              background: COLORS.background,
              border: `1px solid ${COLORS.inputBorder}`,
              borderRadius: '8px',
              width: BUTTON_HEIGHT_SM,
              height: BUTTON_HEIGHT_SM,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ChevronRight size={18} color={COLORS.primaryText} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
