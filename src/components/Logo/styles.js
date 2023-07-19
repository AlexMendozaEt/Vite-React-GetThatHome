import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { typography } from "../../styles";

function sizeStyles(size) {
  switch (size) {
    case "sm":
      return `
        padding: 0.375rem 0.625rem;
        ${typography.text.sm}
      `;
    case "lg":
      return `
          padding: 0.75rem 1.5rem;
          ${typography.text.lg}
        `;
    default:
      return `
          padding: 0.5rem 1rem ;
          ${typography.text.md}
        `;
  }
}

export const StyledAnchor = styled(Link)`
  display: flex;
  width: ${({ isfullwidth }) => (isfullwidth ? "100%" : "fit-content")};
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  gap: 0.5rem;
  font-weight: 900;
  border: none;
  cursor: pointer;
  letter-spacing: 0.07813rem;
  ${(props) => sizeStyles(props.size)}
  :hover {
    background-color: ${(props) => props.theme.colors.background.dark};
  }
  :focus {
    outline: 0.1875rem solid ${(props) => props.theme.colors.info};
  }
`;
