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
  display: grid;
  background-color: ${(props) => props.theme.colors.white.standard};
  width: 247px;
  height: 168px;
  gap: 8px;
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
  letter-spacing: 1.5px;
  text-align: left;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 231px;
  align-items: center;
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
  width: max-content;
  gap: 8px;
  align-items: center;
`;

export const Line = styled.div`
  background-color: gray;
  width: 11px;
  height: 2px;
  border-radius: 1px;
  margin: auto;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  text-align: center;
`;

export const Input = styled.input`
  display: inline-block;
  width: 102px;
  height: 36px;
  margin: 2px;
  padding: 8px;
  // padding-left: 36px;
  // appearance: none;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.pink[500]};

  &:checked {
    border: 4px solid ${(props) => props.theme.colors.pink[500]};
  }
`;

export const InputCheckbox = styled.input`
  // display: inline-block;
  width: 20px;
  height: 20px;
  margin: 2px;
  padding: 2px;
  accent-color: ${(props) => props.theme.colors.pink[500]};
`;
