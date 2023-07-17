import PropTypes from "prop-types";

import { StyledButton } from "./styles";

function Button({ icon, children, ...props }) {
  return (
    <StyledButton {...props}>
      {icon}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "lg"]),
  icon: PropTypes.element,
  isFullWidth: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
};

export default Button;
