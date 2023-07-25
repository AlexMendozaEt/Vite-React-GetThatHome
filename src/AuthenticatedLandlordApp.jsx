import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import EditPropertyPage from "./pages/EditPropertyPage";
import SavedPropertiesPage from "./pages/SavedPropertiesPage";
import CreateRentalPropertyPage from "./pages/CreateRentalPropertyPage";
import CreateSalePropertyPage from "./pages/CreateSalePropertyPage";
import ProfilePage from "./pages/ProfilePage";
import MyPropertiesPage from "./pages/MyPropertiesPage";

function AuthenticatedLandlordApp() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="properties">
          <Route index element={<PropertiesPage />} />
          <Route
            path=":address/:houses/:apartment/:buying/:renting"
            element={<PropertiesPage />}
          />
        </Route>
        <Route path="property">
          <Route index element={<Navigate to="/property/create/rent" />} />
          <Route path="create">
            <Route index element={<Navigate to="/property/create/rent" />} />
            <Route path="rent" element={<CreateRentalPropertyPage />} />
            <Route path="sale" element={<CreateSalePropertyPage />} />
          </Route>
          <Route path="detail/:id" element={<PropertyDetailPage />} />
          <Route path="edit/:id" element={<PropertyDetailPage />} />
        </Route>
        <Route path="savedproperties" element={<SavedPropertiesPage />} />
        <Route path="myproperties" element={<MyPropertiesPage />} />
      </Route>
    </Routes>
  );
}

export default AuthenticatedLandlordApp;
