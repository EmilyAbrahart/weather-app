import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const WeatherDayUnit = ({ weather, units, day, setActive }) => {
  return (
    <div onClick={() => setActive(day)}>
      <div>{day === 'one' ? 'Today' : moment(weather[day].date).format('dddd')}</div>
      <div>
        {Math.round(weather[day].temp)}
        {units === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
      </div>
      <img src={`https://openweathermap.org/img/wn/${weather[day].icon}@2x.png`} alt="" />
    </div>
  );
};

export default WeatherDayUnit;
