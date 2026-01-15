import { AllNeedListsDto } from '@/api/generated';
import { StatusBadge } from '@/components/StatusBadge';
import { COLORS } from '@/constants/design/colors';
import { BUTTON_HEIGHT_SM } from '@/constants/design/sizing';
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
import { useState } from 'react';

type NeedlistTableProps = { // define the type of what we should pass to the Feature Component
  needs: AllNeedListsDto[],
};

export function NeedlistTable({ needs }: NeedlistTableProps) {
  const itemCount = needs.length;
  const countLabel = itemCount === 0
    ? 'No items to display'
    : `Showing ${itemCount} item${itemCount === 1 ? '' : 's'}`;

  const [display, setDisplay] = useState(0);
  const displayedRows = needs.slice(display * 7, (display + 1) * 7);

  return (
    <Box>
      <TableContainer sx={{ overflowX: 'hidden', overflowY:'hidden'}}>
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
            {displayedRows.map((need) => (
              <TableRow
                key={need.id}
                sx={{
                  transition: 'transform 0.8s ease, background-color 0.5s ease',
                  '&:hover': { bgcolor: COLORS.accentYellowTint, transform: 'scale(1.02)' },
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
                      background: 'white',
                      border: `1px solid ${COLORS.inputBorder}`,
                      borderRadius: '999px',
                      bgcolor: 'white',
                      width: BUTTON_HEIGHT_SM,
                      height: BUTTON_HEIGHT_SM,
                      cursor: 'pointer',
                      transition: 'box-shadow 0.8s',
                      '&:hover': {
                        boxShadow: '0 0 10px rgba(223, 193, 93, 1)',
                        bgcolor: 'white',
                      },
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
          Showing {(display * 7) + 1}-{Math.min(itemCount, (display + 1) * 7)} of {itemCount} items
        </Typography>
        <Box>
          <IconButton
            onClick={() => setDisplay(Math.max(0, display - 1))}
            sx={{
              transition: 'transform 0.8s ease, background-color 0.5s ease',
              ':hover': { bgcolor: 'white', transform: 'scale(1.1)' },
            }}
          >
            <ChevronLeft size={18} color={COLORS.mutedText} style={{ verticalAlign: 'middle' }} 
            />
          </IconButton>
          <IconButton
            onClick={() => setDisplay(Math.min(display + 1, Math.floor(needs.length / 7)))}
            sx={{
              transition: 'transform 0.8s ease, background-color 0.5s ease',
              ':hover': { bgcolor: 'white', transform: 'scale(1.1)' },
            }}
          >
            <ChevronRight size={18} color={COLORS.mutedText} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
