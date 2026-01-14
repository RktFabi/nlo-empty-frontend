import { COLORS } from '@/constants/design/colors';
import { BUTTON_HEIGHT_SM } from '@/constants/design/sizing';
import { TABLE_CARD_RADIUS } from '@/constants/design/table_style';
import { FONT_SIZE_BODY_MD, FONT_WEIGHT_MEDIUM } from '@/constants/design/typography';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { Filter, Search } from 'lucide-react';

type NeedlistTableFiltersProps = {
    onSearch: (value: string) => void;
};

export function NeedlistTableFilters({ onSearch }: NeedlistTableFiltersProps) {
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
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search..."
        variant="outlined"
        size="small"
        sx={{
          width: { xs: '100%', sm: '360px' },
          '&.hover .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.accentYellow,
          },
          '& .MiuInputBase-root': {
            fontSize: FONT_SIZE_BODY_MD,
            fontWeight: FONT_WEIGHT_MEDIUM,
            bgcolor: COLORS.surface,
            borderRadius: 3,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.inputBorder,
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
