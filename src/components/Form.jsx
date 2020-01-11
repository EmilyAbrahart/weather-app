import React from 'react';
import styled from 'styled-components';
import { FlexFunc, color_subtle, color_dark_blue } from '../styles/styles';

const Form = ({ getWeather, setUnits, units }) => {
  const setMetric = () => {
    setUnits('&units=metric');
  };
  const setImperial = () => {
    setUnits('&units=imperial');
  };
  return (
    <FormContainer>
      <StyledForm onSubmit={getWeather}>
        <FormInput type="text" name="city" placeholder="City" />
        <FormInput type="text" name="country" placeholder="Country" />
        <div>
          <button units={units} type="button" onClick={setMetric}>
            Metric
          </button>
          <button units={units} type="button" onClick={setImperial}>
            Imperial
          </button>
        </div>

        <button type="submit">Get Weather</button>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  ${FlexFunc('column', 'center', 'flex-start')}
  height:400px;
`;

const StyledForm = styled.form`
  ${FlexFunc('column', 'space-evenly', 'center')}
`;

const FormInput = styled.input`
  background: none;
  color: ${color_subtle};
  border: none;
  border-bottom: 1px solid ${color_dark_blue};
  box-shadow: none;
  outline: none;
`;
