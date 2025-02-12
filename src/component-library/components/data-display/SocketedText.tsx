import React from "react";
import { Typography, TypographyProps, Box, SxProps } from "@mui/material";

export interface SocketedTextProps extends Omit<TypographyProps, "component"> {
  beforeItem?: React.ReactNode;
  afterItem?: React.ReactNode;
  beforeItemSX?: SxProps;
  afterItemSX?: SxProps;
  href?: string;
  containerSX?: SxProps;
  component?: React.ElementType;
  propCheckError?: (problem: string) => void;
}

export const propCheckErrorDefault = (problem: string) => {
  if (process.env.NODE_ENV === "production") {
    console.warn(problem);
  } else {
    throw new Error(problem);
  }
};

/**
 * The intended use of SocketedText to render text with a trailing, or leading icon.

 * This component mimic's MUI’s Typography by default, except it has beforeItem or afterItem sockets.
 * 
 * The text and icons are wrapped in an inline‑flex container with sensible defaults.
 * 
 * All Typography props are forwarded, so this component behaves like any other Typography element.
 * 
 * **Nomenclature**: The word "Socketed" is used in the [Diablo2](https://gamefaqs.gamespot.com/pc/370600-diablo-ii-lord-of-destruction/faqs/8382) sense:
 *
 * > Socketed items are exactly the same as normal items, but with sockets in them.
 * > This allows you to insert gems or skulls in order to add magical properties to your items.
 * 
 * <sup>This may be a terrible name</sup>
 *
 */
export const SocketedText: React.FC<SocketedTextProps> = ({
  children,
  beforeItem,
  afterItem,
  beforeItemSX,
  afterItemSX,
  component = "span",
  href,
  containerSX,
  propCheckError = propCheckErrorDefault,
  ...rest
}) => {
  if (component === "a" && !href) {
    propCheckError(
      'SocketedText: When using component="a", the "href" prop is required.'
    );
  }
  if (beforeItem === undefined && afterItem === undefined) {
    propCheckError(
      "SocketedText: Sockets unused; use normal Text/Typography component instead"
    );
  }

  return (
    <Typography component={component} href={href} {...rest}>
      <Box
        component="span"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          ...containerSX,
        }}
      >
        {beforeItem && (
          <Box component="span" sx={beforeItemSX}>
            {beforeItem}
          </Box>
        )}
        <Box component="span">{children}</Box>
        {afterItem && (
          <Box component="span" sx={afterItemSX}>
            {afterItem}
          </Box>
        )}
      </Box>
    </Typography>
  );
};
