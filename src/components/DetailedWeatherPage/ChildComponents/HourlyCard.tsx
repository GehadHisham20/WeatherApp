import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { IHour } from 'interfaces/forecast/types';

interface IHourlyCardProps {
  hourlyData: IHour[];
}
export default function HourlyCard({ hourlyData }: IHourlyCardProps) {
  return (
    <>
      <Card
        sx={{
          borderRadius: '20px',
          padding: '1.5em',
        }}
      >
        <CardContent>
          <Box>
            <Typography
              sx={{ textAlign: 'start', marginBottom: '1em' }}
              variant="h5"
              color="text.secondary"
            >
              Today's Forecast{' '}
            </Typography>

            <Grid
              container
              alignItems="center"
              spacing={6}
              justifyContent={'flex-start'}
            >
              {hourlyData?.map((one, index: number) => {
                return (
                  <Grid
                    xs={6}
                    sm={4}
                    md={2}
                    key={index}
                    item
                    justifyContent={'center'}
                  >
                    <>
                      <Grid
                        container
                        direction={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                      >
                        <Grid item justifyContent={'center'}>
                          <Typography
                            sx={{ fontWeight: 'bold', textAlign: 'start' }}
                            variant="h6"
                            color="text.secondary"
                          >
                            {one.time?.substring(11, 16)}
                          </Typography>
                        </Grid>
                        <Grid item justifyContent={'center'}>
                          <Avatar
                            sx={{ width: 80, height: 80 }}
                            src={one.condition.icon}
                            alt="weather"
                          />
                        </Grid>

                        <Grid item justifyContent={'center'}>
                          <Typography
                            sx={{ fontWeight: 'bold', textAlign: 'start' }}
                            variant="h6"
                          >
                            {one.temp_c} °
                          </Typography>
                        </Grid>
                      </Grid>
                    </>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </CardContent>{' '}
      </Card>
    </>
  );
}
