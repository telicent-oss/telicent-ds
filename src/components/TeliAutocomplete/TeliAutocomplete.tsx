import React from "react";
import {
  Autocomplete,
  AutocompleteProps,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import TeliChip from "../TeliChip/TeliChip";
import TeliSpinner from "../TeliSpinner/TeliSpinner";
import { TeliCloseIcon, TeliSearchIcon } from "../TeliIcons";

import "./TeliAutocomplete.css";

export interface TeliAutocompleteProps<
  Value,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
> extends Omit<
    AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
    | "renderInput"
    | "ChipProps"
    | "clearIcon"
    | "classes"
    | "clearText"
    | "closeText"
    | "componentsProps"
    | "ListboxProps"
    | "ListboxComponent"
    | "openText"
    | "PaperComponent"
    | "PopperComponent"
    | "popupIcon"
    | "size"
    | "slotProps"
    | "sx"
  > {
  /** If true, the component will be rendered in an error state */
  error?: boolean;
  /** Used to determine the icon elment of a given option */
  getChipIcon?: (option: Value) => any;
  /** The label content. */
  helperText?: string;
  /** The label content. */
  label?: string | React.ReactNode;
  /** Maximum height of the menu component */
  maxHeight?: number;
  /** The autocomplete mode with predefined defaults */
  mode?: "search";
  placeholder?: string;
  /** Element placed before the input element */
  startAdornment?: React.ReactNode;
  /** Width of the component. */
  width?: number;
}

function TeliAutocomplete<
  Value,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
>({
  error,
  fullWidth,
  helperText,
  label,
  loading,
  maxHeight,
  mode,
  placeholder,
  startAdornment,
  width,
  getChipIcon = (option: any) => option?.icon,
  getOptionLabel = (option: Value | any) => option?.label ?? option,
  ...other
}: TeliAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>) {
  const getModeProps = (propType: "base" | "InputProps") => {
    if (mode === "search") {
      if (propType === "base") {
        return {
          openOnFocus: true,
          autoComplete: true,
          autoHighlight: true,
        };
      }

      if (propType === "InputProps") {
        return {
          InputProps: {
            type: "search",
            startAdornment: <TeliSearchIcon size="sm" />,
          },
        };
      }
    }
  };

  return (
    <FormControl error={error} sx={{ width }} fullWidth={fullWidth}>
      <Autocomplete
        disablePortal
        clearIcon={<TeliCloseIcon />}
        popupIcon={<FontAwesomeIcon icon={faAngleDown} />}
        size="small"
        className="error"
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            placeholder={placeholder}
            error={error}
            InputProps={{
              ...params.InputProps,
              ...getModeProps("InputProps")?.InputProps,
              startAdornment: (
                <>
                  {startAdornment ??
                    getModeProps("InputProps")?.InputProps?.startAdornment}
                  {params.InputProps.startAdornment}
                </>
              ),
              endAdornment: (
                <>
                  {loading ? <TeliSpinner color="inherit" size={14} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <TeliChip
              variant="tertiary"
              size="small"
              icon={getChipIcon(option)}
              label={getOptionLabel(option)}
              {...getTagProps({ index })}
            />
          ))
        }
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, 8],
                },
              },
            ],
          },
        }}
        ListboxProps={{ sx: { maxHeight } }}
        {...getModeProps("base")}
        {...other}
      />
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
}

export default TeliAutocomplete;
