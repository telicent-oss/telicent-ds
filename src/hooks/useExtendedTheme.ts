import React from "react";
import { useTheme } from "@mui/material/styles";

import { type ExtendedTheme } from "../v1/theme/theme-type";

const useExtendedTheme = () => useTheme<ExtendedTheme>();

export default useExtendedTheme;
