import { COLORS } from '@/constants/design/colors';
import { PAGE_MAX_WIDTH } from '@/constants/design/layout_constraints';
import { FONT_SIZE_BODY_SM } from '@/constants/design/typography';
import privacyContent from '@/content/legal/privacy_policy.md?raw';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
export const PrivacyPolicy = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ maxWidth: PAGE_MAX_WIDTH, mx: 'auto' }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            color: 'text.primary',
            mb: 2,
          }}
        >
          Back
        </Button>

        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
          NeedList.ORG Privacy Policy
        </Typography>

        <Box
          sx={{
            '& p': { fontSize: FONT_SIZE_BODY_SM, lineHeight: 1.5, color: COLORS.black, mb: 2 },
            '& h1, & h2, & h3, & h4, & h5': { fontSize: '14px', fontWeight: 700, mt: 0, mb: 1.5 },
          }}
        >
          <ReactMarkdown>{privacyContent}</ReactMarkdown>
        </Box>
      </Box>
    </Container>
  );
};
