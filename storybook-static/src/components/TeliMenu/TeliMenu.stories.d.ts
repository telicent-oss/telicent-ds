import { default as React } from '../../../node_modules/react';
import { StoryObj } from '@storybook/react';

declare const meta: {
    component: React.FC<import('@mui/material').MenuProps>;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SimpleMenuExample: Story;
