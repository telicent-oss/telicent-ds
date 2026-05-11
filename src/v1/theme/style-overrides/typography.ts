import { ThemeOptions } from "@mui/material";
import { TYPOGRAPHY_TOKENS } from "../../tokens";
import SpaceGroteskRegularWoff2 from "../../../assets/fonts/space-grotesk/space-grotesk-regular.woff2";
import SpaceGroteskMediumWoff2 from "../../../assets/fonts/space-grotesk/space-grotesk-medium.woff2";
import FigtreeRegularWoff2 from "../../../assets/fonts/figtree/figtree-regular.woff2";
import FigtreeMediumWoff2 from "../../../assets/fonts/figtree/figtree-medium.woff2";
import FigtreeBoldWoff2 from "../../../assets/fonts/figtree/figtree-bold.woff2";

const fonts = {
  heading: "Space Grotesk, Helvetica, Arial, sans-serif",
  body: "Figtree, Helvetica, Arial, sans-serif",
};

const TYPOGRAPHY_STYLE_OVERRIDES = {
  fontFamily: fonts.body,
  h1: TYPOGRAPHY_TOKENS.h1,
  h2: TYPOGRAPHY_TOKENS.h2,
  h3: TYPOGRAPHY_TOKENS.h3,
  h4: {
    fontFamily: fonts.heading,
    fontWeight: 500,
    fontSize: "2rem",
  },
  h5: {
    fontFamily: fonts.heading,
  },
  h6: {
    fontFamily: fonts.heading,
  },
  button: {
    textTransform: "none",
  },
  body1: TYPOGRAPHY_TOKENS.body1,
  body2: TYPOGRAPHY_TOKENS.body2,
  subtitle1: TYPOGRAPHY_TOKENS.subtitle1,
} satisfies ThemeOptions["typography"];

export const FONT_FACES_CSS = `
    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: url(${SpaceGroteskRegularWoff2}) format('woff2');
    }

    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src:  url(${SpaceGroteskMediumWoff2}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: url(${FigtreeRegularWoff2}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src: url(${FigtreeMediumWoff2}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 700;
      src: url(${FigtreeBoldWoff2}) format('woff2');
    }
    `;

export default TYPOGRAPHY_STYLE_OVERRIDES;
