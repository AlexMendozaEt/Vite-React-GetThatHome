import { TbUserPlus } from "react-icons/tb";
import { RiUserReceived2Line } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";

import Button from "../Button";
import Anchor from "../Anchor";
import Logo from "../Logo";
import { StyledContainer, StyledHeader } from "./styles";
import Container from "../../layout/Container";
import { useAuth } from "../../context/auth-context";

function HeaderVisitor() {
  const { handleModal } = useAuth();

  return (
    <StyledHeader>
      <Container size={"xl"}>
        <StyledContainer>
          <input type="checkbox" id="menu-mobile" />
          <div className="logo">
            <Logo />
            <label htmlFor="menu-mobile" className="toggle-checkbox">
              <span className="toggle-checkbox__first_line"></span>
              <span className="toggle-checkbox__second_line"></span>
              <span className="toggle-checkbox__last_line"></span>
            </label>
          </div>
          <ul className="expandable links-container">
            <li className="link">
              <Anchor icon={<HiMagnifyingGlass />} to={"/properties"}>
                FIND A HOME
              </Anchor>
            </li>
            <li className="link">
              <Anchor icon={<TbUserPlus />} type={"secondary"} to={"/signup"}>
                JOIN
              </Anchor>
            </li>
            <li className="link">
              <Button
                icon={<RiUserReceived2Line />}
                type={"primary"}
                to={"/login"}
                onClick={handleModal}
              >
                LOGIN
              </Button>
            </li>
          </ul>
        </StyledContainer>
      </Container>
    </StyledHeader>
  );
}

export default HeaderVisitor;
