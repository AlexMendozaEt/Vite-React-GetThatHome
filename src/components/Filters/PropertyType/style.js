import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  width: 270px;
  justify-items: center;
  align-items: start;
  font-family: inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  color: #616161;
`;

export const ContainerCard = styled.div`
  background-color: white;
  width: 211px;
  height: 116px;
  gap: 4px;
  border-radio: 8px;
  box-shadow: 3px 3px 10px gray;
  padding: 8px;
  border-radius: 8px;
  align-content: center;
  position: fixed;
  margin-top: 40px;
`;

export const Title = styled.div`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-align: left;
`;

export const PropertyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 252px;
  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const ContainerInput = styled.div`
  display: flex;
  gap: 4px;
  text-align: center;
`;

export const Input = styled.input`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 2px;
  appearance: none;
  border: 1px solid ${(props)=> props.theme.colors.pink[500]};

  &:checked {
    border: 4px solid ${(props)=> props.theme.colors.pink[500]};
  }
`;