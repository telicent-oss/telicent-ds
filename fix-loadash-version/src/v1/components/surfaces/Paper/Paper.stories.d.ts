import { default as React } from '../../../../../node_modules/react';
import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<Omit<import('@mui/material').PaperProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
    tags: string[];
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Demo: Story;
