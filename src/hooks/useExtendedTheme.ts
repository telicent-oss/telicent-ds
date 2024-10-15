import React from "react";
import { useTheme } from "@mui/material/styles";

import { type ExtendedTheme } from "../v1/theme/theme-type";

// useExtendedTheme should now generally be used everywhere in place of useTheme.
const useExtendedTheme = () => useTheme<ExtendedTheme>();

export default useExtendedTheme;
