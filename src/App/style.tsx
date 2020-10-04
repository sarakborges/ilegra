import { createGlobalStyle } from "styled-components";

import MainTheme from "Themes/Main";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${MainTheme.fontName};
    font-size: 16px;
  }
`;
