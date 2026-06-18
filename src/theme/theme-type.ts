// This file augments the MUI Theme types directly in the package:
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
import type {
  Theme,
  Palette,
  PaletteOptions
} from "@mui/material/styles";
import type { ComponentOverrides } from './createTheme';

interface ExtraPalette extends Palette {
  // Add palette fields here.
}

interface ExtendedPalette extends ExtraPalette {
  components: ComponentOverrides;
}

// The theme useExtendedTheme() returns: MUI's Theme with our component overrides
// and palette. We narrow `components` here rather than via global augmentation —
// globally overriding Theme.components with ComponentOverrides is incompatible with
// MUI's own Components<Theme> typing (it only ever compiled because the .d.ts form
// was skipped by skipLibCheck).
export interface ExtendedTheme extends Omit<Theme, "components"> {
  components: ComponentOverrides;
  palette: ExtendedPalette;
}

/**
 * Adding extra theme properties.
 *
 * Only `tertiary` genuinely needs to be global (it is a real palette colour every
 * consumer reads). It is augmented directly; no `extends ExtraTheme`, which would
 * make Theme extend itself (TS2310).
 */
declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}
