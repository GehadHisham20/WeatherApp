import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, CircularProgress, Grid } from '@mui/material';
import axiosApiInstance from 'services/axios.interceptor';
import Notification from 'shared/Notification/Notification';
import { IForecastDay } from 'interfaces/forecast/types';
import TodayCard from './ChildComponents/TodayCard';
import HourlyCard from './ChildComponents/HourlyCard';
import AirCard from './ChildComponents/AirCard';

const WeatherDetails = () => {
  const { day, city } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IForecastDay | null>(null);
  const [errorComponent, setErrorComponent] = useState<React.ReactNode>(null);

  function getForecaset() {
    setIsLoading(true);
    axiosApiInstance
      .get(
        `/forecast.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${city}&unixdt=${day}`
      )
      .then((res) => {
        setData(res.data.forecast.forecastday[0]);
        setIsLoading(false);
      })
      .catch((e) => {
        setErrorComponent(() => (
          <Notification open={true} message={'Error Loading Weather ...'} />
        ));
        console.log(e);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (city && day) {
      getForecaset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, day]);

  return (
    <div>
      {errorComponent}
      {errorComponent || isLoading || !data ? (
        <Card
          sx={{
            width: '100%',
            marginTop: '2em',
            borderRadius: '20px',
            padding: '1.5em',
            backgroundColor: 'background.default',
            boxShadow: 'none',
          }}
        >
          <CardContent>
            <Box
              sx={{ minHeight: '50vh' }}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              {isLoading ? (
                <CircularProgress />
              ) : errorComponent || !data ? (
                'No Location Detected ...'
              ) : (
                ''
              )}
            </Box>
          </CardContent>
        </Card>
      ) : (
        <>
          <Grid direction={'column'} container spacing={2}>
            <Grid item>
              <TodayCard
                city={city || ''}
                temp={data?.day.avgtemp_c}
                conditionText={data?.day?.condition?.text}
                conditionIcon={data?.day?.condition?.icon}
              />
            </Grid>
            <Grid item>
              <HourlyCard hourlyData={data?.hour} />
            </Grid>
            <Grid item>
              <AirCard dayData={data.day} />
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default WeatherDetails;
