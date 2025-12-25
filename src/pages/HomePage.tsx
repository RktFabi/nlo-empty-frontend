import { Box } from '@mui/material';

import { COLORS } from '@/constants/design/colors';
import { PAGE_MAX_WIDTH } from '@/constants/design/layout_constraints';
import { HomeCtaButton } from '@/features/home/HomeCtaButton';
import { HomeHeader } from '@/features/home/HomeHeader';
import { HomePikachu } from '@/features/home/HomePikachu';
import { HomeTaskSection } from '@/features/home/HomeTaskSection';

// --- MAIN APP COMPONENT ---
export const HomePage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: PAGE_MAX_WIDTH,
        bgcolor: COLORS.background,
        borderRadius: 6,
        boxShadow: 10,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ height: 1.5, width: '100%', bgcolor: COLORS.accentYellow }} />

      <Box
        sx={{
          px: { xs: 2.5, md: 4 },
          py: { xs: 4, md: 5 },
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <HomeHeader />
        <HomeTaskSection />
        <HomeCtaButton />
      </Box>

      <HomePikachu />
    </Box>
  );
};
