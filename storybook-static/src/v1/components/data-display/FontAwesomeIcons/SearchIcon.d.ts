import { default as React } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type SearchIconProps = Omit<FontAwesomeIconProps, "icon">;
declare const SearchIcon: React.FC<SearchIconProps>;
export default SearchIcon;
