import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: ${fonts.secondary};

  .title {
    font-size: 2.25rem;
    line-height: 3rem;
    letter-spacing: 0.01563rem;
  }

  .links-container {
    display: flex;
  }

  .link-left {
    border-top: 0.0625rem solid
      ${(props) => props.theme.colors.background.darker};
    border-bottom: 0.0625rem solid
      ${(props) => props.theme.colors.background.darker};
    border-left: 0.0625rem solid
      ${(props) => props.theme.colors.background.darker};
    padding: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .link-right {
    border: 0.0625rem solid ${(props) => props.theme.colors.background.darker};
    padding: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  .active {
    background-color: ${(props) => props.theme.colors.pink[400]};
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .label-container {
    display: flex;
    gap: 0.25rem;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }

  .label {
    color: ${(props) => props.theme.colors.text.light};
    font-size: 0.625rem;
    font-family: ${fonts.secondary};
    letter-spacing: 0.09375rem;
    //word-wrap: break-word;
  }

  .form__type {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .form__property {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .form__pets {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .quote {
    color: ${(props) => props.theme.colors.text.light};
    font-family: Inter;
    font-size: 0.75rem;
    letter-spacing: 0.025rem;
  }

  .images-container {
    background-color: ${(props) => props.theme.colors.background.lighter};
    max-height: 8.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .images-container__image {
    max-height: 7.5rem;
    max-width: 7.5rem;
    object-fit: cover;
    aspect-ratio: 1/1;
  }

  .photos-title {
    font-family: Montserrat;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem; /* 140% */
    letter-spacing: 0.00938rem;
  }

  .photos-instructions {
    font-size: 0.625rem;
    letter-spacing: 0.09375rem;
  }

  .autocomplete-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.pink[400]};
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

  .autocomplete-wrapper input[type="text"] {
    accent-color: ${(props) => props.theme.colors.pink[400]};
    position: relative;

    width: 100%;
    padding: 0.25rem 0;
    border: none;
  }

  .autocomplete-wrapper input::placeholder {
    color: ${(props) => props.theme.colors.text.light};
    font-family: ${fonts.secondary};
    letter-spacing: 0.03125rem;
  }

  .autocomplete-wrapper input:focus {
    outline: 0.1875rem solid ${(props) => props.theme.colors.info};
  }
`;

export const ContainerAutocomplete = styled.div`
  border: none;
  padding: 0.25rem 0;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
  accent-color: ${(props) => props.theme.colors.pink[400]};
  ::placeholder {
    color: ${(props) => props.theme.colors.text.light};
    font-family: ${fonts.secondary};
    letter-spacing: 0.03125rem;
  }
  :focus {
    outline: 0.1875rem solid ${(props) => props.theme.colors.info};
  }
`;

export const StyledTextArea = styled.textarea`
  padding: 0.5rem;
  font-family: Inter;
  font-size: 0.875rem;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: 0.01563rem;
  border: 1px solid ${(props) => props.theme.colors.pink[400]};
  border-radius: 0.5rem;

  ::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }

  :focus {
    outline: 0.1875rem solid ${(props) => props.theme.colors.info};
  }
`;
