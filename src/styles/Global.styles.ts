import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #1ce783;
    --color-secondary: #1d252c;
    --color-tertiary: #43273b;

    --font-color-1: #333;
    --font-color-2: #696969;
    --font-color-3: #898e91;
  }

  body {
    font-family: 'Inter', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
