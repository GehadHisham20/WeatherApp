import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

interface ITodayCardProps {
  city: string;
  conditionIcon: string;
  conditionText: string;
  temp: number;
}

export default function TodayCard({
  city,
  conditionIcon,
  conditionText,
  temp,
}: ITodayCardProps) {
  return (
    <Card
      sx={{
        borderRadius: '20px',
        padding: '1.5em',
        backgroundColor: 'background.default',
        boxShadow: 'none',
      }}
    >
      <CardContent>
        <Grid
          container
          alignItems="center"
          spacing={3}
          justifyContent={'space-evenly'}
        >
          <Grid
            item
            justifyContent={'flex-start'}
            sx={{ wordWrap: 'break-word' }}
          >
            <Box>
              <Grid
                container
                direction={'column'}
                spacing={3}
                justifyContent={'space-evenly'}
              >
                <Grid
                  item
                  justifyContent={'flex-start'}
                  sx={{ wordWrap: 'break-word' }}
                >
                  <Typography
                    sx={{ fontWeight: 'bold', textAlign: 'start' }}
                    variant="h4"
                  >
                    {city}
                  </Typography>
                  <Typography
                    sx={{ textAlign: 'start' }}
                    variant="body1"
                    color="text.secondary"
                    mt={1}
                  >
                    {conditionText}
                  </Typography>
                </Grid>
                <Grid
                  item
                  justifyContent={'flex-start'}
                  sx={{ wordWrap: 'break-word' }}
                >
                  <Typography
                    sx={{ fontWeight: 'bold', textAlign: 'start' }}
                    variant="h4"
                  >
                    {temp} °
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item>
            <Avatar
              sx={{ width: 120, height: 120 }}
              src={conditionIcon}
              alt="weather"
            />
          </Grid>
        </Grid>
      </CardContent>{' '}
    </Card>
  );
}
