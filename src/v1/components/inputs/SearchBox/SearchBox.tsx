import React from "react";
import Box from "@mui/material/Box";
import InputBase, { InputBaseProps } from "@mui/material/InputBase";
import PrimaryButton from "../../buttons/Button/PrimaryButton";
import { SearchIcon } from "../../data-display";

export interface SearchBoxProps<Value = string> extends React.ComponentProps<typeof InputBase>{
  /**
   * If true, the input element is focused during the first mount.
   */
  autoFocus?: boolean;
  /**
   * 	Pass a ref to the input element.
   */
  inputRef?: React.ForwardedRef<HTMLInputElement> | React.RefObject<HTMLInputElement>;
  /**
   * Callback fired when the input looses focus (i.e. blurred).
   * Notice that the first argument (event) might be undefined.
   * @param event
   * @returns void
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Callback fired when the value is changed.
   * @param event The event source of the callback. You can pull out the new value by accessing event.target.value (string).
   * @returns void
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Callback fired when the search button is clicked.
   * @param event
   * @returns
   */
  onSearch?: (event: React.MouseEvent<HTMLFormElement>) => void;
  /**
   * Name attribute of the input element.
   */
  name?: InputBaseProps["name"];
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder?: InputBaseProps["placeholder"];
  /**
   * The value of the input element, required for a controlled component.
   */
  value?: Value;
  width?: number;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  autoFocus = false,
  placeholder = "Search",
  inputRef,
  name,
  value,
  onBlur,
  onChange,
  onSearch,
  disabled,
  width = 600,
  ...rest
}) => (
  <Box
    height={44}
    width={width}
    display="flex"
    alignItems="center"
    component="form"
    onSubmit={onSearch}
  >
    <InputBase
      data-test-handle="search-box-input"
      type="search"
      sx={{
        height: "100%",
        width: "100%",
        borderWidth: 1,
        borderRightWidth: 0,
        borderColor: "#6D6D6D",
        borderStyle: "solid",
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
      }}
      inputProps={{ sx: { paddingInline: 1.5 } }}
      ref={inputRef}
      autoFocus={autoFocus}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      name={name}
      disabled={disabled}
      {...rest}
    />
    <PrimaryButton
      data-test-handle="search-box-button"
      aria-label="search"
      type="submit"
      disabled={disabled}
      sx={{
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        height: "100%",
      }}
      disableElevation
    >
      <SearchIcon size="xl" />
    </PrimaryButton>
  </Box>
);

export default SearchBox;