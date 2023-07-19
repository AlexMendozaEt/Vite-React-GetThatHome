import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "../../Button/button";


import { Container, ContainerCard, Title, ArrayContainer, Array, ButtonContainer } from ".";
import { lightTheme } from "../../../styles";
const FilterBdBa = ({filter,setFilter}) => {
  const [isOpen, setIsOpen] = useState(false);

  const array = filter || ["Any", "1+", "2+", "3+", "4+"];
  const [selectedBeds, setSelectedBeds] = useState(0);
  const [selectedBaths, setSelectedBaths] = useState(0);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (index, type) => {
    if (type === "BEDS") {
      setSelectedBeds(index);
    } else if (type === "BATH") {
      setSelectedBaths(index);
    }
  };

  const getButtonLabel = () => {
    if (selectedBeds === 0 && selectedBaths === 0) {
      return "BEDS & BATH";
    }

    const bedsLabel = selectedBeds !== 0 ? array[selectedBeds] : "0";
    const bathsLabel = selectedBaths !== 0 ? array[selectedBaths] : "0";

    return `${bedsLabel} DB, ${bathsLabel} BA`;
  };

  const mapArray = (type) => {
    return array.map((element, index) => (
      <Array
        key={index}
        onClick={() => handleClick(index, type)}
        isSelected={
          type === "BEDS" ? selectedBeds === index : selectedBaths === index
        }
        isFirst={index === 0}
        isLast={index === array.length - 1}
      >
        {element}
      </Array>
    ));
  };

  const handleDone = () => {
    // setFilter(selectedBeds, selectedBaths);
    console.log("BEDS:", selectedBeds);
    console.log("BATH:", selectedBaths);
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Button onClick={handleButtonClick} type="primary" theme={lightTheme}>
        {getButtonLabel()}
      </Button>
      {isOpen && (
        <ContainerCard>
          <Title>BEDS</Title>
          <ArrayContainer>{mapArray("BEDS")}</ArrayContainer>
          <Title>BATHS</Title>
          <ArrayContainer>{mapArray("BATH")}</ArrayContainer>
          <ButtonContainer>
            <Button onClick={handleDone} type="primary" theme={lightTheme}>
              DONE
            </Button>
          </ButtonContainer>
        </ContainerCard>
      )}
    </Container>
  );
};

FilterPrice.propTypes= { 
  filter: PropTypes.array,
  setFilter: PropTypes.func,

}

export default FilterBdBa;
