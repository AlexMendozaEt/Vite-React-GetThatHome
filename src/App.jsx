import { Global, ThemeProvider, css } from "@emotion/react";
import { useState } from "react";

import {
  GlobalThemeStyle,
  darkTheme,
  isDarkModeActive,
  lightTheme,
} from "./styles/themes";
import { useAuth } from "./context/auth-context";
import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedSeekerApp from "./AuthenticatedSeekerApp";
import AuthenticatedLandlordApp from "./AuthenticatedLandlordApp";

function App() {
  const { user } = useAuth();

  const [darkMode, SetDarkMode] = useState(isDarkModeActive());

  console.log(user?.role);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Global
        styles={css`
          ${GlobalThemeStyle(darkMode ? darkTheme : lightTheme)}
        `}
      />
      {!user ? (
        <UnauthenticatedApp />
      ) : user.role === "landlord" ? (
        <AuthenticatedLandlordApp />
      ) : (
        <AuthenticatedSeekerApp />
      )}
    </ThemeProvider>
  );
}

export default App;
