// src/features/admin/needlist-table-view/NeedlistTableHeader.tsx

import { COLORS } from "@/constants/design/colors";
import { BUTTON_HEIGHT_MD, BUTTON_WIDTH_LG } from "@/constants/design/sizing";
import { FONT_FAMILY_HEADER, FONT_SIZE_HEADING_LG, FONT_SIZE_HEADING_XL, FONT_WEIGHT_BOLD } from "@/constants/design/typography";
import { Box, Button, Typography } from "@mui/material";
import { Package } from "lucide-react";

export function NeedlistTableHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', md: 'center' },
        gap: 2,
        mb: 4,
      }}
    >
      <Typography
        sx={{
          fontFamily: FONT_FAMILY_HEADER,
          fontSize: { xs: FONT_SIZE_HEADING_LG, md: FONT_SIZE_HEADING_XL },
          fontWeight: FONT_WEIGHT_BOLD,
          color: COLORS.primaryText,
        }}
      >
        Active Needs
      </Typography>

      <Button
        variant="contained"
        startIcon={<Package size={20} />}
        sx={{
          height: BUTTON_HEIGHT_MD,
          minWidth: BUTTON_WIDTH_LG,
          bgcolor: COLORS.accentYellow,
          color: COLORS.primaryText,
          fontWeight: FONT_WEIGHT_BOLD,
          boxShadow: 6,
          '&:hover': {
            bgcolor: COLORS.accentYellow,
            boxShadow: 8,
            transform: 'translateY(-2px)',
          },
        }}
      >
        Create New Need
      </Button>
    </Box>
  );
}
