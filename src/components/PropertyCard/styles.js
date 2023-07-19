import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  // max-width: 300px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledDiv = styled.div`
  position: relative;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom: 0.4rem solid ${(props) => props.theme.colors.pink[600]};

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
    gap: 0.25rem;
  }

  .photo {
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .info-title {
    display: flex;
    gap: 0.25rem;
    justify-content: space-between;
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

  .info-footer {
    display: flex;
    justify-content: space-between;
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
  background-color: ${(props) => props.theme.colors.pink[600]};
  color: ${(props) => props.theme.colors.white.standard};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 0.4rem;

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
