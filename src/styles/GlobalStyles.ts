import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  :root {
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: radial-gradient(50% 57% at 50% 38%, #350505 6.5%, #000000 100%);
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.white};
    max-width: 1440px;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
