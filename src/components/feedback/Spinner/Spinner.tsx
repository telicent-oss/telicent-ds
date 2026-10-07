import React, { type FC } from "react";
import { CircularProgress, CircularProgressProps } from "@mui/material";

const Spinner: FC<CircularProgressProps> = (props) => {
  return <CircularProgress aria-label="Loading" {...props} />;
};

export default Spinner;
