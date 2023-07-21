import { useState } from "react";

import Container from "../../layout/Container";
import landlord from "../../assets/images/landlordproperties.png";
import housesearching from "../../assets/images/housesearching.png";
import MyFormikProfile from "../ProfileInputBox/profile-input-section";
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

export default function ProfileSection() {
  const [singUpPage, setSingUpPage] = useState(false);
  const [userType, setUserType] = useState();

  const Landlord = () => {
    setSingUpPage(false);
    setUserType(1);
  };

  // const HomeSeeker = () => {
  //   setSingUpPage(true);
  //   setUserType(1);
  // };

  const renderOperationType = {
    1: <MyFormikProfile userType={userType} />,
  };
  return (
    <StyledSection>
      <Container size={"xl"}>
        <StyledContainer>{renderOperationType[1]}</StyledContainer>
      </Container>
    </StyledSection>
  );
}
