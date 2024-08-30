import { default as React } from '../../../../../node_modules/react';
import { PopoverProps as MUIPopOverProps } from '@mui/material/Popover';

declare const PopOver: (props: MUIPopOverProps & Partial<{
    width: number;
}> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export default PopOver;
