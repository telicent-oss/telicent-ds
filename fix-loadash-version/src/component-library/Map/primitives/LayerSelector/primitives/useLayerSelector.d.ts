import { default as React } from '../../../../../../node_modules/react';
import { LayerOption } from '../primitives/LayerSelectorPresentational';
export declare const useLayerSelector: ({ data, onChange }: {
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
