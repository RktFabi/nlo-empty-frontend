import { NLOSection } from '@/features/home/NLOSection';
import { Footer } from '@/layouts/Footer';
import { Box } from '@mui/material';
// --- MAIN APP COMPONENT ---

export const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', alignItems: 'center' }}>
      <NLOSection />
      <Box width="100%">
        <Footer />
      </Box>
    </Box>
  );
};
