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
  test("GeoGreen light contained button uses the bright fill with black text", () => {
    const { theme, styles } = styleOverridesFor("GeoGreen", false);
    expect(styles.containedPrimary({ theme })).toEqual({
      backgroundColor: "#9DDD31",
      color: "#000",
      "&:hover": { backgroundColor: "rgb(138, 194, 43)" },
    });
  });

  test("GeoGreen dark contained button has no override", () => {
    const { theme, styles } = styleOverridesFor("GeoGreen", true);
    expect(styles.containedPrimary({ theme })).toEqual({});
  });

  test("other themes have no contained override in light mode", () => {
    const { theme, styles } = styleOverridesFor("DataNavy", false);
    expect(styles.containedPrimary({ theme })).toEqual({});
  });

  test("outlined primary border follows the primary token", () => {
    const { theme, styles } = styleOverridesFor("GeoGreen", false);
    expect(styles.outlinedPrimary({ theme })).toEqual({
      border: "1px solid #3E5B0B",
    });
  });

  test("root and outlinedInherit apply spacing and elevation", () => {
    const { theme, styles } = styleOverridesFor("GeoGreen", false);
    expect(styles.root({ theme })).toEqual({ paddingInline: "16px" });
    const inherit = styles.outlinedInherit({ theme });
    expect(inherit.border).toBe("1px solid #CFD8DC");
    expect(typeof inherit.boxShadow).toBe("string");
  });
});
