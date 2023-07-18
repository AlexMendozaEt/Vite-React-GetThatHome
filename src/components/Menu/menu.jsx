import { TbUserPlus } from "react-icons/tb";
import { RiUserReceived2Line } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";

import Button from "../Button";
import Anchor from "../Anchor";
import Logo from "../Logo";
import { StyledHeader } from "./styles";

function Menu() {
  return (
    <StyledHeader>
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
    </StyledHeader>
  );
}

export default Menu;
