import React, { type FC } from "react";
import { InputAdornment, TextField } from "@mui/material";
import TeliTextFieldProps from "./TeliTextFieldProps";

import "./textfield.css";

/**
 * Text Fields let users enter and edit text. They typically appear in forms and dialogs.
 * More information about this component can be used can be found [here](https://mui.com/material-ui/react-text-field/)
 */
const TeliTextField: FC<TeliTextFieldProps> = ({
  ariaLabel,
  endAdornment,
  readOnly,
  pointerEvents,
  startAdornment,
  ...otherProps
}) => (
  <TextField
    variant="outlined"
    size="small"
    maxRows={4}
    InputProps={{
      readOnly,
      startAdornment: (
        <InputAdornment position="start">{startAdornment}</InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">{endAdornment}</InputAdornment>
      ),
    }}
    InputLabelProps={{
      shrink: pointerEvents,
    }}
    inputProps={{
      "aria-label": ariaLabel,
    }}
    {...otherProps}
  />
);

export default TeliTextField;
