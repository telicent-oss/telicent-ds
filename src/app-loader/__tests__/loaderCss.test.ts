import { UIThemeSchema } from "../../theme/colors/theme-colors";
import { buildLoaderCss } from "../loaderCss";

describe("buildLoaderCss", () => {
  it("takes GraphOrange's colours from the DS palette in both modes", () => {
    const css = buildLoaderCss("GraphOrange");
    // dark: background.default, text.primary, primary.main
    expect(css).toContain("#1D1D1D");
    expect(css).toContain("#ececec");
    expect(css).toContain("#F2A64B");
    // light
    expect(css).toContain("#F0F2F5");
    expect(css).toContain("#1A1D21");
    expect(css).toContain("#C24D00");
  });

  it.each(UIThemeSchema.options)("builds for %s", (theme) => {
    expect(() => buildLoaderCss(theme)).not.toThrow();
  });

  it("fades the overlay out on body.app-ready", () => {
    expect(buildLoaderCss("DocumentPink")).toContain("body.app-ready #initial-overlay { opacity: 0;");
  });
});
