import styled from "@emotion/styled";
import React, { useState } from "react";
import Button from "../Button/button";
import { lightTheme } from "../../styles";

const Container = styled.div`
  display: grid;
  width: 270px;
  justify-items: center;
  align-items: start;
  font-family: inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  color: #616161;
`;

const ContainerCard = styled.div`
  background-color: white;
  width: 211px;
  height: 116px;
  gap: 4px;
  border-radio: 8px;
  box-shadow: 3px 3px 10px gray;
  padding: 8px;
  border-radius: 8px;
  align-content: center;
  position: fixed;
  margin-top: 40px;
`;

const Title = styled.div`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-align: left;
`;

const PropertyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 252px;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const ContainerInput = styled.div`
  display: flex;
  gap: 4px;
  text-align: center;
`;

const Input = styled.input`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 2px;
  appearance: none;
  border: 1px solid #f48fb1;

  &:checked {
    border: 4px solid #f48fb1;
  }
`;

const Menu = (setFilter) => {
  const [isOpen, setIsOpen] = useState(false);

  const array = ["Houses", "Apartments"];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const getButtonLabel = () => {
    let label = []

    if (selectedOptions.length === 0) {
      return "PROPERTY TYPE";
    }
    
    label = []
    selectedOptions.map((element, _index) => {

        if(label.length  != 0) label.push( ` & `)
        label.push(`${element}`)
    })
    return label.toString().split(",");
  }

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
          name={element}
          id={element}
          checked={selectedOptions.some((option) => option === element)}
          onChange={() => handleCheckboxChange(element)}
        />
        <label htmlFor={element}>{element}</label>
      </ContainerInput>
    ));
  };

  const handleDone = () => {
    // setFilter(selectedOptions);
console.log("Filters: ",selectedOptions)
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Button onClick={handleButtonClick} type="primary" theme={lightTheme}>
        {getButtonLabel()}
      </Button>
      {isOpen && (
        <ContainerCard>
          <Title>Property Type</Title>
          <PropertyContainer>{mapArray()}</PropertyContainer>
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

export default Menu;
