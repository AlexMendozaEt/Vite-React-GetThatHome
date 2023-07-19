import { Global, ThemeProvider, css } from "@emotion/react";
import { useState } from "react";

import LandingPage from "./pages/LandingPage/landing-page";

import {
  GlobalThemeStyle,
  darkTheme,
  isDarkModeActive,
  lightTheme,
} from "./styles/themes";

// const house = {
//   operationType: 0,
//   adress: "86872 Jacob Gateway, Durganport, WV 48044",
//   price: 3000,
//   propertyType: 0,
//   bgUrl: "src/assets/images/background-example.jpg",
//   beds: 4,
//   bath: 2,
//   area: 180,
//   pets: true,
//   fav: false,
//   userRol: 1,
// };

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
