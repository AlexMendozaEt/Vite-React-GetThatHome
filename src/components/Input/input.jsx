import PropTypes from "prop-types";
import { useState } from "react";

import {
  StyledInput,
  StyledLabel,
  StyledInputWrapper,
  StyledIconWrapper,
  StyledIconWrapperRight,
  StyledOptionsWrapper,
  StyledOption,
} from "./styles";

import { FiSearch } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";

function Input({
  id,
  type = "text",
  name,
  onChange,
  placeholder,
  label,
  isfullwidth,
  data,
}) {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    onChange(event);
    setSelectedValue(value);
    searchInArray(value);
  };

  const searchInArray = (searchValue) => {
    const searchTerm = searchValue.trim().toLowerCase();
    const results = data.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setSearchResults([]);
  };

  return (
    <div>
      {label ? <StyledLabel htmlFor={id || name}>{label}</StyledLabel> : ""}
      <StyledInputWrapper>
        <StyledIconWrapper>
          <FiSearch />
        </StyledIconWrapper>
        <StyledInput
          id={id || name}
          type={type}
          name={name}
          value={selectedValue}
          onChange={handleChange}
          placeholder={placeholder}
          isfullwidth={isfullwidth}
        />
        <StyledIconWrapperRight>
          <AiOutlineDown />
        </StyledIconWrapperRight>
        {searchResults.length > 0 && (
          <StyledOptionsWrapper>
            {searchResults.map((result, index) => (
              <StyledOption
                key={index}
                onClick={() => handleOptionClick(result)}
              >
                {result}
              </StyledOption>
            ))}
          </StyledOptionsWrapper>
        )}
      </StyledInputWrapper>
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
  data: PropTypes.array.isRequired,
};

export default Input;
