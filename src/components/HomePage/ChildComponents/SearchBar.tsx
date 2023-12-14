import { SetStateAction, useState, Dispatch } from 'react';

import {
  Autocomplete,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import axiosApiInstance from 'services/axios.interceptor';
import { debounce } from 'utils/debounce';
import { IPlace, ICoordinates } from 'interfaces/places/types';

interface ISearchBarProps {
  setSelectedCoordinates: Dispatch<SetStateAction<ICoordinates | null>>;
}

export default function SearchBar({ setSelectedCoordinates }: ISearchBarProps) {
  const [options, setOptions] = useState<IPlace[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCities = async (city: string) => {
    setIsLoading(true);
    axiosApiInstance
      .get(`/search.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`)
      .then((res) => {
        const modified = res.data.map((one: IPlace) => {
          return { ...one, label: one.name, id: one.id };
        });
        setOptions(modified);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  // Debounce the fetchData function with a delay of 500 milliseconds
  const debouncedFetchData = debounce(getCities, 500);

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: '20px',

          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            border: '0',
          },
        }}
        options={options}
        isOptionEqualToValue={(option: IPlace, value: IPlace) => {
          return option.id === value?.id;
        }}
        filterOptions={(x) => x} //to disable the built-in filtering
        renderInput={(params) => (
          <TextField
            {...params}
            label="search city"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        noOptionsText="No Cities"
        onChange={(_, newValue: IPlace | null) => {
          //when select an option
          if (newValue?.lat && newValue?.lon)
            setSelectedCoordinates({ lat: newValue.lat, lng: newValue.lon });
        }}
        onInputChange={(_, newInputValue) => {
          //when user type in searchbox
          if (newInputValue.trim()) {
            debouncedFetchData(newInputValue);
          }
        }}
        onClose={() => {
          setOptions([]);
        }}
        loading={isLoading}
        loadingText={'loading...'}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.id}>
              <Grid container alignItems="center" justifyContent={'flex-start'}>
                <Grid item sx={{ display: 'flex', width: 44 }}>
                  <LocationOnIcon sx={{ color: 'text.secondary' }} />
                </Grid>
                <Grid
                  item
                  justifyContent={'flex-start'}
                  sx={{ wordWrap: 'break-word' }}
                >
                  <Typography
                    align="left"
                    variant="body2"
                    color="text.secondary"
                  >
                    {option.name}
                  </Typography>

                  <Typography
                    align="left"
                    sx={{ fontWeight: 'bold' }}
                    variant="body2"
                  >
                    {option.country}{' '}
                  </Typography>
                </Grid>
              </Grid>
            </li>
          );
        }}
      />
    </>
  );
}
