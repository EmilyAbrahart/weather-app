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
  setActive
}) => {
  return (
    <ContentLayoutContainer>
      <h1> WTHR. </h1>

      <ContentContainer>
        <Form getWeather={getWeather} setUnits={setUnits} />
        <Weather
          weather={weather}
          city={city}
          country={country}
          isLoading={isLoading}
          units={units}
          active={active}
          setActive={setActive}
        />
      </ContentContainer>
    </ContentLayoutContainer>
  );
};

export default ContentLayout;

const ContentLayoutContainer = styled.div`
  ${FlexFunc('column', 'center', 'center')}
  width: 80%;
  height: 70%;
  max-height: 70vh;
  background-color: ${color_dark};
  color: ${color_subtle};
`;

const ContentContainer = styled.div`
  ${FlexFunc('row', 'space-evenly', 'center')}
  width: 80%;
  height: 70%;
  background-color: ${color_dark};
  color: ${color_subtle};
`;
