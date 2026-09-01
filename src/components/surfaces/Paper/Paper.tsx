import React, { forwardRef } from 'react';
import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';

export type PaperProps = MuiPaperProps & {
  /**
   * PROPOSAL. Optional inner padding, in theme spacing units (`padding={1}`
   * is 8px). Undefined by default, so omitting it changes nothing. See the
   * PR description for whether this should exist at all, and whether raw
   * spacing units or named sizes are the right shape.
   */
  padding?: number;
};

export const Paper = forwardRef<HTMLDivElement, PaperProps>(function Paper(
  { padding, sx, ...props },
  ref
) {
  return (
    <MuiPaper
      ref={ref}
      // Array form, so a caller passing an sx array or callback still composes.
      sx={
        padding === undefined
          ? sx
          : [{ p: padding }, ...(Array.isArray(sx) ? sx : [sx])]
      }
      {...props}
    />
  );
});

export default Paper;
