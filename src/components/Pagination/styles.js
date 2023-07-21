import styled from "@emotion/styled";

export const NavBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  .null {
    width: 31px;
    height: 31px;
    padding: 5px 0px 6px 0px;
  }

  .page-list {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .button-list {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 31px;
    height: 31px;
    padding: 5px 0px 6px 0px;
  }

  .is-current {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 31px;
    height: 31px;
    padding: 5px 0px 6px 0px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.pink[100]};
    border: 1px solid ${(props) => props.theme.colors.pink[900]};
  }
`;
