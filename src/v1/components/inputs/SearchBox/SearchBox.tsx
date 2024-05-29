import React from "react";
import Box from "@mui/material/Box";
import InputBase, { InputBaseProps } from "@mui/material/InputBase";

import PrimaryButton from "../Button/PrimaryButton";
import { SearchIcon } from "../../data-display";

export type SearchBoxProps<Value = string> = Partial<{
  /**
   * If true, the input element is focused during the first mount.
   */
  autoFocus: boolean;
  /**
   * 	Pass a ref to the input element.
   */
  inputRef: React.ForwardedRef<HTMLInputElement> | React.RefObject<HTMLInputElement>;
  /**
   * Callback fired when the input looses focus (i.e. blurred).
   * Notice that the first argument (event) might be undefined.
   * @param event
   * @returns void
   */
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Callback fired when the value is changed.
   * @param event The event source of the callback. You can pull out the new value by accessing event.target.value (string).
   * @returns void
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Callback fired when the search button is clicked.
   * @param event
   * @returns
   */
  onSearch: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Name attribute of the input element.
   */
  name: InputBaseProps["name"];
  /**
   * "he short hint displayed in the input before the user enters a value.
   */
  placeholder: InputBaseProps["placeholder"];
  /**
   * The value of the input element, required for a controlled component.
   */
  value: Value;
}>;

const SearchBox: React.FC<SearchBoxProps> = ({
  autoFocus = false,
  placeholder = "Search",
  inputRef,
  name,
  value,
  onBlur,
  onChange,
  onSearch,
}) => (
  <Box id="search-box" height={44} width={600} display="flex" alignItems="center">
    <InputBase
      id="search-box-input"
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
    />
    <PrimaryButton
      id="search-box-button"
      aria-label="search"
      sx={{
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        height: "100%",
      }}
      onClick={onSearch}
      disableElevation
    >
      <SearchIcon size="xl" />
    </PrimaryButton>
  </Box>
);

export default SearchBox;
