import styled from "@emotion/styled";
import { fonts, typography } from "../../styles";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  // max-width: 300px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom: 0.4rem solid ${(props) => props.theme.colors.pink[600]};
`;

export const StyledLink = styled(Link)`
  position: relative;
  font-family: ${fonts.primary};
  ${typography.text.xl}
  font-weight: 500;

  .operation-type {
    position: absolute;
    top: 0;
    right: 0;
    color: ${(props) => props.theme.colors.white.standard};
    background-color: ${(props) => props.theme.colors.pink[400]};
    border-top-right-radius: 0.5rem;
    padding: 0.25rem 0.5rem;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .photo {
    max-height: 12.5rem;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .info-title {
    display: flex;
    gap: 0.25rem;
    justify-content: space-between;
    padding: 0.5rem 1rem 0.25rem 1rem;
  }

  .info-title__rent {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }

  .info-title__type {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }

  .info-address {
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }

  .info-footer {
    display: flex;
    justify-content: space-between;
    padding: 4px 16px 16px 16px;
  }

  .info-footer__icons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .info-footer__icon {
    display: flex;
    gap: 0.125rem;
  }
`;

export const OwnerMenu = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.colors.pink[600]};
  color: ${(props) => props.theme.colors.white.standard};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  .owner_menu__edit {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }

  .owner_menu__close {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }
`;
