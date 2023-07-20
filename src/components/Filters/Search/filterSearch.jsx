import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import {CiSearch} from "react-icons/ci"
import PropTypes from "prop-types";
import Button from "../../Button/button";

import { Container, ContainerCard, ButtonContainer, ContainerInput, Input, ContainerIcon, ContainerElement } from "."
import { lightTheme } from "../../../styles";


const SearchInput = ({filter, setFilter}) => {
  const [search, setSearch] = useState('');
  const [selection, setSelection] = useState([]);

  const array = filter || ["Las Vegas Boulevard", "Music Row en Nashville", 
  "Wall Street Nueva York", "5th. Avenue en Nueva York", 
  "Bourbon St. New Orleans", "Hollywood Blvd", " Lombard St. San Francisco", 
  "Pennsylvania Ave. Washington D.C.", "Michigan Ave. en Chicago", "Ocean Drive en Miami"];

  const containerRef = useRef();

  const handleInputChange = (event) => {
    const word = event.target.value;
    setSearch(word);
    console.log(word)

    const filterSelection = array.filter((selection) =>
      selection.toLowerCase().includes(word.toLowerCase())
    );
    setSelection(filterSelection);
  };

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

  const handleSelectionClick = (selection) => {
    setSearch(selection);
    setSelection([]);
    console.log(selection);
    // setFilter(selection);
  };

  return (
    <Container ref={containerRef} >
      <ButtonContainer>
      <ContainerInput theme={lightTheme}>
        <ContainerIcon>
        <CiSearch/>
        </ContainerIcon>
      <Input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleInputChange}
        
      />
      </ContainerInput>
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

export default SearchInput;
