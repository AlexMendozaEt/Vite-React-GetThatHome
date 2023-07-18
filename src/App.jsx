import { Global, ThemeProvider, css } from "@emotion/react";
import { useState } from "react";
import Card from "./components/Cards";
import Menu from "./components/Menu";

import {
  GlobalThemeStyle,
  darkTheme,
  isDarkModeActive,
  lightTheme,
} from "./styles/themes";

const house = {
  operationType: 0,
  adress: "86872 Jacob Gateway, Durganport, WV 48044",
  price: 3000,
  propertyType: 0,
  bgUrl: "src/assets/images/background-example.jpg",
  beds: 4,
  bath: 2,
  area: 180,
  pets: true,
  fav: false,
  userRol: 1,
};

function App() {
  const [darkMode, SetDarkMode] = useState(isDarkModeActive());

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Global
        styles={css`
          ${GlobalThemeStyle(darkMode ? darkTheme : lightTheme)}
        `}
      />
      {/* <Card
        bgUrl={house.bgUrl}
        price={house.price}
        propertyType={house.propertyType}
        operationType={house.operationType}
        adress={house.adress}
        beds={house.beds}
        bath={house.bath}
        area={house.area}
        pets={house.pets}
        fav={house.fav}
        userRol={house.userRol}
      ></Card> */}
      <Menu />
    </ThemeProvider>
  );
}

export default App;
