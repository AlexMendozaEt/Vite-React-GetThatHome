import styled from "@emotion/styled";

export const StyledInputWrapper = styled.div`
  position: relative;
`;

export const StyledIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
`;

export const StyledIconWrapperRight = styled.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
`;

export const StyledInput = styled("input")`
  background-color: ${(props) => props.theme.colors.background.lighter};
  border: 1px solid ${(props) => props.theme.colors.primary.light};
  border-radius: 8px;
  padding: 0.25rem 2.75rem 0.25rem 2rem; /* Ajusta los valores de padding según tus necesidades */
  font-size: 1.125rem;
  width: ${({ isfullwidth }) => (isfullwidth ? "100%" : "fit-content")};
  ::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }
`;

export const StyledOptionsWrapper = styled.div`
  position: absolute;
  top: 115%;
  left: 0;
  right: 0;
  background-color: white; /* Fondo blanco para las opciones */
  border: 1px solid ${(props) => props.theme.colors.primary.light};
  border-radius: 8px;
  max-height: 150px;
  overflow-y: auto;
`;

export const StyledOption = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme.colors.primary
        .light}; /* Color de fondo al pasar el cursor por encima */
    color: white;
  }
`;

export const StyledLabel = styled.label`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text.light};
`;
