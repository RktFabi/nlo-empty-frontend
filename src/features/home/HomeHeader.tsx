import { Box, Typography } from '@mui/material';

import { COLORS } from '@/constants/design/colors';
import { PAGE_MAX_WIDTH } from '@/constants/design/layout_constraints';
import {
  FONT_SIZE_BODY_LG,
  FONT_SIZE_HEADING_LG,
  FONT_SIZE_HEADING_MD,
  FONT_SIZE_HEADING_XL,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_SEMIBOLD,
} from '@/constants/design/typography';

export function HomeHeader() {
  return (
    <>
      <Typography
        sx={{
          fontSize: { xs: FONT_SIZE_HEADING_LG, md: FONT_SIZE_HEADING_XL },
          fontWeight: FONT_WEIGHT_BOLD,
          color: COLORS.primaryText,
          mb: 1,
        }}
      >
        Welcome to NLO
      </Typography>

      <Typography
        sx={{
          fontSize: FONT_SIZE_BODY_LG,
          color: COLORS.mutedText,
          mb: 2,
          maxWidth: PAGE_MAX_WIDTH,
          mx: 'auto',
        }}
      >
        We help charities get what they need —{' '}
        <Box component="span" sx={{ position: 'relative', display: 'inline-block', px: 0.5 }}>
          <Box
            component="span"
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0.5,
              height: 1,
              bgcolor: COLORS.accentYellow,
              opacity: 0.6,
              zIndex: -1,
            }}
          />
          <Box component="span" sx={{ color: COLORS.primaryText, fontWeight: FONT_WEIGHT_BOLD }}>
            100% free
          </Box>
        </Box>{' '}
        ✊
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 2,
            px: 3,
            py: 1.5,
            borderRadius: 999,
            bgcolor: COLORS.primaryText,
            color: COLORS.background,
            boxShadow: 6,
            transform: 'rotate(-2deg)',
            transition: 'transform 200ms ease, box-shadow 200ms ease',
            '&:hover': {
              transform: 'rotate(0deg) scale(1.05)',
              boxShadow: 8,
            },
          }}
        >
          <Typography sx={{ fontWeight: FONT_WEIGHT_SEMIBOLD, fontSize: FONT_SIZE_BODY_LG }}>
            Good luck and have fun!
          </Typography>
          <Box component="span" sx={{ fontSize: FONT_SIZE_HEADING_MD }}>
            ✊
          </Box>
        </Box>
      </Box>
    </>
  );
}
