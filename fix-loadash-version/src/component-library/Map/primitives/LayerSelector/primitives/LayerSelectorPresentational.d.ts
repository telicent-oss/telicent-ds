import { default as React } from '../../../../../../node_modules/react';
import { ButtonProps } from '../../../../../export';
import { PopOverProps } from '../../../../../v1/components/surfaces/PopOver/Popover';
export interface LayerOption {
    uri: string;
    image: string;
    label: string;
}
export interface PresentationalProps extends Pick<ButtonProps, "sx" | "variant" | "color" | "size"> {
    selectedIndex: number;
    data: LayerOption[];
    anchorEl: HTMLButtonElement | null;
    onCloseDropdown: PopOverProps["onClose"];
    onClickDropdown: ButtonProps["onClick"];
    onListItemClick: (index: number) => void;
}
export declare const LayerSelectorPresentationalButton: React.FC<PresentationalProps>;
export declare const LayerSelectorPresentationalPopOver: React.FC<PresentationalProps>;
