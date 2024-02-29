import React from "react";
import { Dialog, DialogProps } from "@mui/material";

import SearchAutocomplete, {
  SearchAutocompleteProps,
} from "../SearchAutocomplete/SearchAutocomplete";
import "../TeliDialog/telidialog.css";

type SearchAutocompleteDialogProps<SearchOption = { label: string }> = Omit<
  SearchAutocompleteProps<SearchOption>,
  "listboxMaxHeight" | "fullWidth"
> & {
  open: DialogProps["open"];
  children: React.ReactNode;
} & Partial<{
    onClose: DialogProps["onClose"];
  }>;

const SearchAutocompleteDialog: React.FC<SearchAutocompleteDialogProps> = ({
  open,
  onClose,
  children,
  ...searchAutocompleteProps
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    PaperProps={{
      sx: {
        maxHeight: "100% - 64px",
        minHeight: 340,
        padding: "12px",
        minWidth: "540px",
      },
      className: "space-y-5",
    }}
  >
    <SearchAutocomplete
      fullWidth
      listboxMaxHeight={220}
      {...searchAutocompleteProps}
    />
    {children}
  </Dialog>
);

export default SearchAutocompleteDialog;
