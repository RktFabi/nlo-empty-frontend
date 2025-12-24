import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';

export function Header() {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #ffc107 0%, #ffe28a 100%)',
              }}
            />
            <Typography variant="h6" component={Link} to="/" sx={{ fontWeight: 700, color: 'text.primary' }}>
              NeedList.ORG
            </Typography>
          </Box>

          <Stack direction="row" spacing={2} sx={{ ml: 4 }}>
            <Button component={Link} to="/" variant="text" color="secondary">
              Home
            </Button>
            <Button component={Link} to="/donate" variant="text" color="secondary">
              Donate
            </Button>
            <Button variant="text" color="secondary" disabled title="Authentication is out of scope for this flow">
              Login / Sign Up
            </Button>
          </Stack>

          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={1}>
            <Button component={Link} to="/donate" variant="contained" color="primary">
              Donate Now
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
