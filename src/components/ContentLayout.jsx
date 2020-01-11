import React from 'react';
import styled from 'styled-components';
import { color_dark, color_subtle } from '../styles/styles';
import Form from './Form';
import Weather from './Weather';

const ContentLayout = ({ getWeather, city, country, weather }) => {
  return (
    <ContentLayoutContainer>
      <h1> WTHR. </h1>
      <Form getWeather={getWeather} />
      <Weather weather={weather} city={city} country={country} />
    </ContentLayoutContainer>
  );
};

export default ContentLayout;

const ContentLayoutContainer = styled.div`
  width: 80%;
  height: 70%;
  background-color: ${color_dark};
  color: ${color_subtle};
  border-radius: 1%;
`;
