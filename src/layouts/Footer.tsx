import { infoSiteAsset } from '@/constants/assets';
import { COLORS } from '@/constants/design/colors';
import { PAGE_MAX_WIDTH } from '@/constants/design/layout_constraints';
import { FONT_WEIGHT_MEDIUM, FONT_WEIGHT_NORMAL } from '@/constants/design/typography';
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: COLORS.primaryText, color: 'white', py: 4, px: { xs: 2, md: 3 } }}>
      <Container sx={{ maxWidth: PAGE_MAX_WIDTH, mx: 'auto' }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'center', md: 'center' }}
          justifyContent="space-between"
          spacing={{ xs: 3, md: 6 }}
        >
          <Box
            component="img"
            src={infoSiteAsset('Logo_N.png')}
            alt="NeedList.ORG logo"
            sx={{ height: { xs: 60, md: 70 }, width: 'auto' }}
          />

          <Stack spacing={1} textAlign={{ xs: 'center', md: 'left' }}>
            <Typography sx={{ fontWeight: { FONT_WEIGHT_NORMAL }, color: 'white' }}>
              US 501(c)(3) Public Charity (EIN 992145356)
            </Typography>
            <Typography sx={{ fontWeight: { FONT_WEIGHT_NORMAL }, color: 'white' }}>
              Canadian Registered Charity (BN 750173403RR0001)
            </Typography>
            <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }} alignItems="center">
              <Link
                href="/terms"
                underline="always"
                sx={{
                  color: COLORS.stripeBlue,
                  fontWeight: FONT_WEIGHT_MEDIUM,
                  textDecorationColor: COLORS.stripeBlue,
                }}
              >
                Terms &amp; Conditions
              </Link>
              <Typography sx={{ opacity: 0.8 }}>|</Typography>
              <Link
                href="/privacy-policy"
                underline="always"
                sx={{
                  color: COLORS.stripeBlue,
                  fontWeight: FONT_WEIGHT_MEDIUM,
                  textDecorationColor: COLORS.stripeBlue,
                }}
              >
                Privacy Policy
              </Link>
            </Stack>
          </Stack>

          <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 700 }}>
              Contact
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  height: 30,
                  width: 36,
                  border: '2px solid white',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Mail size={18} color="white" />
              </Box>
              <Link href="mailto:info@needlist.org" underline="always" sx={{ color: 'white', fontWeight: 600 }}>
                info@needlist.org
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
