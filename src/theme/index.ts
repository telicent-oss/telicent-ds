import { UITheme, UIThemeSchema } from "./colors/theme-colors";
export type { UITheme };
export { UIThemeSchema };

export { default as UIThemeProvider } from "./UIThemeProvider";

export { alpha } from "@mui/material/styles";

// MUI type re-exports so apps that compose their own `sx` blocks, or narrow
// theme-typed props in local components, can pull them from `@telicent-oss/ds`
// instead of `@mui/material` directly.
export type { SxProps, Theme } from "@mui/material";
