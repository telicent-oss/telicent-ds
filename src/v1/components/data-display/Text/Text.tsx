import React, { ReactNode } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export type BaseProps = Partial<{
  /** Set the text-align on the component. */
  align: TypographyProps["align"];
  /** The content of the component. */
  children: ReactNode;
  /** Text color */
  color: "primary";
  /** If true, the text will not wrap, but instead will truncate
    with a text overflow ellipsis.Note that text overflow can only happen with
    block or inline-block level elements (the element needs to have a width in
    order to overflow).
   */
  noWrap: boolean;
}>;

export type HeadingProps = BaseProps &
  Partial<{
    /**
     * The type of text style to use.
     */
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }>;

export type TextProps = BaseProps &
  Partial<{
    /**
     * If true, the element will be a paragraph element.
     */
    paragraph: boolean;
    /**
     * The type of text style to use.
     */
    variant: "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "caption";
  }>;

const Text: React.FC<TextProps> = ({ variant = "body1", ...textProps }) => (
  <Typography variant={variant} {...textProps} />
);

const H1: React.FC<HeadingProps> = ({ variant = "h1", ...headingProps }) => (
  <Typography component="h1" variant={variant} {...headingProps} />
);

const H2: React.FC<HeadingProps> = ({ variant = "h2", ...headingProps }) => (
  <Typography component="h2" variant={variant} {...headingProps} />
);

const H3: React.FC<HeadingProps> = ({ variant = "h3", ...headingProps }) => (
  <Typography component="h3" variant={variant} {...headingProps} />
);

const H4: React.FC<HeadingProps> = ({ variant = "h4", ...headingProps }) => (
  <Typography component="h4" variant={variant} {...headingProps} />
);

const H5: React.FC<HeadingProps> = ({ variant = "h5", ...headingProps }) => (
  <Typography component="h5" variant={variant} {...headingProps} />
);

const H6: React.FC<HeadingProps> = ({ variant = "h6", ...headingProps }) => (
  <Typography component="h6" variant={variant} {...headingProps} />
);

export default Text;
export { H1, H2, H3, H4, H5, H6, Text };
