import PropTypes from "prop-types";

import { StyledInput, StyledLabel } from "./styles";

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
    <div>
      {label ? <StyledLabel htmlFor={id || name}>{label}</StyledLabel> : ""}
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
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  isfullwidth: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
