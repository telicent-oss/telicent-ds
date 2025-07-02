import { FormControl, InputLabel, Select as MUISelect, MenuItem, SelectProps as MuiSelectProps } from "@mui/material";
import React from "react";
import { useExtendedTheme } from "../../../../export";

export interface Options {
  value: string;
  label: string;
}

type SelectProps = MuiSelectProps & { options: Options[]; width?: number };

const Select: React.FC<SelectProps> = ({ label, value, id, options, width, onChange, disabled = false, sx }) => {
  const theme = useExtendedTheme();

  return (
    <FormControl className="select-dropdown" sx={{ minWidth: 88, width }} size="small">
      <InputLabel
        id={id}
        sx={{
          color: "#fff",
          "&.Mui-focused": {
            color: theme.palette.primary.main,
          },
        }}
      >
        {label}
      </InputLabel>
      <MUISelect
        labelId={id}
        label={label}
        id={id}
        value={value}
        disabled={disabled}
        onChange={onChange}
        size="small"
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "#2A2A2A",
              color: "white",
            },
          },
        }}
        sx={{
          color: "#ffffff",
          backgroundColor: theme.palette.mode === "dark" ? "#2A2A2A" : "#ffffff",
          ".MuiSelect-icon": {
            color: "#6D6D6D",
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#6D6D6D", // Default border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main, // Hover state
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main, // Focus state
            borderWidth: "2px !important", // Thicker border on focus
          },
          "&.Mui-selected": {
            backgroundColor: "#2A2A2A", // Selected state
            color: "#fff",
          },
          ...sx,
        }}
      >
        {options.map((option) => (
          <MenuItem key={option?.value} value={option.value} disableRipple>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
