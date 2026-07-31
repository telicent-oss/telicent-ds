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

// `ExtendedTheme` and `ExtendedPalette` used to be declared here too. They moved
// to the compiled module `./extended-theme` so the dts rollup can inline them
// into `dist/export.d.ts`; see the comment at the top of that file. This file
// stays a `.d.ts` and keeps only the augmentation below, which is what makes
// `Theme["components"]` required across the package.

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
