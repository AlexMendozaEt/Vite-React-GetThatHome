import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { typography } from "../../styles";

function typeStyles(type, theme) {
  switch (type) {
    case "primary":
      return `
        background-color: ${theme.colors.orange[500]};
        color: ${theme.colors.white.saturated};
        :hover {
          background-color: ${theme.colors.orange[600]};
        }
        :focus {
          outline: 0.1875rem solid ${theme.colors.info};
        }
      `;
    case "secondary":
      return `
        background-color: ${theme.colors.secondary.standard};
        color: ${theme.colors.white.saturated};
        :hover {
          background-color: ${theme.colors.secondary.dark};
        }
        :focus {
          outline: 0.1875rem solid ${theme.colors.secondary.darker};
        }
      `;
    default:
      return `
        background-color: ${theme.colors.gray[200]};
        color: ${theme.colors.text.standard};
        :hover {
          background-color: ${theme.colors.gray[300]};
        }
        :focus {
          outline: 0.125rem solid ${theme.colors.gray[400]};
          outline-offset: 0.0625rem;
        }
      `;
  }
}

function sizeStyles(size, rounded) {
  switch (size) {
    case "sm":
      return `
        padding: 0.375rem ${rounded ? "" : "0.625rem"};
        ${typography.text.xs}
      `;
    case "lg":
      return `
          padding: 0.75rem ${rounded ? "" : "1.5rem"};
          ${typography.text.md}
        `;
    default:
      return `
          padding: 0.5rem ${rounded ? "" : "1rem"};
          ${typography.text.sm}
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
  font-weight: 700;
  border-radius: ${({ rounded }) => (rounded ? "50%" : "1.875rem")};
  border: none;
  cursor: pointer;
  ${(props) => typeStyles(props.type, props.theme)}
  ${(props) => sizeStyles(props.size, props.rounded)}
`;
