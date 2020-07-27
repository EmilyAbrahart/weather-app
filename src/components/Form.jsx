import React from 'react';
import styled from 'styled-components';
import {
  FlexFunc,
  color_subtle,
  color_light_blue,
  color_dark,
  mobile,
  tablet,
} from '../styles/styles';
import { SearchBar } from './SearchBar';

const Form = ({
  getWeather,
  setUnits,
  units,
  searchCity,
  setSearchCity,
  searchCountry,
  setSearchCountry,
  formVisible,
  setFormVisible,
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
    <FormContainer units={units} formVisible={formVisible}>
      <h1> WTHR. </h1>
      <StyledForm onSubmit={getWeather} formVisible={formVisible}>
        <FormInput
          type="text"
          name="city"
          placeholder="City"
          onChange={handleCityChange}
          value={searchCity}
          formVisible={formVisible}
        />
        <SearchBar
          searchCountry={searchCountry}
          setSearchCountry={setSearchCountry}
          formVisible={formVisible}
        />
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
      <SearchButton formVisible={formVisible} onClick={() => setFormVisible(true)}>
        Search
      </SearchButton>
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

    @media ${mobile} {
      margin-bottom: ${(props) => (props.formVisible ? '1rem' : '0')};
    }
  }

  @media ${tablet} {
    ${FlexFunc('column', 'center', 'center')};
    height: auto;
  }
`;

const StyledForm = styled.form`
  ${FlexFunc('column', 'space-evenly', 'center')}
  @media ${mobile} {
    transition: all 0.5s linear;
    max-height: ${(props) => (props.formVisible ? 'initial' : '0')};
    overflow-y: ${(props) => (props.formVisible ? 'initial' : 'hidden')}
  }
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
  @media ${mobile} {
    display: ${(props) => (props.formVisible ? 'initial' : 'none')};
  }
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

const SearchButton = styled(FormButton)`
  display: none;
  margin: 0;
  @media ${mobile} {
    display: ${(props) => (props.formVisible ? 'none' : 'flex')};
  }
`;
