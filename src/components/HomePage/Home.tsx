import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import SearchBar from './ChildComponents/SearchBar';
import WeatherTable from './ChildComponents/WeatherTable';
import { ICoordinates } from 'interfaces/places/types';

export default function Home() {
  const [selectedCoordinates, setSelectedCoordinates] =
    useState<ICoordinates | null>(null);

  //fetch user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      setSelectedCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  return (
    <>
      <Grid direction={'column'} container spacing={2}>
        <Grid item>
          <SearchBar setSelectedCoordinates={setSelectedCoordinates} />
        </Grid>
        <Grid item>
          <WeatherTable selectedCoordinates={selectedCoordinates} />
        </Grid>
      </Grid>
    </>
  );
}
