import { SvgIconProps } from '@mui/material/SvgIcon';
import { default as React } from '../../../../../node_modules/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface DropdownButtonProps {
    ariaLabel: string;
    id: string;
    menuItems: DropDownButtonMenuItemProps[];
}
export interface DropDownButtonMenuItemProps {
    id: string;
    onClick: (val: string) => void;
    faIcon?: IconProp;
    icon?: React.ElementType<SvgIconProps>;
    value: string;
    default?: boolean;
    selected: boolean;
}
declare const DropdownButton: React.FC<DropdownButtonProps>;
export default DropdownButton;
