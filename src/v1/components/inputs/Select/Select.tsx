import { FormControl, InputLabel, Select as MUISelect, MenuItem, SelectProps as MuiSelectProps } from "@mui/material";
import React from "react";
import { useExtendedTheme } from "../../../../export";

export interface Options {
  value: string;
  label: string;
}

export type SelectProps = MuiSelectProps & { options: Options[]; width?: number };

const Select: React.FC<SelectProps> = ({
  label,
  value,
  id,
  options,
  width,
  onChange,
  disabled = false,
  sx,
  ...rest
}) => {
  const theme = useExtendedTheme();

  return (
    <FormControl sx={{ minWidth: 88, width }} size="small">
      {label && (
        <InputLabel
          id={id}
          sx={
            {
              // color: "theme.palette.text.primary,"
              // "&.Mui-focused": {
              //   color: theme.palette.primary.main,
              // },
            }
          }
        >
          {label}
        </InputLabel>
      )}

      <MUISelect
        {...rest}
        color="primary"
        variant="outlined"
        labelId={id}
        label={label}
        id={id}
        value={value}
        disabled={disabled}
        onChange={onChange}
        size="small"
        // MenuProps={{
        //   PaperProps: {
        //     sx: {
        //       backgroundColor: theme.palette.mode === "dark" ? "#2A2A2A" : "#ffffff",
        //       color: theme.palette.primary.contrastText,
        //     },
        //   },
        // }}
        // sx={{
        //   color: "#ffffff",
        //   backgroundColor: theme.palette.mode === "dark" ? "#2A2A2A" : "#ffffff",
        //   ".MuiSelect-icon": {
        //     color: "#6D6D6D",
        //   },
        //   ".MuiOutlinedInput-notchedOutline": {
        //     borderColor: "#6D6D6D",
        //   },
        //   "&:hover .MuiOutlinedInput-notchedOutline": {
        //     borderColor: theme.palette.primary.main,
        //   },
        //   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        //     borderColor: theme.palette.primary.main,
        //     borderWidth: "2px !important",
        //   },
        //   "&.Mui-selected": {
        //     backgroundColor: theme.palette.mode === "dark" ? "#2A2A2A" : "#ffffff",
        //     color: "#fff",
        //   },
        //   ...sx,
        // }}
      >
        {options.map((option) => (
          <MenuItem color="primary" key={option?.value} value={option.value} disableRipple>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
