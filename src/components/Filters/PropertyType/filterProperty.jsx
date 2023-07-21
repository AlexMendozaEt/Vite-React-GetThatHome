import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../Button/button";

import { Container, ContainerCard, Title, PropertyContainer, ButtonContainer, ContainerInput, Input, Label } from "."
import { lightTheme } from "../../../styles";


const FilterProperty = ({ filter, setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const array = filter || ["houses", "apartments"];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const containerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const getButtonLabel = () => {
    let label = [];

    if (selectedOptions.length === 0) {
      return "PROPERTY TYPE";
    }

    selectedOptions.forEach((element, index) => {
      if (index !== 0) {
        label.push(" & ");
      }
      label.push(element);
    });

    return label.join(" ");
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.some((o) => o === option)) {
      setSelectedOptions((prevSelected) =>
        prevSelected.filter((o) => o !== option)
      );
    } else {
      setSelectedOptions((prevSelected) => [...prevSelected, option]);
    }
  };

  const mapArray = () => {
    return array.map((element, index) => (
      <ContainerInput key={index}>
        <Input
          type="checkbox"
          theme={lightTheme}
          name={element}
          id={element}
          checked={selectedOptions.some((option) => option === element)}
          onChange={() => handleCheckboxChange(element)}
        />
        <Label htmlFor={element}>{element}</Label>
      </ContainerInput>
    ));
  };

  const handleDone = () => {
    const selectedTypes = {}; 
    selectedOptions.forEach((option) => {
      selectedTypes[option] = true;
    });
    if (!selectedTypes.houses && !selectedTypes.apartments) {
      setFilter({ houses: true, apartments: true }); // Set the filter to {houses: true, apartments: true}
    } else {
      setFilter(selectedTypes);
    }
    console.log(selectedTypes)
    setIsOpen(!isOpen);
  };

  return (
    <Container ref={containerRef}>
      <Button onClick={handleButtonClick} type="primary" theme={lightTheme}>
        {getButtonLabel()}
      </Button>
      {isOpen && (
        <ContainerCard>
          <Title>Property Type</Title>
          <PropertyContainer>{mapArray()}</PropertyContainer>
          <ButtonContainer>
            <Button onClick={handleDone} square type="primary" theme={lightTheme}>
              DONE
            </Button>
          </ButtonContainer>
        </ContainerCard>
      )}
    </Container>
  );
};

FilterProperty.propTypes = { 
  filter: PropTypes.array,
  setFilter: PropTypes.func.isRequired, 
}

export default FilterProperty;
