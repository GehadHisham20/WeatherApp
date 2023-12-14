import { Snackbar, Alert } from '@mui/material';
import { useState } from 'react';

interface INotification {
  message: string;
  open: boolean;
}
export default function ErrorMessage({ message, open }: INotification) {
  const [openSnackbar, setOpenSnackbar] = useState(open);
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{ width: '100%' }}
      open={openSnackbar}
      autoHideDuration={5000}
      onClose={() => setOpenSnackbar(false)}
    >
      <Alert severity="error">{message}</Alert>
    </Snackbar>
  );
}
