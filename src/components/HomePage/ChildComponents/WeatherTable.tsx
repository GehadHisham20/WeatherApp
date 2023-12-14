import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';

import axiosApiInstance from 'services/axios.interceptor';
import { ICoordinates } from 'interfaces/places/types';
import { IForecastDay } from 'interfaces/forecast/types';
import Notification from 'shared/Notification/Notification';

interface IWeatherTableProps {
  selectedCoordinates: ICoordinates | null;
}

interface IRow {
  date: string;
  conditionText: string;
  conditionIcon: string;
  minTemp: number;
  maxTemp: number;
  date_epoch: number;
}

export default function WeatherTable({
  selectedCoordinates,
}: IWeatherTableProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState<IRow[] | []>([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [errorComponent, setErrorComponent] = useState<React.ReactNode>(null);

  function getForecaset(selected: ICoordinates) {
    setIsLoading(true);
    axiosApiInstance
      .get(
        `/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY + 'ss'}&q=${
          selected.lat
        },${selected.lng}&days=5`
      )
      .then((res) => {
        const rows = res.data.forecast.forecastday.map((one: IForecastDay) => {
          const { date, date_epoch, day } = one;
          return {
            date: date,
            conditionText: day.condition.text,
            conditionIcon: day.condition.icon,
            minTemp: day.mintemp_c,
            maxTemp: day.maxtemp_c,
            date_epoch: date_epoch,
          };
        });
        setRows(rows);
        setSelectedCity(res.data.location.name);
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
    if (selectedCoordinates && Object.keys(selectedCoordinates).length !== 0) {
      getForecaset(selectedCoordinates);
    }
  }, [selectedCoordinates]);

  return (
    <>
      {errorComponent}

      <Card sx={{ marginTop: '2em', borderRadius: '20px', padding: '1.5em' }}>
        <CardContent>
          {isLoading ? (
            //if is loading show spinner
            <Box
              sx={{ minHeight: '50vh' }}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <CircularProgress />
            </Box>
          ) : !selectedCoordinates || errorComponent ? (
            //if user doesn't allow location
            <Box
              sx={{ minHeight: '50vh' }}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Typography variant="body1" color="text.secondary">
                No Location Detected ...
              </Typography>
            </Box>
          ) : (
            <TableContainer sx={{ boxShadow: 'none' }} component={Paper}>
              <Typography
                sx={{ textAlign: 'start', marginBottom: '0.5em' }}
                variant="h5"
                color="text.secondary"
              >
                {selectedCity}
              </Typography>
              <Table aria-label="weather table">
                <TableBody>
                  {rows?.map((row: IRow, index: number) => (
                    <TableRow
                      hover
                      key={index}
                      sx={{
                        '& td, & th': {
                          borderBottom: '1px solid var(--grey-color)',
                          cursor: 'pointer',
                          //  '&:hover'{

                          //  }
                        },
                        '&:last-child td, &:last-child th': {
                          border: 0,
                        },
                      }}
                      onClick={() =>
                        navigate(`/forecast/${selectedCity}/${row.date_epoch}`)
                      }
                    >
                      <TableCell sx={{ paddingY: '2em' }} align="center">
                        <Typography variant="body1" color="text.secondary">
                          {row.date}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ paddingY: '2em' }} align="center">
                        <Grid
                          container
                          alignItems="center"
                          justifyContent={'center'}
                          spacing={3}
                        >
                          <Grid item>
                            <Avatar
                              sx={{ width: 80, height: 80 }}
                              src={row.conditionIcon}
                              alt="weather"
                            />
                          </Grid>
                          <Grid
                            item
                            justifyContent={'flex-start'}
                            sx={{ wordWrap: 'break-word' }}
                          >
                            <Typography
                              sx={{ fontWeight: 'bold' }}
                              variant="body1"
                            >
                              {row.conditionText}{' '}
                            </Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell sx={{ paddingY: '2em' }} align="center">
                        <Grid
                          container
                          alignItems="center"
                          spacing={0.5}
                          justifyContent={'center'}
                        >
                          <Grid item>
                            <Typography
                              sx={{ fontWeight: 'bold' }}
                              variant="body1"
                            >
                              {row.maxTemp} /
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            justifyContent={'flex-start'}
                            sx={{ wordWrap: 'break-word' }}
                          >
                            <Typography variant="body1" color="text.secondary">
                              {row.minTemp}
                            </Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </>
  );
}
