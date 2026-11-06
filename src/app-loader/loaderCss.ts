import createDarkPalette from "../theme/colors/palette/createDarkPalette";
import createLightPalette from "../theme/colors/palette/createLightPalette";
import type { UITheme } from "../theme/colors/theme-colors";
import { APP_READY_CLASS, LOGO_ID, OVERLAY_ID } from "./loaderMarkup";

type ModeColours = { background: string; text: string; logo: string };
type LoaderColours = { dark: ModeColours; light: ModeColours };

// System fonts only: Figtree loads over the network and its late swap made
// the loading text twitch.
const FONT_STACK = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const requireToken = (value: unknown, token: string, uiTheme: UITheme): string => {
  if (typeof value !== "string") throw new Error(`app-loader: ${uiTheme} has no ${token}`);
  return value;
};

const resolveMode = (uiTheme: UITheme, dark: boolean): ModeColours => {
  const palette = dark ? createDarkPalette(uiTheme) : createLightPalette(uiTheme);
  const primary = palette?.primary;
  return {
    background: requireToken(palette?.background?.default, "background.default", uiTheme),
    text: requireToken(palette?.text?.primary, "text.primary", uiTheme),
    logo: requireToken(primary && "main" in primary ? primary.main : undefined, "primary.main", uiTheme),
  };
};

const resolveColours = (uiTheme: UITheme): LoaderColours => ({
  dark: resolveMode(uiTheme, true),
  light: resolveMode(uiTheme, false),
});

// line1 → line3 → line2 fade in, hold, then all fade out. The negative
// --logo-animation-delay (set by the head script) resumes the cycle after a
// full-page navigation instead of restarting it.
const LOGO_ANIMATION_CSS = `
#${LOGO_ID} path {
  fill-opacity: 0;
  animation: 3.6s ease-in-out infinite;
  animation-delay: var(--logo-animation-delay, 0s);
}
#${LOGO_ID} .line1 { animation-name: initial-overlay-fade-1; }
#${LOGO_ID} .line2 { animation-name: initial-overlay-fade-2; }
#${LOGO_ID} .line3 { animation-name: initial-overlay-fade-3; }
@keyframes initial-overlay-fade-1 {
  0% { fill-opacity: 0; } 20% { fill-opacity: 1; } 77% { fill-opacity: 1; } 100% { fill-opacity: 0; }
}
@keyframes initial-overlay-fade-3 {
  0% { fill-opacity: 0; } 20% { fill-opacity: 0; } 40% { fill-opacity: 1; } 77% { fill-opacity: 1; } 100% { fill-opacity: 0; }
}
@keyframes initial-overlay-fade-2 {
  0% { fill-opacity: 0; } 40% { fill-opacity: 0; } 60% { fill-opacity: 1; } 77% { fill-opacity: 1; } 100% { fill-opacity: 0; }
}`;

// Painted before any bundled CSS, so a full-page navigation (e.g.
// /callback → /) never flashes the browser's white default.
const pageCss = ({ dark, light }: LoaderColours): string => `
html, body { background-color: ${dark.background}; margin: 0; }
body { padding: 0; }
html[data-theme="light"], html[data-theme="light"] body { background-color: ${light.background}; }`;

const overlayCss = ({ dark, light }: LoaderColours): string => `
#${OVERLAY_ID} {
  /* 100vw/100vh, not inset: 0. inset shrinks when a scrollbar gutter appears and the logo shifts. */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* px so a later html font-size rule can't move the text. */
  gap: 16px;
  background-color: ${dark.background};
  color: ${dark.text};
  font-family: ${FONT_STACK};
  transition: opacity 400ms ease;
}
/* !important: CssBaseline's body/p rules load later and win on equal specificity. */
#${OVERLAY_ID} p {
  margin: 0 !important;
  font-family: ${FONT_STACK} !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}
body.${APP_READY_CLASS} #${OVERLAY_ID} { opacity: 0; pointer-events: none; }
#${LOGO_ID} { color: ${dark.logo}; }
[data-theme="light"] #${OVERLAY_ID} { background-color: ${light.background}; color: ${light.text}; }
[data-theme="light"] #${LOGO_ID} { color: ${light.logo}; }
${LOGO_ANIMATION_CSS}`;

export const buildLoaderCss = (uiTheme: UITheme): string => {
  const colours = resolveColours(uiTheme);
  return pageCss(colours) + overlayCss(colours);
};
