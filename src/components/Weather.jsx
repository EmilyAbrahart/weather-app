import React from 'react';

const Weather = ({ city, country, weather }) => {
  return (
    <div>
      {city && country && (
        <div>
          <div>
            {city}, {country}
          </div>
          <div>
            <h4>Conditions</h4>
            {weather.general && <div>{weather.general}</div>}
          </div>
          <div>
            <h4>Temperature</h4>
            {weather.temp && <div>{weather.temp}</div>}
            {weather.temp_min && <div>Min Temp: {weather.temp_min}</div>}
            {weather.temp_max && <div>Max Temp: {weather.temp_max}</div>}
            {weather.temp_feel && <div>Feels Like: {weather.temp_feel}</div>}
            {weather.humidity && <div>Humidity: {weather.humidity}</div>}
            {weather.wind_speed && <div>Wind: {weather.wind_speed}</div>}
          </div>
          <div>
            {weather.sunrise && <div>Sunrise: {weather.sunrise}</div>}
            {weather.sunset && <div>Sunset: {weather.sunset}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
