import React from "react";
import { StyledEngineProvider } from "@mui/material";

type TeliStyledEngineProviderProps = {
  children?: React.ReactNode;
};

const TeliStyledEngineProvider: React.FC<TeliStyledEngineProviderProps> = ({
  children,
}) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};

export default TeliStyledEngineProvider;
