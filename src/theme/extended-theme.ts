// The theme shape `useExtendedTheme()` returns.
//
// A compiled module, not a `.d.ts`: `vite-plugin-dts` only inlines declarations
// the TypeScript program emits. Move these into `theme-type.d.ts` and
// `dist/export.d.ts` gets an import resolving outside `dist`.
import type { Palette, Theme } from "@mui/material/styles";
import type { ComponentOverrides } from "./createTheme";

export interface ExtendedPalette extends Palette {
  components: ComponentOverrides;
}

// `Omit` rather than `extends Theme`: MUI types `styleOverrides` against
// `Omit<Theme, "components">`, so re-declaring `components` trips TS2430.
export interface ExtendedTheme extends Omit<Theme, "components" | "palette"> {
  components: ComponentOverrides;
  palette: ExtendedPalette;
}

interface ExtraTheme {
  components: ComponentOverrides;
}

/**
 * Adding extra theme properties.
 *
 * Here rather than in a `.d.ts` for the same reason as above: an augmentation
 * only reaches `dist/export.d.ts` if the TypeScript program emits the file it
 * lives in. `avatar-overrides.ts` is the working precedent.
 */
declare module "@mui/material/styles" {
  // What appears when the theme variable is used inside sx, styled, etc.
  interface Theme extends ExtraTheme {}
  // What is allowed to be specified in `createTheme`. Both are needed.
  interface ThemeOptions extends ExtraTheme {}

  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}
