import React from 'react';
import styled from 'styled-components';
import WeatherDayUnit from './WeatherDayUnit';

const FiveDayWeather = ({ weather, units }) => {
  return (
    <div>
      <h3>5 Day Forecast</h3>
      <div>
        <WeatherDayUnit weather={weather} units={units} day='one' />
        <WeatherDayUnit weather={weather} units={units} day='two' />
        <WeatherDayUnit weather={weather} units={units} day='three' />
        <WeatherDayUnit weather={weather} units={units} day='four' />
        <WeatherDayUnit weather={weather} units={units} day='five' />
      </div>
    </div>
  );
};

export default FiveDayWeather;
