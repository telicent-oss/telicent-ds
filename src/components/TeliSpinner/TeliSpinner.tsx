import React, { type FC } from "react";
import { CircularProgress, CircularProgressProps } from "@mui/material";

/**
 * @deprecated TeliSpinner is deprecated and will be removed in a future release.
 */
const TeliSpinner: FC<CircularProgressProps> = (props) => {
  console.warn("TeliSpinner is deprecated and will be removed in a future release.");
  return <CircularProgress {...props} />;
};

export default TeliSpinner;
