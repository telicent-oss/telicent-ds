// This file augments the MUI Theme types directly in the package:
https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
import {
  Theme,
  ThemeOptions,
  Palette,
  PaletteOptions
} from "@mui/material/styles";
import { ComponentOverrides } from './theme';

interface ExtraTheme extends Theme {
  components: ComponentOverrides;
}

export interface ExtendedTheme extends ExtraTheme {
  components: ComponentOverrides;
  palette: ExtendedPalette;
}

interface ExtraPalette extends Palette {
  // Add palette fields here.
}

interface ExtendedPalette extends ExtraPalette {
  components: ComponentOverrides;
}

/**
 * Adding extra theme properties
 */
declare module "@mui/material/styles" {
  // This controls what appears when the theme variable is used inside sx, styled, etc.
  interface Theme extends ExtraTheme {}
  // This controls what is allowed to be specified in `createTheme`.
  interface ThemeOptions extends ExtraTheme {}
  // Both are needed to achieve the desired behaviour.
}
