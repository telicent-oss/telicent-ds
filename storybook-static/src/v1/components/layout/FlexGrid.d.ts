import { default as React } from 'react';
import { Grid2Props } from '@mui/material/Unstable_Grid2';

type FlexGridProps = Omit<Grid2Props, "container" | "sx" | "classes" | "spacing">;
export declare const FlexGrid: React.FC<FlexGridProps>;
export declare const FlexGridItem: React.FC<FlexGridProps>;
export {};
