import React from 'react';

const Form = ({ getWeather }) => {
  return (
    <div>
      <form onSubmit={getWeather}>
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="country" placeholder="Country" />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
