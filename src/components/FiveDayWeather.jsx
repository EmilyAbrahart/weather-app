import React from 'react';
import styled from 'styled-components';
import WeatherDayUnit from './WeatherDayUnit';
import { FlexFunc } from '../styles/styles';

const FiveDayWeather = ({ weather, units, setActive }) => {
  return (
    <WeatherContainer>
      <WeatherDayUnit weather={weather} units={units} setActive={setActive} day="one" />
      <WeatherDayUnit weather={weather} units={units} setActive={setActive} day="two" />
      <WeatherDayUnit weather={weather} units={units} setActive={setActive} day="three" />
      <WeatherDayUnit weather={weather} units={units} setActive={setActive} day="four" />
      <WeatherDayUnit weather={weather} units={units} setActive={setActive} day="five" />
    </WeatherContainer>
  );
};

export default FiveDayWeather;

const WeatherContainer = styled.div`
  ${FlexFunc('row', 'space-evenly', 'center')}
  flex-wrap: wrap;
  width: 100%;
`;
