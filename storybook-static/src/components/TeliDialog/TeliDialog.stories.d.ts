import { default as React } from 'react';
import { StoryObj } from '@storybook/react';

declare const meta: {
    component: React.FC<import('@mui/material').DialogProps>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BasicDialog: Story;
