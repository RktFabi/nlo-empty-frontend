import { Box, Button } from '@mui/material';

import { COLORS } from '@/constants/design/colors';
import { BUTTON_HEIGHT_MD, BUTTON_WIDTH_LG } from '@/constants/design/sizing';
import { FONT_SIZE_BODY_LG, FONT_WEIGHT_BOLD } from '@/constants/design/typography';

export function HomeCtaButton() {
  return (
    <Button
      variant="contained"
      href="admin/needlist-table-view"
      sx={{
        width: BUTTON_WIDTH_LG,
        height: BUTTON_HEIGHT_MD,
        bgcolor: COLORS.accentYellow,
        color: COLORS.primaryText,
        fontSize: FONT_SIZE_BODY_LG,
        fontWeight: FONT_WEIGHT_BOLD,
        boxShadow: 6,
        gap: 1.5,
        '&:hover': {
          bgcolor: COLORS.accentYellow,
          transform: 'translateY(-2px)',
          boxShadow: 8,
        },
      }}
    >
      <Box component="span">
        Let's go to the list
      </Box>
    </Button>
  );
}
