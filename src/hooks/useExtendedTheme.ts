import { useTheme } from "@mui/material/styles";
import React from "react";

import { type ExtendedTheme } from "../theme/extended-theme";

// useExtendedTheme should now generally be used everywhere in place of useTheme.
const useExtendedTheme = () => useTheme<ExtendedTheme>();

export default useExtendedTheme;
