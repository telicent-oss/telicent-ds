import { default as React } from '../../../../node_modules/react';
import { PopOverProps } from '../../../v1/components/surfaces/PopOver/Popover';
import { ButtonProps } from '@mui/material';

export interface LayerOption {
    uri: string;
    image: string;
    label: string;
}
interface PresentationalProps {
    selectedIndex: number;
    data: LayerOption[];
    anchorEl: HTMLButtonElement | null;
    onCloseDropdown: PopOverProps["onClose"];
    onClickDropdown: ButtonProps["onClick"];
    onListItemClick: (index: number) => void;
}
export declare const Presentational: React.FC<PresentationalProps>;
export declare const useInternalState: ({ data, onChange }: {
    data: LayerOption[];
    onChange: (layer: LayerOption) => void;
}) => {
    data: LayerOption[];
    selectedIndex: number;
    anchorEl: HTMLButtonElement | null;
    onClickDropdown: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onCloseDropdown: () => void;
    onListItemClick: (index: number) => void;
};
interface LayerSelectorProps {
    data: LayerOption[];
    onChange: (layer: LayerOption) => void;
}
export declare const LayerSelector: React.FC<LayerSelectorProps>;
export {};
