import styled from "@emotion/styled";
import SearchByAddress from "./Search/filterSearch";
import { Title } from "../Filters/Price";
import Button from "../Button";
import { ButtonContainer } from "./Search";
import { lightTheme } from "../../styles";
import { useEffect, useState } from "react";
import { getProperties } from "../../services/property-service";
import { useNavigate } from "react-router-dom";

const Filter = styled.div`
  display: flex;
  padding: 8px 16px 8px 16px;
  border-radius: 8px;
  gap: 8px;
  background: white;
  box-shadow: 3px 3px 10px gray;
  justify-content: space-between;

  @media only screen and (max-width: 815px) {
    flex-direction: column;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 56px;
  border: 1px;
  background: gray;
  @media only screen and (max-width: 815px) {
    display: none;
  }
`;

const ContainerFilter = styled.div``;

export function FilterLanding() {
  const [products, setProducts] = useState([]);
  const [arrayAddress, setArrayAddress] = useState([]);
  const arrayTypeProperty = ["home", "apartment"];
  const arrayTypeOperation = ["rent", "sale"];
  const navigate = useNavigate();

  const [values, setValues] = useState({
    address: false,
    houses: true,
    apartments: true,
    buying: true,
    renting: true,
  });

  function handleChange(event) {
    const { value } = event;

    const newValues = {
      ...values,
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
        newValues.address = value;
        break;
    }
    setValues(newValues);
  }

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

  const handleDone = () => {
    navigate(
      `/properties/${values.address.toString()}/${values.houses.toString()}/${values.apartments.toString()}/${values.buying.toString()}/${values.renting.toString()}`
    );
  };

  return (
    <Filter>
      <ContainerFilter>
        <Title>I'm Looking for</Title>
        <SearchByAddress
          filter={arrayTypeProperty}
          setFilter={handleChange}
          width={160}
          height={40}
        />
      </ContainerFilter>
      <Line />
      <ContainerFilter>
        <Title>I want To</Title>
        <SearchByAddress
          filter={arrayTypeOperation}
          setFilter={handleChange}
          width={160}
          height={40}
        />
      </ContainerFilter>
      <Line />
      <ContainerFilter>
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
        <Button onClick={handleDone} type="primary" square theme={lightTheme}>
          <Title>I want To</Title>
        </Button>
      </ButtonContainer>
    </Filter>
  );
}
