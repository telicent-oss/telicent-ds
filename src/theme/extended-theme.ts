// `ExtendedTheme` is the theme shape consumers see from `useExtendedTheme()`.
//
// It lives in this compiled module rather than in the ambient `theme-type.d.ts`
// beside it, for one reason: `vite-plugin-dts` with `rollupTypes` can only inline
// declarations the TypeScript program EMITS. A hand-written `.d.ts` is an input,
// not an output, so the rollup had nothing to inline and instead emitted
// `import { ExtendedTheme } from '../theme/theme-type'` into `dist/export.d.ts`.
// That path resolves outside `dist`, and `src/theme/theme-type.d.ts` is not in
// the package's `files` array, so the type was unresolvable for every consumer
// and `useExtendedTheme()` silently degraded to `any`.
//
// `theme-type.d.ts` keeps the `declare module "@mui/material/styles"`
// augmentation, which is what makes `Theme["components"]` required below.
import type { Palette, Theme } from "@mui/material/styles";
import type { ComponentOverrides } from "./createTheme";

export interface ExtendedPalette extends Palette {
  components: ComponentOverrides;
}

// `components` and `palette` are omitted and re-declared rather than narrowed in
// place. MUI types each `styleOverrides` entry against `Omit<Theme, "components">`,
// so a plain `extends Theme` re-declaration of `components` trips TS2430 on
// variance. The previous ambient version avoided this only by being circular
// (`ExtraTheme extends Theme` while the augmentation made `Theme extends
// ExtraTheme`), which TypeScript resolved to an error type — the reason it went
// unnoticed is that `skipLibCheck` never checked the file.
export interface ExtendedTheme extends Omit<Theme, "components" | "palette"> {
  components: ComponentOverrides;
  palette: ExtendedPalette;
}
