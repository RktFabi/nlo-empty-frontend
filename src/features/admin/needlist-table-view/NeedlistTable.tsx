import { AllNeedListsDto } from '@/api/generated';
import { StatusBadge } from '@/components/StatusBadge';
import { COLORS } from '@/constants/design/colors';
import { BUTTON_HEIGHT_MD, BUTTON_HEIGHT_SM } from '@/constants/design/sizing';
import {
  FONT_FAMILY_PRIMARY,
  FONT_SIZE_BODY_SM,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_SEMIBOLD,
} from '@/constants/design/typography';
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import { formatDate, formatNumber } from '@/utils/FormatUtils';
import { Link } from '@tanstack/react-router';

type NeedlistTableProps = { // define the type of what we should pass to the Feature Component
  needs: AllNeedListsDto[],
};

export function NeedlistTable({ needs }: NeedlistTableProps) {
  const itemCount = needs.length;
  const countLabel = itemCount === 0
    ? 'No items to display'
    : `Showing ${itemCount} item${itemCount === 1 ? '' : 's'}`;

  return (
    <Box>
      <TableContainer sx={{ overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: COLORS.surface }}>
              {['ID', 'Need', 'Status', 'Items', 'Total Donated', 'Due Date', 'Action'].map((label) => (
                <TableCell
                  key={label}
                  sx={{
                    textAlign: 'center',
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
              <TableRow
                key={need.id}
                sx={{
                  '&:hover': { bgcolor: COLORS.accentYellowTint },
                }}
              >
                <TableCell
                  sx={{ textAlign: 'center', fontFamily: FONT_FAMILY_PRIMARY, color: COLORS.mutedText }}
                >
                  {need.id}
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontWeight: FONT_WEIGHT_BOLD, color: COLORS.primaryText }}>
                    {need.needlistName}
                  </Typography>
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  <StatusBadge status={need.needlistStatus} />
                </TableCell>
                <TableCell sx={{ textAlign: 'center', color: COLORS.mutedText, fontWeight: FONT_WEIGHT_BOLD }}>
                  {need.totalItems}
                </TableCell>
                <TableCell sx={{ textAlign: 'center', color: COLORS.mutedText, fontWeight: FONT_WEIGHT_BOLD }}>
                  {need.totalDonated}
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {need.dueDate}
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  <IconButton
                    component={Link}
                    to={`/admin/needlist-detail-view?needlistId=${need.id}`}
                    type="button"
                    title="View Details"
                    sx={{
                      display: 'inline-flex',
                      background: 'transparent',
                      border: `1px solid ${COLORS.inputBorder}`,
                      borderRadius: '999px',
                      width: BUTTON_HEIGHT_SM,
                      height: BUTTON_HEIGHT_SM,
                      cursor: 'pointer',
                      '&:hover': { border: `2px solid ${COLORS.accentYellow}` },
                    }}
                  >
                    <ArrowRight size={18} color={COLORS.primaryText} style={{ margin: 'auto' }} />
                  </IconButton>
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
          Showing 1-7 of 24 items
        </Typography>
        <Box>
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
            }}
          >
            <ChevronRight size={18} color={COLORS.mutedText} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
