import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { CiSearch } from "react-icons/ci"
import PropTypes from "prop-types";
import Button from "../../Button/button";

import { Container, ContainerCard, ButtonContainer, ContainerIcon, ContainerElement } from "."
import { lightTheme } from "../../../styles";

const SearchByAddress = ({ filter, setFilter, width, height}) => {
  const array = filter || ["Las Vegas Boulevard", "Music Row en Nashville",
    "Wall Street Nueva York", "5th. Avenue en Nueva York",
    "Bourbon St. New Orleans", "Hollywood Blvd", " Lombard St. San Francisco",
    "Pennsylvania Ave. Washington D.C.", "Michigan Ave. en Chicago", "Ocean Drive en Miami"];

  const [selectedOption, setSelectedOption] = useState('');
  const [selection, setSelection] = useState([]);
  const containerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setSelection([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setFilter({ address: selectedValue });
  };

  const handleSelectionClick = (selection) => {
    setSelectedOption(selection);
    setFilter({ address: selection });
    setSelection([]);
  };

  return (
    <Container ref={containerRef} >
      <ButtonContainer>
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          style={{
          'boxShadow': '1px 0px 5px gray',
          width,
          height,
          ...lightTheme }} 
        >
          <option value="" disabled>Search...</option>
          {array.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </ButtonContainer>
      {selection.length > 0 && (
        <ContainerCard theme={lightTheme} >
          {selection.map((selection, index) => (
            <ContainerElement
              key={index}
              onClick={() => handleSelectionClick(selection)}
            >
              {selection}
            </ContainerElement>
          ))}
        </ContainerCard>
      )}
    </Container>
  );
};

SearchByAddress.propTypes = {
  filter: PropTypes.array,
  setFilter: PropTypes.func.isRequired,
};

export default SearchByAddress;
