import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export type TextProps = Partial<{
  /**
   * Set the text-align on the component.
   */
  align: TypographyProps["align"];
  /**
   * The content of the component.
   */
  children: TypographyProps["children"];
  /** Text color */
  color: "primary";
  /**
   * The component used for the root node.
   */
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  /**
   * If true, the text will not wrap, but instead will truncate
      with a text overflow ellipsis.Note that text overflow can only happen with
      block or inline-block level elements (the element needs to have a width in
      order to overflow).
   */
  noWrap: boolean;
  /**
   * If true, the element will be a paragraph element.
   */
  paragraph: boolean;
  /**
   * The type of text style to use.
   */
  variant: TypographyProps["variant"];
}>;

const Text: React.FC<TextProps> = (textProps) => <Typography {...textProps} />;

export default Text;
