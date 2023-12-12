import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const WeatherTable = ({ forecast, onRowClick }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Temperature</TableCell>
            <TableCell>Weather Condition</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forecast.map((day) => (
            <TableRow key={day.date} onClick={() => onRowClick(day)}>
              <TableCell>{day.date}</TableCell>
              <TableCell>{day.temperature}</TableCell>
              <TableCell>{day.weatherCondition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherTable;
