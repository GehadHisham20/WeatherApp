import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif',
    fontWeightRegular: 400,
  },
  palette: {
    background: {
      paper: '#202B3C', // --main-color
      default: '#0b121e',
    },

    text: {
      primary: '#ffffff', // --white-color
      secondary: '#98a0ae', // --grey-color
    },
  },
});

export default theme;
