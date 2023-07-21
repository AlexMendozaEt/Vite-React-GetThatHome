import { RiUserReceived2Line } from "react-icons/ri";

import { useAuth } from "../../context/auth-context";
import { Modal, ModalContent } from "./styles";
import Input from "../Input";
import Button from "../Button";

function LoginModal() {
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const credentials = { email: email.value, password: password.value };
    login(credentials);
  }

  return (
    <Modal>
      <ModalContent>
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

export default LoginModal;
