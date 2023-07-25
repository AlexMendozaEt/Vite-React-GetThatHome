import { FiChevronDown } from "react-icons/fi";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

import {
  Container,
  ContainerCard,
  Title,
  ContainerIcon,
  ContainerInput,
  InputCheckbox,
  ContainerSelect,
} from ".";
import { lightTheme } from "../../../styles";

const FilterBaR = ({ setFilter, currentFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [both, setBoth] = useState(true);
  const [buying, setBuying] = useState(false);
  const [renting, setRenting] = useState(false);
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

  useEffect(() => {
    setRenting(currentFilter === "renting");
    setBuying(currentFilter === "buying");
    setBoth(currentFilter !== "renting" && currentFilter !== "buying");
  }, [currentFilter]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const getButtonLabel = () => {
    if (both) {
      return "Buying & Renting";
    } else if (buying) {
      return "Buying";
    } else if (renting) {
      return "Renting";
    }
    return "Both"; // Default label if nothing is selected
  };

  const handleChange = (sel) => {
    if (sel === 0) {
      setBoth(both ? both : !both);
      setBuying(false);
      setRenting(false);
    } else if (sel === 1) {
      setBuying(buying ? buying : !buying);
      setBoth(false);
      setRenting(false);
    } else if (sel === 2) {
      setRenting(renting ? renting : !renting);
      setBoth(false);
      setBuying(false);
    }
  };

  useEffect(() => {
    if (both) {
      setFilter({
        buying: true,
        renting: true,
      });
    } else {
      setFilter({
        buying,
        renting,
      });
    }
  }, [buying, renting, both]);

  return (
    <Container ref={containerRef}>
      <ContainerSelect onClick={handleButtonClick}>
        <ContainerIcon>
          {getButtonLabel()} <FiChevronDown />
        </ContainerIcon>
      </ContainerSelect>
      {isOpen && (
        <ContainerCard>
          <ContainerInput>
            <InputCheckbox
              type="checkbox"
              id="both"
              theme={lightTheme}
              checked={both}
              onChange={() => handleChange(0)}
            />
            <Title htmlFor="both">Both</Title>
          </ContainerInput>
          <ContainerInput>
            <InputCheckbox
              type="checkbox"
              id="buying"
              theme={lightTheme}
              checked={buying}
              onChange={() => handleChange(1)}
            />
            <Title htmlFor="buying">Buying</Title>
          </ContainerInput>
          <ContainerInput htmlFor="renting">
            <InputCheckbox
              type="checkbox"
              id="renting"
              theme={lightTheme}
              checked={renting}
              onChange={() => handleChange(2)}
            />
            <Title htmlFor="renting">Renting</Title>
          </ContainerInput>
        </ContainerCard>
      )}
    </Container>
  );
};

FilterBaR.propTypes = {
  setFilter: PropTypes.func,
  currentFilter: PropTypes.string,
};

export default FilterBaR;
