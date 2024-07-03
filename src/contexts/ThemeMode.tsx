import { Theme } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    green: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
    };
    dark: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    };
    light: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    };
  }

  interface PaletteOptions {
    green?: {
      lighter?: string;
      light?: string;
      main?: string;
      dark?: string;
      darker?: string;
    };
    dark?: {
      primary?: string;
      secondary?: string;
      accent?: string;
      background?: string;
      text?: string;
    };
    light?: {
      primary?: string;
      secondary?: string;
      accent?: string;
      background?: string;
      text?: string;
    };
  }
}
export const theme: Theme = createTheme({
  palette: {
    green: {
      lighter: '#C5E9C7',
      light: '#5AB65F',
      main: '#00584A',
      dark: '#5AB65F',
      darker: '#00584A;',
    },
    dark: {
      primary: '#98c3e7',
      secondary: '#adb5bd',
      accent: '#d041d2',
      background: '#22262a',
      text: '#eaedf0',
    },
    light: {
      primary: '#184467',
      secondary: '#424A52',
      accent: '#bc2dbe',
      background: '#d5d9dd',
      text: '#0f1215',
    },
  },
});
const ThemeMode = ({children}: any) => {
  console.log(typeof(theme))
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeMode;
