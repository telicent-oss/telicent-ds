// import SearchIcon from '@mui/material/SearchIcon';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { ButtonProps } from "@mui/material/Button";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./user-avatar.css";

type Size = ButtonProps["size"];

const SearchIcon = (
  props: Pick<
    FontAwesomeIconProps,
    | "color"
    | "fixedWidth"
    | "inverse"
    | "listItem"
    | "flip"
    // | 'size' // Use MUI size
    | "pull"
    | "rotation"
    | "transform"
    | "title"
    | "titleId"
  > & { size?: Size }
) => {
  
  return (
    <FontAwesomeIcon
      id="magnifying-glass-icon"
      icon={faMagnifyingGlass}
      size={
        // Map MUI size to FA size
        props.size === "small"
          ? "sm"
          : props.size === "medium"
          ? undefined
          : "lg"
      }
    />
  );
};

export default SearchIcon;