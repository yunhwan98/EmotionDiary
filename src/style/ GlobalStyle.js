import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Yeon+Sung&display=swap");

body {
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nanum Pen Script";
  min-height: 100vh;
  margin: 0px;
}

@media (min-width: 650px) {
  .App {
    width: 640px;
  }
}
@media (max-width: 650px) {
  .App {
    width: 90vw;
  }
}

#root {
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.App {
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
}

`;

export default GlobalStyle;
