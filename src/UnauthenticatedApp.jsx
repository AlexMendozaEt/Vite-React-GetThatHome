import { Routes, Route, Navigate } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";

function UnauthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<LandingPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="properties" element={<PropertiesPage />} />
      <Route path="property/:id" element={<PropertyDetailPage />} />
    </Routes>
  );
}

export default UnauthenticatedApp;
