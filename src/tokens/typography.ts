/**
 * Typography tokens - framework agnostic design tokens
 * These define our typography contract, independent of MUI or any framework
 */

import { TypographyOptions } from "@mui/material/styles/createTypography";

export const TYPOGRAPHY_TOKENS = {
  h1: {
    fontFamily: '"Space Grotesk"',
    fontSize: "32px",
    fontStyle: "normal" as const,
    fontWeight: 500,
    lineHeight: "110%",
    letterSpacing: "0.1px",
  },
  h2: {
    fontFamily: '"Space Grotesk"',
    fontSize: "24px",
    fontStyle: "normal" as const,
    fontWeight: 500,
    lineHeight: "120%",
    letterSpacing: 0,
  },
  h3: {
    fontFamily: '"Space Grotesk"',
    fontSize: "20px",
    fontStyle: "normal" as const,
    fontWeight: 500,
    lineHeight: "116%",
    letterSpacing: 0,
  },
  body1: {
    fontFamily: "Figtree",
    fontSize: "16px",
    fontStyle: "normal" as const,
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "0.16px",
  },
  body2: {
    fontFamily: "Figtree",
    fontSize: "14px",
    fontStyle: "normal" as const,
    fontWeight: 400,
    lineHeight: "143%",
    letterSpacing: "0.17px",
  },
  subtitle1: {
    fontFamily: "Figtree",
    fontSize: "16px",
    fontStyle: "normal" as const,
    fontWeight: 700,
    lineHeight: "130%",
    letterSpacing: "0.15px",
  },
} as const;

export type TypographyVariant = keyof typeof TYPOGRAPHY_TOKENS;

/**
 * MUI Typography overrides derived from design tokens
 * Use this in your theme configuration
 */
export const MUI_TYPOGRAPHY_OVERRIDES: TypographyOptions = {
  fontFamily: '"Figtree", sans-serif',
  h1: TYPOGRAPHY_TOKENS.h1,
  h2: TYPOGRAPHY_TOKENS.h2,
  h3: TYPOGRAPHY_TOKENS.h3,
  body1: TYPOGRAPHY_TOKENS.body1,
  body2: TYPOGRAPHY_TOKENS.body2,
  subtitle1: TYPOGRAPHY_TOKENS.subtitle1,
};
