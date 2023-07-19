import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUser, getUser } from "../services/user-service";
import * as auth from "../services/auth-service";
import { tokenKey } from "../config";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getUser()
      .then((user) => {
        setUser(user);
      })
      .catch(console.log);
  }, []);

  function login(credentials) {
    auth
      .login(credentials)
      .then((user) => {
        setUser(user);
        navigate("/");
      })
      .catch(console.log);
  }

  function signup(userData) {
    createUser(userData)
      .then((user) => {
        setUser(user);
      })
      .catch(console.log);
  }

  function logout() {
    auth
      .logout()
      .then(() => {
        sessionStorage.removeItem(tokenKey);
        setUser(null);
        navigate("/");
      })
      .catch(console.log);
  }

  const value = {
    user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
