import PropTypes from "prop-types";

import { StyledTextArea, StyledLabel } from "./styles";

function TextArea({
  id,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
  ...props
}) {
  return (
    <div>
      {label ? <StyledLabel htmlFor={id || name}>{label}</StyledLabel> : ""}
      <StyledTextArea
        id={id || name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

TextArea.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isFullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default TextArea;
