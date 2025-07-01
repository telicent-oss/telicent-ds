import { FormControl, InputLabel, Select as MUISelect, SelectChangeEvent, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useExtendedTheme } from "../../../../export";

export interface SelectProps {
  label?: string;
  value: string;
  id: string;
  options: Options[];
  width?: number;
  onChange?: (event: SelectChangeEvent) => void;
  disabled?: boolean;
}

export interface Options {
  value: string;
  label: string;
}

const Select: React.FC<SelectProps> = ({ label, value, id, options, width, onChange, disabled = false }) => {
  const theme = useExtendedTheme();

  return (
    <FormControl className="select-dropdown" sx={{ minWidth: 88, width }} size="small">
      <InputLabel
        id={id}
        sx={{
          color: "#fff",
          "&.Mui-focused": {
            color: "#fff",
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
            borderColor: "white",
          },
          "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6D6D6D",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
          "&.Mui-selected": {
            backgroundColor: "#2A2A2A",
            color: "#fff",
          },
          ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
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
