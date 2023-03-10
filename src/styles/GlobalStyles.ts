import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin:0;
    box-sizing:border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #000000;
    color: #312e38;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }
`;
