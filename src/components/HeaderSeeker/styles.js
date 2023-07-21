import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledHeader = styled.header`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 1rem 0;
  font-family: ${fonts.secondary};

  .links-container {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  #menu-mobile,
  .toggle-checkbox {
    display: none;
  }

  .toggle-checkbox {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    gap: 0.5rem;
  }

  .toggle-checkbox__first_line,
  .toggle-checkbox__second_line,
  .toggle-checkbox__last_line {
    background: currentColor;
    height: 0.25rem;
    width: 100%;
    border-radius: 0.25rem;
    transition: 0.5s ease-in-out;
    transform-origin: right;
  }

  @media only screen and (max-width: 830px) {
    display: block;

    .toggle-checkbox {
      display: flex;
    }

    .links-container {
      flex-direction: column;
      margin: 0;
      padding: 0.5rem 0;
    }

    .link {
      width: 100%;
      padding: 0 1rem;
    }

    .link a {
      width: 100%;
    }

    .link button {
      width: 100%;
    }

    .expandable {
      display: none;
    }

    #menu-mobile:checked ~ .expandable {
      display: flex;
    }

    .logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 1rem;
    }

    #menu-mobile:checked ~ * .toggle-checkbox__first_line {
      transform: rotate(-45deg) scaleX(1.05);
    }

    #menu-mobile:checked ~ * .toggle-checkbox__second_line {
      opacity: 0;
    }

    #menu-mobile:checked ~ * .toggle-checkbox__last_line {
      transform: rotate(45deg) scaleX(1.05);
    }
  }
`;
