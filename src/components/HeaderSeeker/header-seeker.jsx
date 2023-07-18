import { RiLogoutCircleLine, RiUserLine } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GoHeartFill } from "react-icons/go";

import Button from "../Button";
import Anchor from "../Anchor";
import Logo from "../Logo";
import { StyledContainer } from "./styles";
import Container from "../../layout/Container";
function HeaderSeeker() {
  return (
    <header>
      <Container size={"xl"}>
        <StyledContainer>
          <Logo />
          <div className="links-container">
            <Anchor icon={<HiMagnifyingGlass />}>FIND A HOME</Anchor>
            <Anchor icon={<RiLogoutCircleLine />} type={"secondary"}>
              LOGOUT
            </Anchor>
            <Button icon={<GoHeartFill />} type={"primary"}>
              SAVED PROPERTIES
            </Button>
            <Button icon={<RiUserLine />} type={"primary"}>
              PROFILE
            </Button>
          </div>
        </StyledContainer>
      </Container>
    </header>
  );
}

export default HeaderSeeker;
