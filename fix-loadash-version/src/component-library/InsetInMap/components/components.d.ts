import { default as React } from '../../../../node_modules/react';
import { BoxProps } from '@mui/material';
import { Position } from '../InsetInMap';
export * from '../../Drawer/composites/Drawer';
export interface ControlAreaProps extends Omit<BoxProps, 'position'> {
    position: Position;
}
export declare const ControlArea: React.FC<ControlAreaProps>;
export declare const Background: React.FC<BoxProps>;
export declare const Content: React.FC<BoxProps>;
export declare const workspace: {
    Background: React.FC<BoxProps>;
    Content: React.FC<BoxProps>;
    ControlArea: React.FC<ControlAreaProps>;
};
export declare const MapLayerSelector: React.FC;
