import { Routes, Route, Navigate } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import LoginModal from "./components/LoginModal";
import { useAuth } from "./context/auth-context";

function UnauthenticatedApp() {
  const { isLoginModalActive, handleModal } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="login" element={<LoginModal />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="properties">
          <Route index element={<PropertiesPage />} />
          <Route
            path=":address/:houses/:apartment/:buying/:renting"
            element={<PropertiesPage />}
          />
        </Route>
        <Route path="property">
          <Route path="detail/:id" element={<PropertyDetailPage />} />
        </Route>
      </Routes>
      {isLoginModalActive && <LoginModal toggleModal={handleModal} />}
    </>
  );
}

export default UnauthenticatedApp;
