import { ThemeOptions } from "@mui/material";
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
  h1: {
    fontFamily: fonts.heading,
  },
  h2: {
    fontFamily: fonts.heading,
  },
  h3: {
    fontFamily: fonts.heading,
  },
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
  body1: {
    fontWeight: 500,
  },
  subtitle1: {
    fontWeight: 700,
  },
} satisfies ThemeOptions["typography"];

const TYPOGRAPHY_FONT_FACES = {
  MuiCssBaseline: {
    styleOverrides: `
    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: local('Space Grotesk'), url(${SpaceGroteskRegularWoff2}) format('woff2');
    }

    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src: local('Space Grotesk'), url(${SpaceGroteskMediumWoff2}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: local('Figtree'), url(${FigtreeRegularWoff2}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src: local('Figtree'), url(${FigtreeMediumWoff2}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 700;
      src: local('Figtree'), url(${FigtreeBoldWoff2}) format('woff2');
    }
    `,
  },
} satisfies ThemeOptions["components"];

export default TYPOGRAPHY_STYLE_OVERRIDES;
export { TYPOGRAPHY_FONT_FACES };
