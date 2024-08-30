import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('react').FC<import('@mui/material').CircularProgressProps>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const Secondary: Story;
