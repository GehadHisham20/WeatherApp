import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import Input from './input';
import WeatherTable from './table';
import WeatherDetail from './details';
import ErrorMessage from '../shared/errorMessage/error';
import LoadingIndicator from '../shared/loading/loading';
import axios from 'axios';
import MenuIcon from '@mui/icons-material/Menu';

const apiKey = '92dc3f44f0124fb48da232520233110';
const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';

const getWeatherForecast = async (city: string) => {
  try {
    const response = await axios.get(`${baseUrl}?q=${city}&appid=${apiKey}`);
    return response.data.list.map((item) => ({
      date: item.dt_txt,
      temperature: item.main.temp,
      weatherCondition: item.weather[0].description,
      humidity: item.main.humidity,
      windSpeed: item.wind.speed,
    }));
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

function Weather() {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      setLoading(true);
      getWeatherForecast(city)
        .then((data) => {
          setForecast(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [city]);

  const handleRowClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src="img/logo.png"
              alt="Logo"
              style={{ verticalAlign: 'baseline' }}
            />
            <div style={{ display: 'inline-block', marginLeft: '10px' }}>
              <Typography variant="h5" fontWeight="bold">
                Weather
              </Typography>
              <Typography variant="body2">tagline goes here</Typography>
            </div>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    // <Container component="main" maxWidth="md">
    //   <CssBaseline />
    //   <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
    //     <Typography variant="h4" gutterBottom>
    //       Weather Forecast App
    //     </Typography>
    //     <Input onSearch={(city) => setCity(city)} />
    //     {loading && <LoadingIndicator />}
    //     {error && <ErrorMessage message={error} />}
    //     {forecast.length > 0 && (
    //       <WeatherTable forecast={forecast} onRowClick={handleRowClick} />
    //     )}
    //     {selectedDay && <WeatherDetail selectedDay={selectedDay} />}
    //   </Paper>
    // </Container>
  );
}

export default Weather;
