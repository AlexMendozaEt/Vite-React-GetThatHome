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

// const user_mock = {
//   type: 0,
// };

function App() {
  const { user } = useAuth();
  // let { user } = useAuth();
  // user = user_mock;

  const [darkMode, SetDarkMode] = useState(isDarkModeActive());

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Global
        styles={css`
          ${GlobalThemeStyle(darkMode ? darkTheme : lightTheme)}
        `}
      />
      {!user ? (
        <UnauthenticatedApp />
      ) : user.type == 0 ? (
        <AuthenticatedLandlordApp />
      ) : (
        <AuthenticatedSeekerApp />
      )}
    </ThemeProvider>
  );
}

export default App;
