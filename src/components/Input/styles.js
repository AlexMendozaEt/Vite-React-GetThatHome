import styled from "@emotion/styled";

export const StyledInput = styled("input")`
  background-color: ${(props) => props.theme.colors.background.lighter};
  border: none;
  border-bottom: 0.0625rem solid
    ${(props) => props.theme.colors.background.darker};
  padding: 0.25rem 0;
  font-size: 1.125rem;
  width: ${({ isfullwidth }) => (isfullwidth ? "100%" : "fit-content")};
  accent-color: ${(props) => props.theme.colors.pink[400]};
  ::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }
`;

export const StyledLabel = styled.label`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text.light};
  letter-spacing: 0.01563rem;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;
