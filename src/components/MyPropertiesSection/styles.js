import styled from "@emotion/styled";
import { fonts, typography } from "../../styles";

export const StyledSection = styled.section`
  padding: 4rem 0;
`;

export const StyledInput = styled.input`
  all: unset;
  display: none;
`;

export const StyledLabel = styled.label`
  height: 32px;
  padding: 0px 4px 0px 4px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const BoxOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  ${typography.text.sm}
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.lighter};
  .checkedOption {
    border-bottom: 2px solid ${(props) => props.theme.colors.pink[400]};
    color: ${(props) => props.theme.colors.text.highContrast};
  }
`;

export const StyledH2 = styled.h2`
  font-family: ${fonts.primary};
  ${typography.head.xs}
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const PropertiesContainer = styled.div`
  display: grid;
  padding-inline: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
  gap: 3rem;
`;
