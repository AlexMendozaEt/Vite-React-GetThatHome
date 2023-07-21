import styled from "@emotion/styled";

export const StyledTextArea = styled.textarea`
  background-color: ${(props) => props.theme.colors.background.lighter};
  border: none;
  border-bottom: 0.0625rem solid
    ${(props) => props.theme.colors.background.darker};
  padding: 0.25rem 0;
  font-size: 1.125rem;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};

  ::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }
`;

export const StyledLabel = styled.label`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text.light};
`;
