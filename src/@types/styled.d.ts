import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      gray: string;

      red: string;
      blue: string;

      black: string;
    };

    fontWeights: {
      light: number;
      regular: number;
      bold: number;
    };

    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
