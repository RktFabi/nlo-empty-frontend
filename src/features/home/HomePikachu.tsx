import { Box } from '@mui/material';

import { COLORS } from '@/constants/design/colors';
import { FONT_SIZE_BODY_SM, FONT_WEIGHT_BOLD } from '@/constants/design/typography';

export function HomePikachu() {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        display: { xs: 'none', md: 'block' },
        p: 2,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          transform: 'translate(8px, 8px) rotate(12deg)',
          opacity: 0.85,
        }}
      >
        <Box
          component="img"
          src="/assets/pickapicka.png"
          alt="Pikachu mascot"
          sx={{
            width: 160,
            height: 160,
            borderRadius: 4,
            border: `4px solid ${COLORS.accentYellow}`,
            backgroundColor: COLORS.accentYellowTint,
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <Box
          sx={{
            mt: 1,
            textAlign: 'center',
            color: COLORS.primaryText,
            fontSize: FONT_SIZE_BODY_SM,
            fontWeight: FONT_WEIGHT_BOLD,
          }}
        >
          Pikachu ⚡
        </Box>
      </Box>
    </Box>
  );
}
