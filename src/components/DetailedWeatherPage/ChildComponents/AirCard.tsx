import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShowerIcon from '@mui/icons-material/Shower';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { IDay } from 'interfaces/forecast/types';

interface IAirCardProps {
  dayData: IDay;
}

interface IModifiedData {
  title: string;
  icon: React.ReactNode;
  value: string;
}
export default function AirCard({ dayData }: IAirCardProps) {
  const [data, setData] = useState<IModifiedData[] | []>([]);
  useEffect(() => {
    if (dayData) {
      const modifiedData = [
        {
          title: 'Max Temprature',
          icon: (
            <ThermostatIcon fontSize="large" sx={{ color: 'text.secondary' }} />
          ),
          value: `${dayData.maxtemp_c} °`,
        },
        {
          title: 'Min Temprature',
          icon: (
            <ThermostatIcon fontSize="large" sx={{ color: 'text.secondary' }} />
          ),
          value: `${dayData.mintemp_c} °`,
        },
        {
          title: 'Wind',
          icon: <AirIcon fontSize="large" sx={{ color: 'text.secondary' }} />,
          value: `${dayData.maxwind_kph} km/h`,
        },
        {
          title: 'UV Index',
          icon: (
            <Brightness7Icon
              fontSize="large"
              sx={{ color: 'text.secondary' }}
            />
          ),
          value: `${dayData.uv}`,
        },
        {
          title: 'Humidity',
          icon: (
            <ShowerIcon fontSize="large" sx={{ color: 'text.secondary' }} />
          ),
          value: `${dayData.avghumidity} %`,
        },

        {
          title: 'Visibility',
          icon: (
            <RemoveRedEyeIcon
              fontSize="large"
              sx={{ color: 'text.secondary' }}
            />
          ),
          value: `${dayData.avgvis_km} km`,
        },
        {
          title: 'Chance of rain',
          icon: (
            <WaterDropIcon fontSize="large" sx={{ color: 'text.secondary' }} />
          ),
          value: `${dayData.daily_chance_of_rain} %`,
        },
        {
          title: 'Chance of snow',
          icon: (
            <AcUnitIcon fontSize="large" sx={{ color: 'text.secondary' }} />
          ),
          value: `${dayData.daily_chance_of_snow} %`,
        },
      ];
      setData(modifiedData);
    }
  }, [dayData]);
  return (
    <>
      <Card
        sx={{
          borderRadius: '20px',
          padding: '1.5em',
          backgroundColor: 'Background.default',
        }}
      >
        <CardContent>
          <Box>
            <Typography
              sx={{ textAlign: 'start', marginBottom: '1em' }}
              variant="h5"
              color="text.secondary"
            >
              Air Condition{' '}
            </Typography>
            <Grid
              container
              alignItems="center"
              spacing={6}
              justifyContent={'flex-start'}
            >
              {data?.map((one, index) => {
                return (
                  <Grid key={index} md={4} xs={12} item>
                    <>
                      <Grid container spacing={2} alignItems={'flex-start'}>
                        <Grid item>{one.icon}</Grid>
                        <Grid item>
                          <Typography
                            sx={{
                              textAlign: 'start',
                              textTransform: 'uppercase',
                            }}
                            variant="subtitle1"
                            color="text.secondary"
                          >
                            {one.title}
                          </Typography>

                          <Typography
                            sx={{ fontWeight: 'bold', textAlign: 'start' }}
                            variant="h6"
                          >
                            {one.value}
                          </Typography>
                        </Grid>
                      </Grid>
                    </>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
