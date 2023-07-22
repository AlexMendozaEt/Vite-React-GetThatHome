import { RiUserReceived2Line } from "react-icons/ri";
import PropTypes from "prop-types";

import { useAuth } from "../../context/auth-context";
import { Modal, ModalContent } from "./styles";
import Input from "../Input";
import Button from "../Button";

function LoginModal({ toggleModal }) {
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const credentials = { email: email.value, password: password.value };
    login(credentials);
  }

  function handlePropagation(event) {
    event.stopPropagation();
  }

  return (
    <Modal onClick={toggleModal}>
      <ModalContent onClick={handlePropagation}>
        <p className="title">Login</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__inputs">
            <Input
              label={"EMAIL"}
              name={"email"}
              type={"email"}
              placeholder={"user@mail.com"}
              isFullWidth
            />
            <Input
              label={"PASSWORD"}
              name={"password"}
              type={"password"}
              placeholder={"******"}
              isFullWidth
            />
          </div>
          <Button
            icon={<RiUserReceived2Line />}
            type={"primary"}
            to={"/login"}
            isFullWidth
          >
            LOGIN
          </Button>
        </form>
      </ModalContent>
    </Modal>
  );
}

LoginModal.propTypes = {
  toggleModal: PropTypes.func,
};

export default LoginModal;
