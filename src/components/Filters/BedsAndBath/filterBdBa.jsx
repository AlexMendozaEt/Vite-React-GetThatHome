import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import Button from "../../Button/button";

import {
  Container,
  ContainerCard,
  Title,
  ArrayContainer,
  Array,
  ButtonContainer,
} from ".";
import { lightTheme } from "../../../styles";

const FilterBdBa = ({ filter, setFilter }) => {
  const array = filter || ["Any", "1+", "2+", "3+", "4+"];
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

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

  const handleClick = (index, type) => {
    if (type === "BEDS") {
      setBeds(index);
    } else if (type === "BATH") {
      setBaths(index);
    }
  };

  const getButtonLabel = () => {
    if (beds === 0 && baths === 0) {
      return "BEDS & BATH";
    }

    const bedsLabel = beds !== 0 ? array[beds] : "0";
    const bathsLabel = baths !== 0 ? array[baths] : "0";

    return `${bedsLabel} DB, ${bathsLabel} BA`;
  };

  const mapArray = (type) => {
    return array.map((element, index) => (
      <Array
        key={index}
        onClick={() => handleClick(index, type)}
        isSelected={type === "BEDS" ? beds === index : baths === index}
        isFirst={index === 0}
        isLast={index === array.length - 1}
      >
        {element}
      </Array>
    ));
  };

  const handleDone = () => {
    const selectedOptions = {
      beds: beds,
      baths: baths,
    };
    setFilter(selectedOptions);
    setIsOpen(!isOpen);
  };

  return (
    <Container ref={containerRef}>
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

FilterBdBa.propTypes = {
  filter: PropTypes.array,
  setFilter: PropTypes.func.isRequired,
};

export default FilterBdBa;
