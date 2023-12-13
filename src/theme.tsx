import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontWeightRegular: 400,
  },
  palette: {
    //     common: {
    //       black: '#202b3c', // --second-color
    //       white: '#ffffff',
    //     },
    background: {
      paper: '#202B3C', // --main-color
      default: '#0b121e',
    },
    primary: {
      main: '#0294fe', // --blue-color
    },
    text: {
      primary: '#ffffff', // --white-color
      secondary: '#98a0ae', // --grey-color
    },
  },
});

export default theme;
