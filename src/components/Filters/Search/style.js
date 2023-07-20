import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  width: 100%;
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
  top: 40px;
  background-color: white;
  width: 300px;
  gap: 4px;
  // box-shadow: 3px 3px 10px gray;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid ${(props)=> props.theme.colors.pink[500]};
  align-content: center;
  position: fixed;
  margin-top: 8px;

`;

export const ContainerElement = styled.li`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  font-weight: 500;
  
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
  border: 1px solid ${(props)=> props.theme.colors.pink[500]};


`;

export const Input = styled.input`
  width: 196px;
  height: 24px;
  margin: 2px;
  padding: 8px;
  border: none;
  align-self: center;
`;

export const InputCheckbox = styled.input`
  // display: inline-block;
  width: 20px;
  height: 20px;
  margin: 2px;
  padding: 2px;
  appearance: none;
  border: 1px solid ${(props)=> props.theme.colors.pink[500]};
  

  &:checked {
     border: 4px solid ${(props)=> props.theme.colors.pink[500]};
  }
`;

