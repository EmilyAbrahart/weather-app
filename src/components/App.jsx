import React from 'react';
import styled from 'styled-components';
import background from '../img/Sunset.jpg';
import ContentLayout from './ContentLayout';
import { FlexFunc } from '../styles/styles';

function App() {
  return (
    <AppContainer background={background}>
      <ContentLayout />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-image: url(${props => props.background});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  ${FlexFunc('column', 'center', 'center')}
`;
