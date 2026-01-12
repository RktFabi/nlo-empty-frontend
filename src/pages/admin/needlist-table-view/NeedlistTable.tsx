import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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
import { NeedlistDetailPanel } from './NeedlistDetailPanel'; // Import the panel


type NeedlistTableProps = {
  needs: AllNeedListsDto[];
  selectedId: string | undefined;
  onRowClick: (id: string) => void;
  onClosePanel: () => void;
};

export function NeedlistTable({ needs, selectedId, onRowClick, onClosePanel }: NeedlistTableProps) {
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
              <TableCell sx={{ borderBottom: `1px solid ${COLORS.inputBorder}` }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {needs.map((need) => (
              <TableRow 
                key={need.id} 
                hover
                onClick={() => need.id && onRowClick(need.id)} // 2. Trigger URL update
                sx={{ 
                  cursor: 'pointer',
                  bgcolor: selectedId === need.id ? COLORS.accentYellowTint : 'inherit',
                  '&:hover': { bgcolor: COLORS.accentYellowTint } 
                }}
              >
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
                   {/* Donated Amount Box */}
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
                    <Typography sx={{ fontSize: FONT_SIZE_BODY_SM, color: COLORS.mutedText, fontWeight: FONT_WEIGHT_MEDIUM }}>
                      {need.totalDonated}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: COLORS.mutedText, fontWeight: FONT_WEIGHT_MEDIUM }}>
                  {need.totalPrice}
                </TableCell>

                <TableCell align="right">
                   <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${COLORS.inputBorder}`,
                      borderRadius: '50%',
                      width: BUTTON_HEIGHT_SM,
                      height: BUTTON_HEIGHT_SM,
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

      {/* Pagination Controls */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3, py: 2, bgcolor: COLORS.surface }}>
        <Typography sx={{ fontSize: FONT_SIZE_BODY_SM, color: COLORS.mutedText }}>
          {countLabel}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
           <IconButtonWrapper icon={<ChevronLeft size={18} />} />
           <IconButtonWrapper icon={<ChevronRight size={18} />} />
        </Box>
      </Box>

      {/* 3. The Drawer: Controlled by the URL through props */}
      <NeedlistDetailPanel 
        selectedId={selectedId || null} 
        onClose={onClosePanel} 
      />
    </Box>
  );
}

// Simple helper component for the pagination buttons
function IconButtonWrapper({ icon }: { icon: React.ReactNode }) {
  return (
    <Box
      component="button"
      sx={{
        background: COLORS.background,
        border: `1px solid ${COLORS.inputBorder}`,
        borderRadius: '8px',
        width: BUTTON_HEIGHT_SM,
        height: BUTTON_HEIGHT_SM,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {icon}
    </Box>
  );
}