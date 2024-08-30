import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('../../../node_modules/react').FC<import('./TeliTableRow').TeliTableRowProps>;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
export default meta;
type TeliTableRowStory = StoryObj<typeof meta>;
export declare const Example: TeliTableRowStory;
