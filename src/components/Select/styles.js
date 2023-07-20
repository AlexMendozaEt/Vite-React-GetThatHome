import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.pink[400]};
  border-radius: 0.5rem;
  width: fit-content;
`;

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.text.light};
  font-family: ${fonts.secondary};
  font-size: 0.625rem;
  letter-spacing: 0.09375rem;
  text-transform: uppercase;
`;
