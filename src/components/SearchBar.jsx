/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';
import { countryCodes } from '../data/countryCodes';
import { color_subtle, color_light_blue, color_dark } from '../styles/styles';

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

  const onSuggestionsFetchRequested = ({ value }) => {
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
    <SearchContainer>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  .react-autosuggest__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 4rem;
  }
  .react-autosuggest__container .react-autosuggest__input {
    background: none;
    color: ${color_subtle};
    border: none;
    border-bottom: 1px solid ${color_light_blue};
    box-shadow: none;
    outline: none;
    padding: 0.3rem;
    margin: 1rem;
    width: 15rem;
    margin-bottom: 0;
  }

  .react-autosuggest__container .react-autosuggest__suggestions-container {
    background-color: ${color_subtle};
    color: ${color_dark};
    max-height: 7rem;
    border-top: none;
    width: 15rem;
    overflow-y: scroll;

    li {
      list-style-type: none;

      &:nth-child(1) {
        padding-top: 4px;
      }

      &:hover {
        font-weight: bold;
      }
    }
  }
`;
