import React from 'react';
import styled from 'styled-components';
import { color_dark_blue, color_subtle } from '../styles/styles';

const ContentLayout = () => {
  return (
    <ContentLayoutContainer>
      <h1> HEADER </h1>
    </ContentLayoutContainer>
  );
};

export default ContentLayout;

const ContentLayoutContainer = styled.div`
  width: 80%;
  height: 70%;
  background-color: ${color_dark_blue};
  color: ${color_subtle};
`;
