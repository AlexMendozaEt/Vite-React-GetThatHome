import { Global, ThemeProvider, css } from "@emotion/react";
import { useState } from "react";

import {
  GlobalThemeStyle,
  darkTheme,
  isDarkModeActive,
  lightTheme,
} from "./styles/themes";
import Button from "./components/Button";
import Test from "./components/test";

function App() {
  const [darkMode, SetDarkMode] = useState(isDarkModeActive());

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Global
        styles={css`
          ${GlobalThemeStyle(darkMode ? darkTheme : lightTheme)}
        `}
      />
      <Button type="primary">New Button</Button>
      <Test />
    </ThemeProvider>
  );
}

export default App;
