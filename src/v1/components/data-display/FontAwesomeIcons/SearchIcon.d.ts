import { default as React } from '../../../../../node_modules/react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type SearchIconProps = Omit<FontAwesomeIconProps, "icon"> & {
    color?: "primary" | "inherit";
};
declare const SearchIcon: React.FC<SearchIconProps>;
export default SearchIcon;
