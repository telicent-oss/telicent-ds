import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('react').FC<import('./TeliTableHead').TeliTableHeadProps>;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
export default meta;
export type TeliTableHeadStory = StoryObj<typeof meta>;
export declare const Example: TeliTableHeadStory;
