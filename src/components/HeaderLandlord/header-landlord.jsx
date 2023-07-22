import { RiLogoutCircleLine, RiUserLine, RiHome8Line } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useAuth } from "../../context/auth-context";

import Button from "../Button";
import Anchor from "../Anchor";
import Logo from "../Logo";
import { StyledContainer, StyledHeader } from "./styles";
import Container from "../../layout/Container";

function HeaderLandlord() {
  const { logout } = useAuth();

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
              <Button
                icon={<RiLogoutCircleLine />}
                type={"secondary"}
                onClick={logout}
              >
                LOGOUT
              </Button>
            </li>
            <li className="link">
              <Anchor
                icon={<RiHome8Line />}
                type={"primary"}
                to={"/myproperties"}
              >
                MY PROPERTIES
              </Anchor>
            </li>
            <li className="link">
              <Anchor icon={<RiUserLine />} type={"primary"} to={"/profile"}>
                PROFILE
              </Anchor>
            </li>
          </ul>
        </StyledContainer>
      </Container>
    </StyledHeader>
  );
}

export default HeaderLandlord;
