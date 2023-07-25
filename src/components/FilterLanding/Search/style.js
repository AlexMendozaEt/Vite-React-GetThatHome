import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  width: min-content;
  justify-items: center;
  align-items: start;
  font-family: inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  color: #616161;
`;

export const ContainerCard = styled.ul`
  top: 140px;
  width: 240px;
  gap: 4px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.pink[500]};
  align-content: center;
  position: absolute;
  margin-top: 8px;
  z-index: 1;
`;

export const ContainerElement = styled.li`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  // width: 96px;
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 40px;
  padding: 8px;
  gap: 4px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.pink[500]};
`;

export const Input = styled.input`
  width: 196px;
  height: 24px;
  margin: 2px;
  padding: 8px;
  border: none;
  align-self: center;

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.info};
  }
`;

export const InputCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 2px;
  padding: 2px;
  accent-color: ${(props) => props.theme.colors.pink[500]};

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.info};
  }
`;
