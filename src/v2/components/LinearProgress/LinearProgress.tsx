import React from 'react';
import LinearProgressRaw, { LinearProgressProps } from '@mui/material/LinearProgress';

type LinearProgressPropsNew = LinearProgressProps & {
  isActive: boolean;
  transition?: number; // Transition time in milliseconds
}

export const LinearProgress: React.FC<LinearProgressPropsNew> = ({
  isActive,
  transition = 500,
  ...linearProgressProps
}) => {
  return (
    <LinearProgressRaw
      {...linearProgressProps}
      style={{
        opacity: isActive ? 1 : 0,
        transition: `opacity ${transition}ms ease-in-out`,
        visibility: isActive ? 'visible' : 'hidden',
        height: '4px', // default height for MUI LinearProgressRaw
      }}
    />
  );
};

export default LinearProgress;
