import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('react').FC<import('@mui/material').LinearProgressProps>;
};
export default meta;
export type LinearProgressStory = StoryObj<typeof meta>;
export declare const Basic: LinearProgressStory;
