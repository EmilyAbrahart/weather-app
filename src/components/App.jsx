import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import ContentLayout from './ContentLayout';
import { FlexFunc, color_dark } from '../styles/styles';

function App() {
  const [weather, setWeather] = useState({});
  const [cityState, setCity] = useState('');
  const [countryState, setCountry] = useState('');
  const [error, setError] = useState('');

  const getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    const data = await api_call.json();

    setWeather({
      general: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      temp: data.main.temp,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      temp_feel: data.main.feels_like,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      sunrise: moment(data.sys.sunrise).format('HH:mm:ss'),
      sunset: moment(data.sys.sunset).format('HH:mm:ss')
    });
    setCity(city);
    setCountry(country);
  };

  return (
    <AppContainer>
      <ContentLayout
        weather={weather}
        city={cityState}
        country={countryState}
        getWeather={getWeather}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: ${color_dark};
  ${FlexFunc('column', 'center', 'center')};
  width: 100%;
  height: 100vh;
`;
