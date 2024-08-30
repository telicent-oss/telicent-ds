import { default as React } from 'react';
import { SvgIconProps } from '@mui/material';

type TelicentMarkProps = Omit<SvgIconProps, "color"> & Partial<{
    backgroundColor: SvgIconProps["color"];
    color: "black" | "white";
}>;
declare const TelicentMark: React.FC<TelicentMarkProps>;
export default TelicentMark;
