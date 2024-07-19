import React from "react";
import {
  Autocomplete,
  AutocompleteProps,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";

import TeliSpinner from "../TeliSpinner/TeliSpinner";
import { TeliCloseIcon, TeliSearchIcon } from "../TeliIcons";
import "../TeliAutocomplete/TeliAutocomplete.css";

type DefaultOption = { label: string };
type MUIAutocompleteProps<Option> = AutocompleteProps<
  Option,
  false,
  false,
  true
>;

export type SearchAutocompleteProps<Option = DefaultOption> = {
  /**
   * Array of options.
   */
  options: MUIAutocompleteProps<Option>["options"];
} & Partial<{
  autoHighlight: MUIAutocompleteProps<Option>["autoHighlight"];
  /**
   * If true, the input element is focused during the first mount.
   */
  autoFocus: boolean;
  /**
   * 	If true, the component will indicate an error.
   */
  error: boolean;
  /**
   * If true, the component will take up the full width of its container.
   */
  fullWidth: boolean;
  /**
   * Can be used to give context. If ' ' is provided, the component reserves one
   * line height for displaying a future message.
   */
  helperText: string;
  id: MUIAutocompleteProps<Option>["id"];
  inputValue: MUIAutocompleteProps<Option>["inputValue"];
  /**
   * The label content
   */
  label: string;
  /**
   * The maximum height of the autocomplete list box
   */
  listboxMaxHeight: number;
  loading: MUIAutocompleteProps<Option>["loading"];
  loadingText: MUIAutocompleteProps<Option>["loadingText"];
  openOnFocus: MUIAutocompleteProps<Option>["openOnFocus"];
  /**
   * 	The short hint displayed in the input before the user enters a value.
   */
  placeholder: string;
  /**
   * The width of the component
   */
  width: number;
  name: string;
  getOptionLabel: MUIAutocompleteProps<Option>["getOptionLabel"];
  getOptionKey: MUIAutocompleteProps<Option>["getOptionKey"];
  isOptionEqualToValue: MUIAutocompleteProps<Option>["isOptionEqualToValue"];
  onChange: MUIAutocompleteProps<Option>["onChange"];
  onInputChange: MUIAutocompleteProps<Option>["onInputChange"];
}>;

const SearchAutocomplete = <Option,>({
  autoFocus = false,
  autoHighlight,
  error = false,
  fullWidth = false,
  getOptionKey,
  getOptionLabel,
  helperText,
  id,
  inputValue,
  isOptionEqualToValue,
  label,
  listboxMaxHeight,
  loading,
  loadingText,
  onChange,
  onInputChange,
  openOnFocus = false,
  options = [],
  placeholder = "Search ...",
  width,
  name,
}: SearchAutocompleteProps<Option>) => {
  return (
    <FormControl error={error} sx={{ width }} fullWidth={fullWidth}>
      <Autocomplete
        disablePortal
        autoComplete
        autoSelect
        freeSolo
        id={id}
        autoHighlight={autoHighlight}
        openOnFocus={openOnFocus}
        loadingText={loadingText}
        clearIcon={<TeliCloseIcon size="sm" />}
        className="error"
        size="small"
        loading={loading}
        options={options}
        inputValue={inputValue}
        getOptionLabel={getOptionLabel}
        getOptionKey={getOptionKey}
        onInputChange={onInputChange}
        onChange={onChange}
        isOptionEqualToValue={isOptionEqualToValue}
        renderInput={(params) => (
          <TextField
            {...params}
            name={`${name}--TextField`}
            autoFocus={autoFocus}
            variant="outlined"
            label={label}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              startAdornment: <TeliSearchIcon size="sm" className="pl-2" />,
              endAdornment: (
                <>
                  {loading ? <TeliSpinner color="inherit" size={14} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
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
        ListboxProps={{ sx: { maxHeight: listboxMaxHeight } }}
      />
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
};

export default SearchAutocomplete;
