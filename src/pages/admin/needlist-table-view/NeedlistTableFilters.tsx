// src/features/admin/needlist-table-view/NeedlistTable.tsx
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';

import { Search, Filter } from 'lucide-react';

import { COLORS } from '@/constants/design/colors';
import {
  FONT_WEIGHT_MEDIUM,
  FONT_SIZE_BODY_MD,
} from '@/constants/design/typography';
import { BUTTON_HEIGHT_SM } from '@/constants/design/sizing';

export function NeedlistTableFilters() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        justifyContent: 'space-between',
        alignItems: { xs: 'stretch', sm: 'center' },
        p: 3,
        borderBottom: `1px solid ${COLORS.inputBorder}`,
        bgcolor: COLORS.background,
      }}
    >
      <TextField
        placeholder="Search..."
        variant="outlined"
        size="small"
        sx={{
          width: { xs: '100%', sm: '360px' },
          '& .MuiInputBase-root': {
            fontSize: FONT_SIZE_BODY_MD,
            fontWeight: FONT_WEIGHT_MEDIUM,
            bgcolor: COLORS.surface,
            borderRadius: 3,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.inputBorder,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.accentYellow,
          },
          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.accentYellow,
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search size={18} color={COLORS.mutedText} />
            </InputAdornment>
          ),
        }}
      />

      <IconButton
        sx={{
          border: `1px solid ${COLORS.inputBorder}`,
          borderRadius: 2,
          color: COLORS.mutedText,
          bgcolor: COLORS.background,
          '&:hover': { bgcolor: COLORS.surface },
          width: BUTTON_HEIGHT_SM,
          height: BUTTON_HEIGHT_SM,
        }}
      >
        <Filter size={18} />
      </IconButton>
    </Box>
  );
}