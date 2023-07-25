import { MdPets } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
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
  const [minArea, setMinAminArea] = useState(0);
  const [maxArea, setMaxArmaxArea] = useState(0);
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
    if (minArea < 0) setMinAminArea(0);
    if (maxArea < 0) setMaxArmaxArea(0);

    if (minArea !== 0 && maxArea !== 0) {
      return `${((minArea * 10) / 10).toFixed(1)} M2 - ${(
        (maxArea * 10) /
        10
      ).toFixed(1)} M2`;
    } else if (minArea !== 0) {
      return `>= ${((minArea * 10) / 10).toFixed(1)} M2`;
    } else if (maxArea !== 0) {
      return `<= ${((maxArea * 10) / 10).toFixed(1)} M2`;
    } else {
      return "MORE";
    }
  };

  const handleDone = () => {
    const selectedOptions = {
      minArea,
      maxArea,
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
                value={minArea > 0 ? minArea : ""}
                onChange={(e) => setMinAminArea(+e.target.value)}
              />
            </ContainerInput>
            <Line />
            <ContainerInput>
              <Input
                type="number"
                theme={lightTheme}
                placeholder="max"
                value={maxArea > 0 ? maxArea : ""}
                onChange={(e) => setMaxArmaxArea(+e.target.value)}
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
