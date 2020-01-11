import React from 'react';
import moment from 'moment';

const OneDayWeather = ({ weather, units, active }) => {
  return (
    <div>
      <h3>{active === 'one' ? 'Today' : moment(weather[active].date).format('dddd')}</h3>
      <div>
        <h4>Conditions</h4>
        {weather[active].general && <div>{weather[active].general}</div>}
      </div>
      <div>
        <h4>Temperature</h4>
        {weather[active].temp && (
          <div>
            {Math.round(weather[active].temp)}
            {units === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
          </div>
        )}
        {weather[active].temp_feel && (
          <div>
            Feels Like: {Math.round(weather[active].temp_feel)}
            {units === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
          </div>
        )}
        {weather[active].humidity && <div>Humidity: {Math.round(weather[active].humidity)}% </div>}
        {weather[active].wind_speed && (
          <div>
            Wind: {Math.round(weather[active].wind_speed)}
            {units === 'metric' ? 'm/s' : 'mph'}
          </div>
        )}
      </div>
    </div>
  );
};

export default OneDayWeather;
