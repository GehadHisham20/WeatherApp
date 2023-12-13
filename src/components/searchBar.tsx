import { Autocomplete, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
const List: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Paper
      sx={{
        '& .MuiAutocomplete-listbox': {
          marginTop: '0.5em',
        },
      }}
    >
      {children}
    </Paper>
  );
};

const getCities = async (city: string) => {
  axiosApiInstance;
};
export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...topFilms]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        PaperComponent={List}
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: '20px',

          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            border: '0',
          },
        }}
        renderInput={(params) => <TextField {...params} label="search city" />}
      />
    </>
  );
}
