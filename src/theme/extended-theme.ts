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
