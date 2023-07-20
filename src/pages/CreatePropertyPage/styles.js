import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .input-address {
    min-width: 20rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.pink[500]};
    border-radius: 0.5rem;
    width: fit-content;
    padding: 0.5rem;
  }
  .label {
    font-size: 0.625rem;
    font-family: Inter;
    letter-spacing: 0.09375rem;
    //word-wrap: break-word;
  }
`;
