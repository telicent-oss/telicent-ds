import { default as React } from '../../../../node_modules/react';
import { TypographyProps, SxProps } from '@mui/material';

export interface SocketedTextProps extends Omit<TypographyProps, "component"> {
    beforeItem?: React.ReactNode;
    afterItem?: React.ReactNode;
    beforeItemSX?: SxProps;
    afterItemSX?: SxProps;
    href?: string;
    containerSX?: SxProps;
    component?: React.ElementType;
    propCheckError?: (problem: string) => void;
}
/**
 * The intended use of SocketedText to render text with a trailing, or leading icon.

 * This component mimic's MUI’s Typography by default, except it has beforeItem or afterItem sockets.
 *
 * The text and icons are wrapped in an inline‑flex container with sensible defaults.
 *
 * All Typography props are forwarded, so this component behaves like any other Typography element.
 *
 * **Nomenclature**: The word "Socketed" is used in the [Diablo2](https://gamefaqs.gamespot.com/pc/370600-diablo-ii-lord-of-destruction/faqs/8382) sense:
 *
 * > Socketed items are exactly the same as normal items, but with sockets in them.
 * > This allows you to insert gems or skulls in order to add magical properties to your items.
 *
 * <sup>This may be a terrible name</sup>
 *
 */
export declare const SocketedText: React.FC<SocketedTextProps>;
