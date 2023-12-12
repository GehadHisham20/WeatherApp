import React from 'react';

const WeatherDetail = ({ selectedDay }) => {
  return (
    <div>
      <h2>Weather Details for {selectedDay.date}</h2>
      <p>Temperature: {selectedDay.temperature}</p>
      <p>Humidity: {selectedDay.humidity}</p>
      <p>Wind Speed: {selectedDay.windSpeed}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default WeatherDetail;
