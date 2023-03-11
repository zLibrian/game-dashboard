import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin:0;
    outline: 0;
    box-sizing:border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    max-width: 1440px;
    margin: 0 auto;
    background: radial-gradient(57.96% 57% at 51% 42%, #350505 6.53%, #000000 100%);
    color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }
`;
