import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledDetail = styled.section`
  display: flex;
  /* flex-wrap: wrap; */
  width: 100%;
  justify-content: space-between;
  text-align: center;
  padding: 4rem 2rem;

  .property-image-container {
    display: grid;
    grid-template-columns: 10% 80% 10%;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }

  .property-image-container__img {
    max-width: 32rem;
    max-height: 24rem;
  }

  .info-address-price {
    display: flex;
    justify-content: space-between;
    font-size: 2.25rem;
    line-height: 3rem; /* 133.333% */
    letter-spacing: 0.01563rem;
    text-align: left;
    align-items: flex-start;
  }

  .info-address-price__price {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }

  .container-dollar {
    display: flex;
    align-items: center;
    min-width: 3rem;
    min-height: 3rem;
  }

  .info-district {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.00938rem;
    margin-bottom: 1rem;
  }

  .line {
    border: 0.0625rem solid ${(props) => props.theme.colors.pink[600]};
    border-radius: 0.5rem;
  }
  .info-property {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .info-property__child {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem; /* 133.333% */
  }

  .title-pink {
    color: ${(props) => props.theme.colors.pink[600]};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem; /* 140% */
    letter-spacing: 0.00938rem;
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .simple-text {
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.03125rem;
    text-align: left;
    hyphens: manual;
    margin-bottom: 1rem;
    font-family: ${fonts.secondary};
  }

  .login {
    padding: 2rem;
  }

  .login__card {
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.colors.white.standard};
    color: ${(props) => props.theme.colors.black.standard};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  }

  .login__title {
    min-width: 8.875rem;
    font-size: 1rem;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.03125rem;
    top: 1rem;
  }

  .button {
    font-family: ${fonts.secondary};
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: 0.07813rem;
    text-transform: uppercase;
  }
`;
