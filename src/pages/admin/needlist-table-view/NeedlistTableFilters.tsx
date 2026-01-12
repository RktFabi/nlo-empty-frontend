// src/features/admin/needlist-table-view/NeedlistTable.tsx
import { Box, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import { COLORS } from '@/constants/design/colors';
import { BUTTON_HEIGHT_SM } from '@/constants/design/sizing';
import { FONT_SIZE_BODY_MD, FONT_WEIGHT_MEDIUM } from '@/constants/design/typography';
import { SelectChangeEvent } from '@mui/material/Select';
import { Filter, Search } from 'lucide-react';
import React from 'react';
interface NeedlistTableFiltersProps {
  value: number;
  handleChange: (event: SelectChangeEvent<number>) => void;
}

export function NeedlistTableFilters({ value, handleChange }: NeedlistTableFiltersProps) {
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

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Limit</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Limit"
            onChange={handleChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </Box>

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
