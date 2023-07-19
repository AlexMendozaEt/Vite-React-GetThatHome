import {BiSolidDollarCircle} from "react-icons/bi"
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Button from "../../Button/button";

import { Container, ContainerCard, Title, PriceContainer, ButtonContainer, ContainerInput, Input, ContainerIcon } from "."
import { lightTheme } from "../../../styles";
import { Line } from "./style";

const FilterPrice = ({ filter, setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(()=>{
  //   let tmp;
  //   if(minPrice === 0 || maxPrice === 0) return;
  //   if(minPrice > maxPrice){
  //     tmp = minPrice;
  //     setMinPrice(maxPrice);
  //     setMaxPrice(tmp);
  //   }

  // },[minPrice,maxPrice] )

  const getButtonLabel = () => {
    
    if(minPrice < 0) setMinPrice(0);
    if(maxPrice < 0) setMaxPrice(0);

    if (minPrice !== 0 && maxPrice !== 0) {
      return `$ ${((minPrice*10)/10).toFixed(1)} K - $ ${((maxPrice*10)/10).toFixed(1)} K`;
    } else if(minPrice !== 0){
      return `>= $ ${((minPrice*10)/10).toFixed(1)} K`
    }else if(maxPrice !== 0){
      return `<= $ ${((maxPrice*10)/10).toFixed(1)} K`
    }else{
      return "PRICE";
    }
  };

  const handleDone = () => {
    // setFilter([minPrice, maxPrice]);
    console.log("Min Price: "+ minPrice);
    console.log("Max Price: "+ maxPrice);

    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Button onClick={handleButtonClick} type="primary" theme={lightTheme}>
        {getButtonLabel()}
      </Button>
      {isOpen && (
        <ContainerCard>
          <Title>PRICE RANGE</Title>
          <PriceContainer>
            <ContainerInput>
            <ContainerIcon>
                <BiSolidDollarCircle/>
              </ContainerIcon>
              <Input
                type="number"
                theme={lightTheme}
                placeholder="Min"
                value={minPrice > 0 ? minPrice : ""}
                onChange={(e) => setMinPrice(+e.target.value)}
              />
            </ContainerInput>
             <Line/>
            <ContainerInput>
              <ContainerIcon>
                <BiSolidDollarCircle/>
              </ContainerIcon>
              <Input
                type="number"
                theme={lightTheme}
                placeholder="Max"
                value={maxPrice > 0 ?  maxPrice : ""}
                onChange={(e) => setMaxPrice(+e.target.value)}
              />
            </ContainerInput>
          </PriceContainer>
          <ButtonContainer>
            <Button onClick={handleDone} square size="sm" type="primary" theme={lightTheme}>
              DONE
            </Button>
          </ButtonContainer>
        </ContainerCard>
      )}
    </Container>
  );
};

FilterPrice.propTypes = {
  filter: PropTypes.array,
  setFilter: PropTypes.func,
};

export default FilterPrice;
