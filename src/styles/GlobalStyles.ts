import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin:0;
    box-sizing:border-box;
  }

  body {
    background: #f0f0f5;
    color: #312e38;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }
`;
