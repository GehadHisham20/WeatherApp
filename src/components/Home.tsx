import { Grid } from '@mui/material';
import TodayWeather from './todayWeather';
import UpcomingWeather from './upcomingWeather';

export default function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <TodayWeather />
        </Grid>
        <Grid item xs={6} md={4}>
          <UpcomingWeather />
        </Grid>
      </Grid>
    </>
  );
}
