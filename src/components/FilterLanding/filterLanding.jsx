import styled from "@emotion/styled";
import SearchByAddress from "./Search/filterSearch";
import { Title } from "../Filters/Price";
import Button from "../Button";
import { ButtonContainer } from "./Search";
import { lightTheme } from "../../styles";
import { useEffect, useState } from "react";
import { getProperties } from "../../services/property-service";

const Filter = styled.div`
  display: flex;
  width: 800px;
  height: 72px;
  padding: 8px 16px 8px 16px;
  border-radius: 8px;
  gap: 4px;
  background: white;
  box-shadow: 3px 3px 10px gray;
  justify-content: space-between;

  @media only screen and (max-width: 815px) {
    display: none;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 56px;
  border: 1px;
  // angle: -90 deg;
  background: gray;
`;

const ContainerFilter = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const handleDone = () => {
  console.log("HEY! ;) ");
};

export function FilterLanding() {
  const [products, setProducts] = useState([]);
  const [arrayAddress, setArrayAddress] = useState([]);
  const arrayTypeProperty = ["home", "apartment"];
  const arrayTypeOperation = ["rent", "sale"];

  const [values, setValues] = useState({
    address: "",
    houses: true,
    apartments: true,
    buying: true,
    renting: true,
  });

  function handleChange(event) {
    const { value } = event; 

    const newValues = {
      address: values.address,
      houses: values.houses,
      apartments: values.apartments,
      buying: values.buying,
      renting: values.renting,
    };

    switch (value) {
      case "home":
        newValues.houses = true;
        newValues.apartments = false;
        break;
      case "apartment":
        newValues.houses = false;
        newValues.apartments = true;
        break;
      case "rent":
        newValues.renting = true;
        newValues.buying = false;
        break;
      case "sale":
        newValues.renting = false;
        newValues.buying = true;
        break;
      default:
        break;
    }

    setValues(newValues);
    console.log(newValues)
  }


  // console.log(values);

  useEffect(() => {
    getProperties()
      .then((properties) => {
        setProducts(properties);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setArrayAddress(products.map((product) => product.address));
  }, [products]);

  return (
    <Filter>
      <ContainerFilter width={160} height={56}>
        <Title>I'm Looking for</Title>
        <SearchByAddress
          filter={arrayTypeProperty}
          setFilter={handleChange}
          width={160}
          height={40}
        />
      </ContainerFilter>
      <Line />
      <ContainerFilter width={160} height={56}>
        <Title>I want To</Title>
        <SearchByAddress
          filter={arrayTypeOperation}
          setFilter={handleChange}
          width={160}
          height={40}
        />
      </ContainerFilter>
      <Line />
      <ContainerFilter width={304} height={40}>
        <Title>Were</Title>
        <SearchByAddress
          filter={arrayAddress}
          setFilter={handleChange}
          width={304}
          height={40}
        />
      </ContainerFilter>
      <Line />

      <ButtonContainer>
        <Button
          onClick={handleDone}
          type="primary"
          size="md"
          square
          theme={lightTheme}
        >
          <Title>I want To</Title>
        </Button>
      </ButtonContainer>
    </Filter>
  );
}
