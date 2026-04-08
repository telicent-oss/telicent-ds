import { Meta, StoryObj } from '@storybook/react';
declare const ColorViewer: ({ onlyCore }: {
    onlyCore?: boolean;
}) => import("@emotion/react/jsx-runtime").JSX.Element;
type Story = StoryObj<typeof ColorViewer>;
declare const _default: Meta<typeof ColorViewer>;
export default _default;
export declare const AllGroups: Story;
export declare const CoreIntentsOnly: Story;
