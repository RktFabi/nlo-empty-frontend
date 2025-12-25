import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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
import { NEEDS } from '@/constants/onboarding';

export function NeedlistTable() {
  return (
    <Box>
      <TableContainer sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: COLORS.surface }}>
              {['ID', 'Need', 'Organization', 'Category', 'Quantity', 'Status', 'Action'].map((label) => (
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
            {NEEDS.map((need) => (
              <TableRow key={need.id} sx={{ '&:hover': { bgcolor: COLORS.accentYellowTint } }}>
                <TableCell sx={{ fontFamily: FONT_FAMILY_PRIMARY, color: COLORS.mutedText }}>
                  {need.id}
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontWeight: FONT_WEIGHT_BOLD, color: COLORS.primaryText }}>
                    {need.title}
                  </Typography>
                </TableCell>
                <TableCell sx={{ color: COLORS.mutedText }}>{need.org}</TableCell>
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
                      {need.category}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: COLORS.mutedText, fontWeight: FONT_WEIGHT_MEDIUM }}>{need.quantity}</TableCell>
                <TableCell>
                  <StatusBadge status={need.status} />
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
          Showing 1-7 of 24 items
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
