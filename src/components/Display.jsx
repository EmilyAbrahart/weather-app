import React from 'react';
import styled from 'styled-components';

const Display = () => {
  return (
    <div>
      <h1>React Weather</h1>
      <p>Find out the weather where you are or where you&apos;d like to be!</p>
    </div>
  );
};


export default Display;

const DisplayContainer = styled.div`
width: 50%;
height: 100%;
`