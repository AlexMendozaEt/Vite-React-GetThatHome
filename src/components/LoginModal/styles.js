import styled from "@emotion/styled";

export const Modal = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.6);
  z-index: 1;
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.background.lighter};
  padding: 2rem 1rem;
  width: 25rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .title {
    font-size: 1.5rem;
    line-height: 2rem; /* 133.333% */
  }

  .form {
    width: 100%;
  }

  .form__inputs {
    margin-bottom: 1rem;
  }
`;
