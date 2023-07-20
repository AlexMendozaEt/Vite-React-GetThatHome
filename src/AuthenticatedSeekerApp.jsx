import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import SavedPropertiesPage from "./pages/SavedPropertiesPage";

function AuthenticatedSeekerApp() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="property">
          <Route index element={<PropertiesPage />} />
          <Route path=":id" element={<PropertyDetailPage />} />
        </Route>
        <Route path="savedproperties" element={<SavedPropertiesPage />} />
      </Route>
    </Routes>
  );
}

export default AuthenticatedSeekerApp;
