import styled from "@emotion/styled";
import SearchByAddress from "./Search/filterSearch";
import { Title } from "../Filters/Price";
import Button from "../Button";
import { ButtonContainer } from "./Search";
import { lightTheme } from "../../styles";

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
  return (
    <Filter>
      <ContainerFilter width={160} height={56}>
        <Title>I'm Looking for</Title>
        <SearchByAddress setFilter={console.log} width={160} height={40} />
      </ContainerFilter>
      <Line />
      <ContainerFilter width={160} height={56}>
        <Title>I want To</Title>
        <SearchByAddress setFilter={console.log} width={160} height={40} />
      </ContainerFilter>
      <Line />
      <ContainerFilter width={304} height={40}>
        <Title>Were</Title>
        <SearchByAddress setFilter={console.log} width={304} height={40} />
      </ContainerFilter>
      <Line />

      <ButtonContainer>
        <Button onClick={handleDone} type="primary" size="md" square theme={lightTheme}>
        <Title>I want To</Title>
        </Button>
      </ButtonContainer>
    </Filter>
  );
}
