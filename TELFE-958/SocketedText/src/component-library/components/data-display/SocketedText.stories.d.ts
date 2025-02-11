import { StoryObj } from '@storybook/react';
import { SocketedText, SocketedTextProps } from './SocketedText';

declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<SocketedTextProps>;
    tags: string[];
    args: {
        children: string;
    };
};
export default meta;
type Story = StoryObj<typeof SocketedText>;
export declare const Default: Story;
export declare const AfterItem: Story;
export declare const WithBothSlots: Story;
export declare const AsLink: Story;
export declare const HeaderVariant: Story;
export declare const ComparisonWithTypography: Story;
export declare const CustomSlotStyles: Story;
export declare const Wrappedchildren: Story;
export declare const WrappedTextAlignStart: Story;
export declare const ErrorWhenNobeforeItemAndNoEndSet: Story;
export declare const ErrorWhenAnchorButNoHrefSet: Story;
