import { createTheme } from '@mui/material';

export const nloTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffc107',
      contrastText: '#142757',
    },
    secondary: {
      main: '#142757',
    },
    error: {
      main: '#E63946',
    },
    success: {
      main: '#076D17',
    },
    background: {
      default: '#ffffff',
      paper: '#fffef2',
    },
    text: {
      primary: '#142757',
      secondary: '#57636c',
    },
    divider: '#e0e3e7',
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '38px',
      color: '#142757',
    },
    h2: {
      fontWeight: 600,
      fontSize: '30px',
    },
    h3: {
      fontWeight: 600,
      fontSize: '22px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '16px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          boxShadow: 'none',
        },
        containedPrimary: {
          border: '1px solid #142757',
          '&:hover': {
            backgroundColor: '#ffd979',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#ffffff',
          color: '#142757',
          border: '1px solid #e0e3e7',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});
