import { Box, Avatar, Typography } from '@mui/material';

const Error404 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        flexDirection: 'column',
      }}
    >
      <Avatar src="error/error.png" alt="error 404" />
      <Typography
        sx={{ textAlign: 'start', marginTop: '1em' }}
        variant="h5"
        color="text.secondary"
      >
        Page Not Found
      </Typography>
    </Box>
  );
};

export default Error404;
