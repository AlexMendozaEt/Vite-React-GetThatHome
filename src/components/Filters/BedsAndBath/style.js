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

export const ContainerCard = styled.div`
  background-color: white;
  width: 270px;
  height: 184px;
  gap: 4px;
  border-radio: 8px;
  box-shadow: 3px 3px 10px gray;
  padding: 8px;
  border-radius: 8px;
  align-content: center;
  position: fixed;
  margin-top: 8px;

`;

export const Title = styled.div`
font-size: 10px;
font-weight: 400;
letter-spacing: 1.5px;
text-align: left;
`;

export const ArrayContainer = styled.div`
  display: flex;
  // flex-direction: column;
  width: 252px;
  height: 36px;
  border: 1px solid #8e8e8e;
  overflow: hidden;
  border: hidden;
`;

export const Array = styled.div`
  display: flex;
  align-i-tems: center;
  justify-content: center;
  width: 50px;
  height: 36px;
  border: 1px solid #8e8e8e;
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.pink[500] : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#FFFFF")};
  text-align: center;
  cursor: pointer;
  border-radio: 8px;
  border-radius: ${({ isFirst, isLast }) =>
    isFirst ? "8px 0 0 8px" : isLast ? "0 8px 8px 0" : "none"};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;