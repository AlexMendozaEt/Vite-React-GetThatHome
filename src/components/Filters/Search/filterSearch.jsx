import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import PropTypes from "prop-types";

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

const SearchByAddress = ({ filter, setFilter, currentSearch }) => {
  const array = filter || [];

  const [search, setSearch] = useState("");
  const [selection, setSelection] = useState([]);
  const containerRef = useRef();
  const [flag, setFlag] = useState(false);

  const handleInputChange = (event) => {
    setSearch(event.target.value);

    const filterSelection = array.filter((selection) =>
      selection.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSelection(filterSelection);
  };

  useEffect(() => {
    if (search === "") {
      setFilter(search);
      return;
    }

    const searchProperty = () => {
      setFilter(search);
    };
    const timerId = setTimeout(searchProperty, 1000);
    return () => clearTimeout(timerId);
  }, [search]);

  useEffect(() => {
    if (currentSearch !== "false" && flag === false) {
      setSearch(currentSearch);
      setFlag(true);
    }
  }, [currentSearch]);

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
  currentSearch: PropTypes.string,
};

export default SearchByAddress;
