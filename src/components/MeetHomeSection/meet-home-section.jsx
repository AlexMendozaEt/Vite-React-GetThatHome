import { Info, StyledContainer, StyledH1, StyledMain } from "./styles";
import Container from "../../layout/Container";
import { FilterLanding } from "../FilterLanding/filterLanding";

export default function MeetHomeSection() {
  return (
    <StyledMain>
      <Container size={"xl"}>
        <StyledContainer>
          <StyledH1>Meet your new Home</StyledH1>
          <Info>The easiest way to find where you belong</Info>
          <FilterLanding/>
        </StyledContainer>
      </Container>
    </StyledMain>
  );
}
