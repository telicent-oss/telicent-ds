import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import React, { forwardRef } from 'react';

export const Paper = forwardRef<HTMLDivElement, MuiPaperProps>(function Paper(
  props,
  ref
) {
  return <MuiPaper ref={ref} {...props} />;
});

export default Paper;