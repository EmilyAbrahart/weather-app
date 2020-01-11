import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ContentLayout from './ContentLayout';
import { FlexFunc, color_dark } from '../styles/styles';

function App() {
  const [weather, setWeather] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [units, setUnits] = useState('metric');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [active, setActive] = useState('one')

  const getWeather = e => {
    setIsLoading(true);
    e.preventDefault();
    const cityQuery = e.target.elements.city.value;
    const countryQuery = e.target.elements.country.value;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityQuery},${countryQuery}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}`;

    axios
      .get(url)
      .then(res => setData(res))
      .catch(err => setError(err));
  };

  useEffect(() => {
    if (data) {
      setCity(data.data.city.name);
      setCountry(data.data.city.country);

      setWeather({
        one: {
          date: data.data.list[0].dt_txt,
          general: data.data.list[0].weather[0].main,
          description: data.data.list[0].weather[0].description,
          icon: data.data.list[0].weather[0].icon,
          temp: data.data.list[0].main.temp,
          temp_feel: data.data.list[0].main.feels_like,
          humidity: data.data.list[0].main.humidity,
          wind_speed: data.data.list[0].wind.speed
        },
        two: {
          date: data.data.list[8].dt_txt,
          general: data.data.list[8].weather[0].main,
          description: data.data.list[8].weather[0].description,
          icon: data.data.list[8].weather[0].icon,
          temp: data.data.list[8].main.temp,
          temp_feel: data.data.list[8].main.feels_like,
          humidity: data.data.list[8].main.humidity,
          wind_speed: data.data.list[8].wind.speed
        },
        three: {
          date: data.data.list[16].dt_txt,
          general: data.data.list[16].weather[0].main,
          description: data.data.list[16].weather[0].description,
          icon: data.data.list[16].weather[0].icon,
          temp: data.data.list[16].main.temp,
          temp_feel: data.data.list[16].main.feels_like,
          humidity: data.data.list[16].main.humidity,
          wind_speed: data.data.list[16].wind.speed
        },
        four: {
          date: data.data.list[24].dt_txt,
          general: data.data.list[24].weather[0].main,
          description: data.data.list[24].weather[0].description,
          icon: data.data.list[24].weather[0].icon,
          temp: data.data.list[24].main.temp,
          temp_feel: data.data.list[24].main.feels_like,
          humidity: data.data.list[24].main.humidity,
          wind_speed: data.data.list[24].wind.speed
        },
        five: {
          date: data.data.list[32].dt_txt,
          general: data.data.list[32].weather[0].main,
          description: data.data.list[32].weather[0].description,
          icon: data.data.list[32].weather[0].icon,
          temp: data.data.list[32].main.temp,
          temp_feel: data.data.list[32].main.feels_like,
          humidity: data.data.list[32].main.humidity,
          wind_speed: data.data.list[32].wind.speed
        }
      });

      setIsLoading(false);
    }
  }, [data]);

  return (
    <AppContainer>
      <ContentLayout
        weather={weather}
        city={city}
        country={country}
        getWeather={getWeather}
        setUnits={setUnits}
        units={units}
        isLoading={isLoading}
        active={active}
        setActive={setActive}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: ${color_dark};
  background-position: fixed;
  ${FlexFunc('column', 'center', 'center')};
  width: 100%;
  min-height: 100vh;
  overflow-y: hidden;
`;
