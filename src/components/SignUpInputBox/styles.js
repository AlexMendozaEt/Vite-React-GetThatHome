import styled from "@emotion/styled";
import { Field, Form, ErrorMessage } from "formik";
import { IoIosArrowBack } from "react-icons/io";
import { fonts, typography } from "../../styles";

export const SingUpBoxForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 388px;
  padding: 16px;
  border-radius: 8px;
  gap: 16px;
  background-color: white;
`;

export const CreateHeader = styled.div`
  display: flex;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.primary};
  ${typography.head.sm}
`;

export const IconBack = styled(IoIosArrowBack)`
  position: absolute;
  left: 35px;
  width: 20px;
  height: auto;

  cursor: pointer;
  :hover {
    color: white;
    background-color: #fa4a0c;
    border-radius: 50%;
  }
`;

export const CreateText = styled.p`
  font-family: ${fonts.primary};
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
`;

export const ErrorBox = styled.div`
  position: fixed;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000085;
`;

export const ErrorText = styled.div`
  display: flex;
  font-family: ${fonts.primary};
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
  width: 310px;
  height: 70px;
  padding: 12px 16px 12px 16px;
  border-radius: 30px;
  background-color: #fa4a0c;
`;

export const ErrorInputs = styled(ErrorMessage)`
  color: #9d2901;
`;

export const FormEdit = styled(Form)`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
`;

export const FieldEdit = styled(Field)`
  width: 100%;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.pink[400]};
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelText = styled.div`
  font-family: ${fonts.secondary};
  ${typography.text.sm}
  font-weight: 400;
`;

export const TextBox = styled.textarea`
  resize: vertical;
  min-height: 20px;
  height: textareaHeight;
  border: 0;
  border-bottom: 1px solid;
  background-color: #f3f4f6;
`;

export const ButtonCreate = styled.button`
  text-decoration: none;
  width: auto;
  height: 40px;
  padding: 8px 16px 8px 16px;
  border-radius: 16px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.pink[300]};
  cursor: pointer;
`;

export const ButtonText = styled.p`
  font-family: ${fonts.primary};
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  color: white;
`;
