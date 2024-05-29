import React from "react";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type SearchIconProps = Omit<FontAwesomeIconProps, "icon">;

const SearchIcon: React.FC<SearchIconProps> = (faIconProps) => (
  <FontAwesomeIcon icon={faMagnifyingGlass} {...faIconProps} />
);

export default SearchIcon;
