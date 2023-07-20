import { useState } from "react";

import Container from "../../layout/Container";
import landlord from "../../assets/images/landlordproperties.png";
import housesearching from "../../assets/images/housesearching.png";
import MyFormikCreate from "../SignUpInputBox/sign-up-section";
import {
  StyledContainer,
  StyledH3,
  StyledH4,
  OptionsMainBox,
  OptionsBox,
  StyledP1,
  StyledP2,
  StyledSection,
  InputBox,
} from "./styles";

export default function SignUpSection() {
  const [singUpPage, setSingUpPage] = useState(false);

  const Landlord = () => {
    setSingUpPage(true);
  };

  const HomeSeeker = () => {
    setSingUpPage(true);
  };

  const renderOperationType = {
    0: (
      <>
        <StyledH3>Selecciona el perfil con el que te identificas</StyledH3>
        <StyledH4>¿Que estas buscando?</StyledH4>
        <OptionsMainBox>
          <OptionsBox onClick={Landlord}>
            <img className="img" src={landlord} alt="landlord" />
            <StyledP1>Landlord</StyledP1>
            <StyledP2>You want to rent or sell a home</StyledP2>
          </OptionsBox>
          <OptionsBox onClick={HomeSeeker}>
            <img className="img" src={housesearching} alt="housesearching" />
            <StyledP1>Home seeker</StyledP1>
            <StyledP2>You want to find a home</StyledP2>
          </OptionsBox>
        </OptionsMainBox>
      </>
    ),
    1: <MyFormikCreate />,
  };

  return (
    <StyledSection>
      <Container size={"xl"}>
        <StyledContainer>
          {singUpPage ? renderOperationType[1] : renderOperationType[0]}
        </StyledContainer>
      </Container>
    </StyledSection>
  );
}
