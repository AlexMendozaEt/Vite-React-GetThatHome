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
    const value = event.value;
    const object = {
      // address: { address: true },
      home: { apartments: false },
      apartment: { houses: false },
      rent: { renting: false },
      sale: { buying: false },
    };
    setValues({ ...values }, object[value]);
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
