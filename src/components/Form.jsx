import React from 'react';
import styled from 'styled-components';
import { FlexFunc, color_subtle, color_light_blue, color_dark } from '../styles/styles';
import { SearchBar } from './SearchBar';

const Form = ({
  getWeather,
  setUnits,
  units,
  searchCity,
  setSearchCity,
  searchCountry,
  setSearchCountry,
}) => {
  const setMetric = () => {
    setUnits('metric');
  };
  const setImperial = () => {
    setUnits('imperial');
  };
  const handleCityChange = (e) => {
    setSearchCity(e.target.value);
  };
  return (
    <FormContainer units={units}>
      <h1> WTHR. </h1>
      <StyledForm onSubmit={getWeather}>
        <FormInput
          type="text"
          name="city"
          placeholder="City"
          onChange={handleCityChange}
          value={searchCity}
        />
        <SearchBar searchCountry={searchCountry} setSearchCountry={setSearchCountry} />
        <UnitContainer units={units}>
          <MetricButton units={units} type="button" onClick={setMetric}>
            Metric
          </MetricButton>
          <ImperialButton units={units} type="button" onClick={setImperial}>
            Imperial
          </ImperialButton>
        </UnitContainer>

        <FormButton type="submit">Get Weather</FormButton>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  ${FlexFunc('column', 'center', 'flex-start')}
  height:400px;
  padding: 2rem;

  h1 {
    align-self: center;
    font-size: 3rem;
  }
`;

const StyledForm = styled.form`
  ${FlexFunc('column', 'space-evenly', 'center')}
`;

const FormInput = styled.input`
  background: none;
  color: ${color_subtle};
  border: none;
  border-bottom: 1px solid ${color_light_blue};
  box-shadow: none;
  outline: none;
  padding: 0.3rem;
  margin: 1rem;
  width: 15rem;
`;

const UnitContainer = styled.div`
  padding: 1rem;
  width: 100%;
`;

const FormButton = styled.button`
  color: ${color_dark};
  background: ${color_light_blue};
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  border: 2px solid ${color_light_blue};
  margin: 1rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${color_dark};
    color: ${color_light_blue};
  }
`;

const UnitButton = styled.button`
  padding: 0.5rem;
  width: 49%;
  border: none;
  font-weight: bold;
  outline: none;
`;

const MetricButton = styled(UnitButton)`
  background-color: ${(props) => (props.units === 'metric' ? color_light_blue : color_dark)};
  color: ${(props) => (props.units === 'metric' ? color_dark : color_light_blue)};
  box-shadow: ${(props) => (props.units === 'metric' ? 'inset 0 3px 8px #000' : 'none')};
  cursor: ${(props) => (props.units === 'metric' ? 'default' : 'pointer')};
  border-radius: 1rem 0 0 1rem;
`;

const ImperialButton = styled(UnitButton)`
  background-color: ${(props) => (props.units === 'imperial' ? color_light_blue : color_dark)};
  color: ${(props) => (props.units === 'imperial' ? color_dark : color_light_blue)};
  box-shadow: ${(props) => (props.units === 'imperial' ? `inset 0 3px 8px ${color_dark}` : 'none')};
  cursor: ${(props) => (props.units === 'imperial' ? 'default' : 'pointer')};
  border-radius: 0 1rem 1rem 0;
`;
