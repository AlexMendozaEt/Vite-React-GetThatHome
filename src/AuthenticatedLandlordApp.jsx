import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import EditPropertyPage from "./pages/EditPropertyPage";
import SavedPropertiesPage from "./pages/SavedPropertiesPage";
import CreateRentalPropertyPage from "./pages/CreateRentalPropertyPage";
import CreateSalePropertyPage from "./pages/CreateSalePropertyPage";

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
          <Route path="create">
            <Route index element={<Navigate to="/property/create/rent" />} />
            <Route path="rent" element={<CreateRentalPropertyPage />} />
            <Route path="sale" element={<CreateSalePropertyPage />} />
          </Route>
        </Route>
        <Route path="savedproperties" element={<SavedPropertiesPage />} />
        <Route path="myproperties" element={<PropertiesPage />} />
      </Route>
    </Routes>
  );
}

export default AuthenticatedLandlordApp;
