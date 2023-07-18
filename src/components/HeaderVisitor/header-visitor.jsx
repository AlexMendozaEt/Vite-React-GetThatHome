import { TbUserPlus } from "react-icons/tb";
import { RiUserReceived2Line } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";

import Button from "../Button";
import Anchor from "../Anchor";
import Logo from "../Logo";
import { StyledContainer } from "./styles";
import Container from "../../layout/Container";
function HeaderVisitor() {
  return (
    <header>
      <Container size={"xl"}>
        <StyledContainer>
          <Logo />
          <div className="links-container">
            <Anchor icon={<HiMagnifyingGlass />}>FIND A HOME</Anchor>
            <Anchor icon={<TbUserPlus />} type={"secondary"}>
              JOIN
            </Anchor>
            <Button icon={<RiUserReceived2Line />} type={"primary"}>
              LOGIN
            </Button>
          </div>
        </StyledContainer>
      </Container>
    </header>
  );
}

export default HeaderVisitor;
