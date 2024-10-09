import React, { type FC } from "react";
import { CircularProgress, CircularProgressProps } from "@mui/material";

const TeliSpinner: FC<CircularProgressProps> = (props) => {
  return <CircularProgress {...props} />;
};

export default TeliSpinner;
