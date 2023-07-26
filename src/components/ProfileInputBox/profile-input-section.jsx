import { Formik, Field, ErrorMessage } from "formik"; // Import Field and ErrorMessage from Formik
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getUser, updateUser } from "../../services/user-service"; // Assume there's a function updateUser to update the user data
import { useAuth } from "../../context/auth-context";

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

function MyFormikProfile({ userType }) {
  const { user } = useAuth();
  console.log(user);
  const initialValues = {
    name: user.name,
    email: user.email,
    phone: user.phone,
  };

  const navigate = useNavigate();

  const [showError, setShowError] = useState(false);

  async function onSubmit(values, { setSubmitting }) {
    const id = user.id;
    try {
      const data = await updateUser(values, id);
      // setUser(updatedUser);
      setShowError(false);
      setSubmitting(false);
      console.log(data);
      navigate("/");
    } catch (error) {
      setShowError(true);
      console.error("Error updating user:", error);
    }
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
    } else if (!/^(?:\d{9}|\d{10}|\d{3}-\d{3}-\d{3})$/.test(values.phone)) {
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
        <CreateText>Your Profile</CreateText>
      </CreateHeader>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {({ errors, isSubmitting }) => (
          <FormEdit>
            <InputBox>
              <LabelText htmlFor="name">NAME</LabelText>
              <Field
                as={FieldEdit}
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
              <Field
                as={FieldEdit} // Use Field instead of directly using FieldEdit
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
              <Field
                as={FieldEdit}
                type="tel"
                id="phone"
                name="phone"
                placeholder="999-999-999"
                className={errors.phone ? "input-error" : ""}
              />
              <ErrorInputs name="phone" component="small" />
            </InputBox>
            <ButtonCreate type="submit" disabled={isSubmitting}>
              {" "}
              {/* Disable the button during submission */}
              <ButtonText>
                {isSubmitting ? "Saving..." : "Update Profile"}
              </ButtonText>
            </ButtonCreate>

            {showError && (
              <ErrorBox onClick={hideError}>
                <ErrorText>
                  An error occurred when updating the profile
                </ErrorText>
              </ErrorBox>
            )}
          </FormEdit>
        )}
      </Formik>
    </SingUpBoxForm>
  );
}

MyFormikProfile.propTypes = {
  userType: PropTypes.number,
};

export default MyFormikProfile;
