import React, { forwardRef } from 'react';
import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';

export type PaperProps = MuiPaperProps & {
  /**
   * Inner padding, in theme spacing units. `padding={1}` is 8px.
   *
   * PROPOSAL — the shape is the open question, not whether it should exist.
   * It forwards to `sx.p` and is applied first, so a caller's own `sx` still
   * wins and no existing call site changes behaviour.
   *
   * Worth considering instead: named sizes (`"sm" | "md" | "lg"`) rather than
   * raw spacing units, so the estate converges on a few values instead of
   * every caller picking its own. Today's spread argues for that — see the PR
   * description.
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
