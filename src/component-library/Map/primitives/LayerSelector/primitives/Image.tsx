import React from "react";
import { Box } from "@mui/material";
// ignore story-coverage.test.ts

interface ImageProps {
  borderColor: string;
  src: string;
  alt: string;
  title: string;
}

export const Image: React.FC<ImageProps> = ({
  borderColor,
  src,
  alt,
  title,
}) => (
  <Box
    sx={{
      border: `2px solid ${borderColor}`,
      borderRadius: "3px",
      overflow: "hidden",
      // Copied from MUI SVGs
      display: "inline-block",
      height: "1em",
      fontSize: "1.5rem",
    }}
    mr={1}
  >
    <img
      src={src}
      alt={alt}
      title={title}
      style={{
        width: 25,
        height: 20,
      }}
    />
  </Box>
);
