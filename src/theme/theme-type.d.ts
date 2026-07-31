// This file augments the MUI Theme types directly in the package:
https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
import {
  Theme,
  ThemeOptions,
  Palette,
  PaletteOptions
} from "@mui/material/styles";
import { ComponentOverrides } from './createTheme';

interface ExtraTheme extends Theme {
  components: ComponentOverrides;
}

// `ExtendedTheme` and `ExtendedPalette` are in `./extended-theme`.

/**
 * Adding extra theme properties
 */
declare module "@mui/material/styles" {
  // This controls what appears when the theme variable is used inside sx, styled, etc.
  interface Theme extends ExtraTheme {}
  // This controls what is allowed to be specified in `createTheme`.
  interface ThemeOptions extends ExtraTheme {}
  // Both are needed to achieve the desired behaviour.

    interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}
