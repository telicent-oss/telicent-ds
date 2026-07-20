import { Theme } from "@mui/material/styles";
import createTheme from "../../createTheme";
import generateButtonOverrides from "./button-overrides";

type StyleFn = (arg: { theme: Theme }) => Record<string, unknown>;

// MUI types each styleOverrides slot as a union of a style object or a callback.
// We author them as callbacks, so cast through unknown to invoke them directly.
const styleOverridesFor = (uiTheme: Parameters<typeof createTheme>[0], dark: boolean) => {
  const theme = createTheme(uiTheme, dark);
  const styles = generateButtonOverrides(uiTheme).MuiButton.styleOverrides as unknown as Record<
    string,
    StyleFn
  >;
  return { theme, styles };
};

describe("generateButtonOverrides", () => {
  test("outlined primary border follows the primary token", () => {
    const { theme, styles } = styleOverridesFor("GeoGreen", true);
    expect(styles.outlinedPrimary({ theme })).toEqual({
      border: "1px solid #9DDD31",
    });
  });

  test("root and outlinedInherit apply spacing and elevation", () => {
    const { theme, styles } = styleOverridesFor("GeoGreen", true);
    expect(styles.root({ theme })).toEqual({ paddingInline: "16px" });
    const inherit = styles.outlinedInherit({ theme });
    expect(inherit.border).toBe("1px solid #CFD8DC");
    expect(typeof inherit.boxShadow).toBe("string");
  });
});
