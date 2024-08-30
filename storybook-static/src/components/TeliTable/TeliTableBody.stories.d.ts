import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('react').FC<import('./TeliTableBody').TeliTableBody>;
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
