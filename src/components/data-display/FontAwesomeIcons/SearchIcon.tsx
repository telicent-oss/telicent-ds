import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { useTheme } from "@mui/material/styles";
import React from "react";

type SearchIconProps = Omit<FontAwesomeIconProps, "icon"> & {
  color?: "primary" | "inherit";
};

const SearchIcon: React.FC<SearchIconProps> = ({ color, ...faIconProps }) => {
  const theme = useTheme();

  return (
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      css={{
        color: color === "primary" ? theme.palette.primary.main : "inherit",
      }}
      {...faIconProps}
    />
  );
};

export default SearchIcon;
