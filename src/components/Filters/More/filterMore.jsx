import { MdPets } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../Button/button";

import {
  Container,
  ContainerCard,
  Title,
  PriceContainer,
  ButtonContainer,
  ContainerIcon,
  ContainerInput,
  Input,
  InputCheckbox,
} from ".";
import { lightTheme } from "../../../styles";
import { Line } from "./style";

const FilterMore = ({ setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [minMeter, setMinMeter] = useState(0);
  const [maxMeter, setMaxMeter] = useState(0);
  const [petsAllowed, setPetsAllowed] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
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
    if (minMeter < 0) setMinMeter(0);
    if (maxMeter < 0) setMaxMeter(0);

    if (minMeter !== 0 && maxMeter !== 0) {
      return `${((minMeter * 10) / 10).toFixed(1)} M2 - ${(
        (maxMeter * 10) /
        10
      ).toFixed(1)} M2`;
    } else if (minMeter !== 0) {
      return `>= ${((minMeter * 10) / 10).toFixed(1)} M2`;
    } else if (maxMeter !== 0) {
      return `<= ${((maxMeter * 10) / 10).toFixed(1)} M2`;
    } else {
      return "MORE";
    }
  };

  const handleDone = () => {
    const selectedOptions = {
      minMeter,
      maxMeter,
      petsAllowed,
    };
    setFilter(selectedOptions);
    setIsOpen(!isOpen);
  };

  return (
    <Container ref={containerRef}>
      <Button onClick={handleButtonClick} type="primary" theme={lightTheme}>
        <>
          <ContainerIcon>
            {petsAllowed && <MdPets />}
            {getButtonLabel()} <FiChevronDown />
          </ContainerIcon>
        </>
      </Button>
      {isOpen && (
        <ContainerCard>
          <ContainerInput>
            <InputCheckbox
              type="checkbox"
              theme={lightTheme}
              checked={petsAllowed}
              onChange={() => setPetsAllowed(!petsAllowed)}
            />
            <Title>Pets Allowed</Title>
          </ContainerInput>
          <Title>AREA IN M2</Title>
          <PriceContainer>
            <ContainerInput>
              <Input
                type="number"
                theme={lightTheme}
                placeholder="min"
                value={minMeter > 0 ? minMeter : ""}
                onChange={(e) => setMinMeter(+e.target.value)}
              />
            </ContainerInput>
            <Line />
            <ContainerInput>
              <Input
                type="number"
                theme={lightTheme}
                placeholder="max"
                value={maxMeter > 0 ? maxMeter : ""}
                onChange={(e) => setMaxMeter(+e.target.value)}
              />
            </ContainerInput>
          </PriceContainer>
          <ButtonContainer>
            <Button
              onClick={handleDone}
              square
              size="sm"
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

FilterMore.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default FilterMore;
