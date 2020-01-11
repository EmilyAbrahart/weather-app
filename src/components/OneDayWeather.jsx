import React from 'react';

const OneDayWeather = ({ weather, units }) => {
  return (
    <div>
      <h3>Today</h3>
      <div>
        <h4>Conditions</h4>
        {weather.one.general && <div>{weather.one.general}</div>}
      </div>
      <div>
        <h4>Temperature</h4>
        {weather.one.temp && (
          <div>
            {Math.round(weather.one.temp)}
            {units === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
          </div>
        )}
        {weather.one.temp_min && (
          <div>
            Min Temp: {Math.round(weather.one.temp_min)}
            {units === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
          </div>
        )}
        {weather.one.temp_max && (
          <div>
            Max Temp: {Math.round(weather.one.temp_max)}
            {units === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
          </div>
        )}
        {weather.one.temp_feel && (
          <div>
            Feels Like: {Math.round(weather.one.temp_feel)}
            {units === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
          </div>
        )}
        {weather.one.humidity && <div>Humidity: {Math.round(weather.one.humidity)}% </div>}
        {weather.one.wind_speed && (
          <div>
            Wind: {Math.round(weather.one.wind_speed)}
            {units === 'metric' ? 'm/s' : 'mph'}
          </div>
        )}
      </div>
    </div>
  );
};

export default OneDayWeather;
