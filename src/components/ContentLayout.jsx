import React from 'react';
import styled from 'styled-components';
import { FlexFunc, color_dark, color_subtle } from '../styles/styles';
import Form from './Form';
import Weather from './Weather';

const ContentLayout = ({
  getWeather,
  city,
  country,
  weather,
  setUnits,
  units,
  isLoading,
  active,
  setActive,
  error
}) => {
  return (
    <ContentLayoutContainer>
      <Form getWeather={getWeather} setUnits={setUnits} units={units} />
      <Weather
        weather={weather}
        city={city}
        country={country}
        isLoading={isLoading}
        units={units}
        active={active}
        setActive={setActive}
        error={error}
      />
    </ContentLayoutContainer>
  );
};

export default ContentLayout;

const ContentLayoutContainer = styled.div`
  ${FlexFunc('row', 'space-evenly', 'center')}
  width: 80%;
  height: 70%;
  max-height: 70vh;
  max-width: 1024px;
  background-color: ${color_dark};
  color: ${color_subtle};
`;
