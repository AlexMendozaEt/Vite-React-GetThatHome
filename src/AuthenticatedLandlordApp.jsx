import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import EditPropertyPage from "./pages/EditPropertyPage";
import SavedPropertiesPage from "./pages/SavedPropertiesPage";
import CreatePropertyPage from "./pages/CreatePropertyPage";

function AuthenticatedLandlordApp() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="property">
          <Route index element={<PropertiesPage />} />
          <Route path=":id">
            <Route index element={<PropertyDetailPage />} />
            <Route path="edit" element={<EditPropertyPage />} />
          </Route>
          <Route path="create" element={<CreatePropertyPage />} />
        </Route>
        <Route path="savedproperties" element={<SavedPropertiesPage />} />
        <Route path="myproperties" element={<PropertiesPage />} />
      </Route>
    </Routes>
  );
}

export default AuthenticatedLandlordApp;
