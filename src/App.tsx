import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import theme from './theme';
import Home from 'components/HomePage/Home';
import WeatherDetails from 'components/DetailedWeatherPage/WeatherDetails';
import Error404 from 'shared/ErrorPages/404';
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container sx={{ padding: '2em' }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/forecast/:city/:day" element={<WeatherDetails />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
