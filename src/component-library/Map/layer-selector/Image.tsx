import React from 'react';
import { Box } from '@mui/material';

interface ImageProps {
  borderColor: string;
  src: string;
  alt: string;
  title: string;
}

export const Image: React.FC<ImageProps> = ({ borderColor, src, alt, title }) => (
  <Box
    sx={{
      border: `2px solid ${borderColor}`,
      display: 'inline-block',
      borderRadius: '3px',
      overflow: 'hidden',
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
