import {
  PaletteOptions,
  SimplePaletteColorOptions,
  TypeText,
} from '@mui/material';

interface ExtendedPaletteColorOptions extends SimplePaletteColorOptions {
  darker?: string;
  lighter?: string;
}
interface CustomPaletteOptions {
  primary: ExtendedPaletteColorOptions;
  // You can add more color options here if needed
}

const palette: CustomPaletteOptions = {
  // Our palette, which now supports the new `lighter`, for example:
  primary: {
    lighter: '#C5E9C7',
    light: '#5AB65F',
    main: '#00584A',
    dark: '#5AB65F',
    darker: '#00584A;',
  },
};
export default palette;
