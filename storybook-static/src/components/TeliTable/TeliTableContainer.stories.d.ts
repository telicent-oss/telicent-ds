import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('../../../node_modules/react').FC<import('./TeliTableContainer').TeliTableContainerProps>;
};
export default meta;
type TeliTableContainerStory = StoryObj<typeof meta>;
export declare const Example: TeliTableContainerStory;
