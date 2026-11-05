import { CircularProgress, CircularProgressProps } from "@mui/material";
import React, { type FC } from "react";

const Spinner: FC<CircularProgressProps> = (props) => {
  return <CircularProgress aria-label="Loading" {...props} />;
};

export default Spinner;
