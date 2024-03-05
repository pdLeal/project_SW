import React from "react";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* General Resets */
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  vertical-align: middle;
  font-style: italic;
}

button {
  font-family: inherit;
}

:root{
    --test: 4px;
}
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  )
}

export default App
