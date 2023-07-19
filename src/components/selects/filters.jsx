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
  width: 270px;
  height: 184px;
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

const ArrayContainer = styled.div`
  display: flex;
  // flex-direction: column;
  width: 252px;
  height: 36px;
  border: 1px solid #8e8e8e;
  overflow: hidden;
  border: hidden;
`;

const Array = styled.div`
  display: flex;
  align-i-tems: center;
  justify-content: center;
  width: 50px;
  height: 36px;
  border: 1px solid #8e8e8e;
  background-color: ${({ isSelected }) => (isSelected ? "#F48FB1" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#FFFFF")};
  text-align: center;
  cursor: pointer;
  border-radio: 8px;
  border-radius: ${({ isFirst, isLast }) =>
    isFirst ? "8px 0 0 8px" : isLast ? "0 8px 8px 0" : "none"};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const Menu = (setFilter) => {
  const [isOpen, setIsOpen] = useState(false);

  const array = ["Any", "1+", "2+", "3+", "4+"];
  const [selectedBeds, setSelectedBeds] = useState(0);
  const [selectedBaths, setSelectedBaths] = useState(0);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (index, type) => {
    if (type === "BEDS") {
      setSelectedBeds(index === selectedBeds ? null : index);
    } else if (type === "BATH") {
      setSelectedBaths(index === selectedBaths ? null : index);
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
          <Title>
          BEDS
          </Title>
          <ArrayContainer>{mapArray("BEDS")}</ArrayContainer>
          <Title>
          BATHS
          </Title>
          <ArrayContainer>{mapArray("BATH")}</ArrayContainer>
          <ButtonContainer>
            <Button
              onClick={handleDone}
              type="primary"
              theme={lightTheme}
            >
              DONE
            </Button>
          </ButtonContainer>
        </ContainerCard>
      )}
    </Container>
  );
};

export default Menu;
