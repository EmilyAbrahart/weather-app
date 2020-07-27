/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';
import { countryCodes } from '../data/countryCodes';

export const SearchBar = ({ searchCountry, setSearchCountry }) => {
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (v) => {
    const inputValue = v.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : countryCodes.filter(
          (country) => country.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.code;

  const handleChange = (event, { newValue }) => {
    setSearchCountry(newValue);
  };

  const onSuggestionsFetchRequested = ( {value} ) => {
    setSuggestions(getSuggestions(searchCountry));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions('');
  };

  const renderSuggestion = (suggestion) => <div>{`${suggestion.name} (${suggestion.code})`}</div>;

  const inputProps = {
    placeholder: 'Country',
    value: searchCountry,
    onChange: handleChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};
