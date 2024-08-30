import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('../../../node_modules/react').FC<import('./TeliTableBody').TeliTableBody>;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
export default meta;
export type TeliTableBodyStory = StoryObj<typeof meta>;
export declare const Example: TeliTableBodyStory;
