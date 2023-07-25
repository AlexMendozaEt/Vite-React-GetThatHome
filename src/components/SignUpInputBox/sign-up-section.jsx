import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import {
  SingUpBoxForm,
  CreateHeader,
  IconBack,
  CreateText,
  ErrorBox,
  ErrorText,
  ErrorInputs,
  FormEdit,
  FieldEdit,
  InputBox,
  LabelText,
  ButtonCreate,
  ButtonText,
} from "./styles";
import { useAuth } from "../../context/auth-context";

function MyFormikCreate({ userType }) {
  const { signup } = useAuth();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    role: userType,
  };

  const navigate = useNavigate();

  const [showError, setShowError] = useState(false);

  async function onSubmit(values) {
    signup(values);
  }

  function hideError() {
    setShowError(false);
    document.body.classList.remove("no-scroll");
  }

  function validate(values) {
    const errors = {};

    if (values.name === "") {
      errors.name = "Name is required";
    }

    if (values.email === "") {
      errors.email = "Email is required";
    }

    if (values.phone === "") {
      errors.phone = "Phone is required";
    } else if (!/\b(?:\d{9}|\d{3}-\d{3}-\d{3})\b/.test(values.phone)) {
      errors.phone = "Invalid phone";
    }

    if (values.password === "") {
      errors.password = "Password is required";
    }

    if (values.password_confirmation === "") {
      errors.password_confirmation = "Password confirmation is required";
    }

    return errors;
  }

  return (
    <SingUpBoxForm>
      <CreateHeader>
        <CreateText>Create your Account</CreateText>
      </CreateHeader>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {({ errors }) => (
          <FormEdit>
            <InputBox>
              <LabelText htmlFor="name">NAME</LabelText>
              <FieldEdit
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className={errors.name ? "input-error" : ""}
              />
              <ErrorInputs name="name" component="small" />
            </InputBox>
            <InputBox>
              <LabelText htmlFor="email">EMAIL</LabelText>
              <FieldEdit
                type="email"
                id="email"
                name="email"
                placeholder="user@mail.com"
                className={errors.email ? "input-error" : ""}
              />
              <ErrorInputs name="email" component="small" />
            </InputBox>
            <InputBox>
              <LabelText htmlFor="phone">PHONE</LabelText>
              <FieldEdit
                type="tel"
                id="phone"
                name="phone"
                placeholder="999-999-999"
                className={errors.price ? "input-error" : ""}
              />
              <ErrorInputs name="phone" component="small" />
            </InputBox>
            <InputBox>
              <LabelText htmlFor="password">PASSWORD</LabelText>
              <FieldEdit
                type="password"
                id="password"
                name="password"
                placeholder="******"
                className={errors.password ? "input-error" : ""}
              />
              <ErrorInputs name="password" component="small" />
            </InputBox>
            <InputBox>
              <LabelText htmlFor="password_confirmation">
                PASSWORD CONFIRMATION
              </LabelText>
              <FieldEdit
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                placeholder="******"
                className={errors.password ? "input-error" : ""}
              />
              <ErrorInputs name="password_confirmation" component="small" />
            </InputBox>
            <ButtonCreate type="submit">
              {/* DENTRO DEL BOTON onClick={() => navigate("/home")} */}
              <ButtonText>Create account</ButtonText>
            </ButtonCreate>
            {showError && (
              <ErrorBox onClick={hideError}>
                <ErrorText>
                  An error occurred when creating the product
                </ErrorText>
              </ErrorBox>
            )}
          </FormEdit>
        )}
      </Formik>
    </SingUpBoxForm>
  );
}

MyFormikCreate.propTypes = {
  userType: PropTypes.string,
};

export default MyFormikCreate;
