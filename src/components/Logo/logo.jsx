import PropTypes from "prop-types";
import { TiHomeOutline } from "react-icons/ti";
import { useTheme } from "@emotion/react";

import { StyledAnchor } from "./styles";

function Logo({ ...props }) {
  const theme = useTheme();
  return (
    <StyledAnchor {...props}>
      <TiHomeOutline size={"1.5rem"} color={theme.colors.pink[700]} />
      GET THAT HOME
    </StyledAnchor>
  );
}

Logo.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  isfullwidth: PropTypes.string,
  onClick: PropTypes.func,
};

export default Logo;
