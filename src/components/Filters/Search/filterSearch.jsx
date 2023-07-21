import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { CiSearch } from "react-icons/ci";
import PropTypes from "prop-types";
import Button from "../../Button/button";

import {
  Container,
  ContainerCard,
  ButtonContainer,
  ContainerInput,
  Input,
  ContainerIcon,
  ContainerElement,
} from ".";
import { lightTheme } from "../../../styles";

const SearchByAddress = ({ filter, setFilter }) => {
  // const array = filter || [
  //   "Las Vegas Boulevard",
  //   "Music Row en Nashville",
  //   "Wall Street Nueva York",
  //   "5th. Avenue en Nueva York",
  //   "Bourbon St. New Orleans",
  //   "Hollywood Blvd",
  //   " Lombard St. San Francisco",
  //   "Pennsylvania Ave. Washington D.C.",
  //   "Michigan Ave. en Chicago",
  //   "Ocean Drive en Miami",
  // ];
  const array = filter || [];

  const [search, setSearch] = useState("");
  const [selection, setSelection] = useState([]);
  const containerRef = useRef();

  const handleInputChange = (event) => {
    setSearch(event.target.value);

    const filterSelection = array.filter((selection) =>
      selection.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSelection(filterSelection);
  };

  useEffect(() => {
    if (search === "") return;

    const searchProperty = () => {
      setFilter(search);
    };
    const timerId = setTimeout(searchProperty, 1000);
    return () => clearTimeout(timerId);
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
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
    setFilter({ address: selection });
    setSelection([]);
  };

  return (
    <Container ref={containerRef}>
      <ButtonContainer>
        <ContainerInput theme={lightTheme}>
          <ContainerIcon>
            <CiSearch />
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
        <ContainerCard theme={lightTheme}>
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
