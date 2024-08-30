import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('../../../node_modules/react').FC<import('./TeliTableHead').TeliTableHeadProps>;
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
