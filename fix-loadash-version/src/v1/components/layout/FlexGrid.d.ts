import { default as React } from '../../../../node_modules/react';
import { GridProps } from '@mui/material/Grid';
type FlexGridProps = Omit<GridProps, "container" | "classes">;
export declare const FlexGrid: React.FC<FlexGridProps>;
export declare const FlexGridItem: React.FC<FlexGridProps>;
export {};
