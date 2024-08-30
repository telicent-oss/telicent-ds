import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('react').FC<import('./TeliHeader').TeliHeaderProps>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const CustomHeader: Story;
