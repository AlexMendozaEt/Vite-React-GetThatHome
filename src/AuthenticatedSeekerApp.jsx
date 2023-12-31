import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import SavedContactedPropertiesPage from "./pages/SavedContactedPropertiesPage";
import SavedFavoritePropertiesPage from "./pages/SavedFavoritePropertiesPage";
import ProfilePage from "./pages/ProfilePage";

function AuthenticatedSeekerApp() {
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
          <Route path="detail/:id" element={<PropertyDetailPage />} />
        </Route>
        <Route path="savedproperties">
          <Route index element={<Navigate to="/savedproperties/favorites" />} />
          <Route path="favorites" element={<SavedFavoritePropertiesPage />} />
          <Route path="contacted" element={<SavedContactedPropertiesPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AuthenticatedSeekerApp;
