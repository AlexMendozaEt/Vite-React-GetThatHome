import { Global, ThemeProvider, css } from "@emotion/react";
import { useState } from "react";

import LandingPage from "./pages/LandingPage/landing-page";

import {
  GlobalThemeStyle,
  darkTheme,
  isDarkModeActive,
  lightTheme,
} from "./styles/themes";

function App() {
  const [darkMode, SetDarkMode] = useState(isDarkModeActive());

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Global
        styles={css`
          ${GlobalThemeStyle(darkMode ? darkTheme : lightTheme)}
        `}
      />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
