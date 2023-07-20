import PropTypes from "prop-types";

import { StyledInput, StyledLabel, StyledContainer } from "./styles";

function InputWithIcon({
  icon,
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
      <StyledContainer {...props}>
        {icon}
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
      </StyledContainer>
    </div>
  );
}

InputWithIcon.propTypes = {
  icon: PropTypes.element,
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

export default InputWithIcon;
