import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  // width: 100%;
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
  background-color: ${(props) => props.theme.colors.white.standard};
  width: 211px;
  height: 116px;
  gap: 4px;
  border-radio: 8px;
  box-shadow: 3px 3px 10px gray;
  padding: 8px;
  border-radius: 8px;
  align-content: center;
  position: absolute;
  margin-top: 40px;
  z-index: 1;
`;

export const Title = styled.div`
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1.5px;
  text-align: left;
`;

export const PropertyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 211px;
  overflow: hidden;
  gap: 8px;
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
  accent-color: ${(props) => props.theme.colors.pink[500]};
`;

export const Label = styled.label`
  height: 20px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-align: left;
  align-content: center;
`;
