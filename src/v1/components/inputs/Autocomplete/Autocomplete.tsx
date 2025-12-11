import { Autocomplete as MuiAutocomplete } from "@mui/material";
import { forwardRef } from "react";
import TextField from "../TextField/TextField";

type Option = { label: string; value: string };

type AutoCompleteProps = {
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
  required?: boolean;
};

const Autocomplete = forwardRef<HTMLDivElement, AutoCompleteProps>(
  (
    { label, value, onChange, options, placeholder, disabled, error, helperText, fullWidth = true, size = "small", required = false },
    ref
  ) => {
    const selected = options.find((option) => option.value === value) ?? null;

    return (
      <MuiAutocomplete
        ref={ref}
        options={options}
        value={selected}
        onChange={(_, option) => onChange(option ? option.value : null)}
        fullWidth={fullWidth}
        size={size}
        disabled={disabled}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            size={size}
            required={required}
          />
        )}
      />
    );
  }
);

export default Autocomplete;
