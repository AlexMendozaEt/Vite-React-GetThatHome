import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import CreateRentalPropertyPage from "./pages/CreateRentalPropertyPage";
import EditRentPropertyPage from "./pages/EditRentPropertyPage ";
import EditSalePropertyPage from "./pages/EditSalePropertyPage";
import CreateSalePropertyPage from "./pages/CreateSalePropertyPage";
import ProfilePage from "./pages/ProfilePage";
import MyActivePropertiesPage from "./pages/MyActivePropertiesPage";
import MyClosedPropertiesPage from "./pages/MyClosedPropertiesPage";

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
          <Route path="edit">
            <Route path="rent/:id" element={<EditRentPropertyPage />} />
            <Route path="sale/:id" element={<EditSalePropertyPage />} />
          </Route>
        </Route>
        <Route path="myproperties">
          <Route index element={<Navigate to="/myproperties/active" />} />
          <Route path="active" element={<MyActivePropertiesPage />} />
          <Route path="closed" element={<MyClosedPropertiesPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AuthenticatedLandlordApp;
