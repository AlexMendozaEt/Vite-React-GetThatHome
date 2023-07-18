import { Global, ThemeProvider, css } from "@emotion/react";
import { useState } from "react";
import Input from "./components/Input";

import {
  GlobalThemeStyle,
  darkTheme,
  isDarkModeActive,
  lightTheme,
} from "./styles/themes";
/*
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

*/
function App() {
  const [darkMode, SetDarkMode] = useState(isDarkModeActive());

  /*
  const [searchData, setSearchData] = useState([
    "San Miguel",
    "Lima",
    "San Isidro",
    "Lince",
    "Miraflores",
    "Barranco",
  ]);

  const handleInputChange = (event) => {
    console.log(event.target.value);
  };
  */
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Global
        styles={css`
          ${GlobalThemeStyle(darkMode ? darkTheme : lightTheme)}
        `}
      />
      {/* Comentario: 
    <Input
      placeholder={"placeholder"}
      isfullwidth={"isfullwidth"}
      data={searchData}
      onChange={handleInputChange}
    ></Input>
    */}
    </ThemeProvider>
  );
}

export default App;
