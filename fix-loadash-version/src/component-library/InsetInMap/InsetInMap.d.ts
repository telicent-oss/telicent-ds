import { default as React } from '../../../node_modules/react';
import { BoxProps } from '@mui/material';
export { workspace as insetInMap, } from './components/components';
export type Scrollable = HTMLDivElement | (Window & typeof globalThis);
export type Position = "topLeft" | "top" | "topRight" | "right" | "bottomRight" | "bottom" | "bottomLeft" | "left" | "center";
type RootPropsType = Omit<BoxProps, 'children' | 'content'>;
export declare const InsetInMap: React.FC<RootPropsType & {
    content: React.ReactNode;
    children?: React.ReactNode;
    controlArea?: Partial<Record<Position, React.ReactNode>>;
}>;
