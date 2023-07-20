import PropTypes from "prop-types";

import { StyledInput, StyledLabel, StyledContainer } from "./styles";

function Input({
  id,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
  isfullwidth,
  ...props
}) {
  return (
    <StyledContainer>
      <StyledInput
        id={id || name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isfullwidth={isfullwidth}
        {...props}
      />
      {label ? <StyledLabel htmlFor={id || name}>{label}</StyledLabel> : ""}
    </StyledContainer>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func,
  isfullwidth: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
