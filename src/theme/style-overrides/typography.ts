import { ThemeOptions } from "@mui/material";

const fonts = {
  heading: "Space Grotesk, Helvetica, Arial, sans-serif",
  body: "Figtree, Helvetica, Arial, sans-serif",
};

const TYPOGRAPHY_STYLE_OVERRIDES: ThemeOptions["typography"] = {
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
};

export default TYPOGRAPHY_STYLE_OVERRIDES;
