import { addons } from "@storybook/manager-api";
import { ThemeVars, create } from "@storybook/theming";

const theme: ThemeVars = create({
  base: "dark",
  brandTitle: "Telicent Storybook",
  brandUrl: "https://www.telicent.io/",
  fontBase: "Figtree, sans-serif",
  appBg: "#1D1D1D",
  appContentBg: "#1D1D1D",
});

addons.setConfig(theme);
