import PropTypes from "prop-types";

import { StyledAnchor } from "./styles";

function Anchor({ icon, children, ...props }) {
  return (
    <StyledAnchor {...props}>
      {icon}
      {children}
    </StyledAnchor>
  );
}

Anchor.propTypes = {
  icon: PropTypes.element,
  children: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "lg"]),
  isfullwidth: PropTypes.string,
  rounded: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Anchor;