import { StoryObj } from '@storybook/react';
import { TableExample } from './stories';

declare const meta: {
    component: import('../../../node_modules/react').FC<import('./TeliTable').TeliTableProps>;
    parameters: {
        docs: {
            description: {
                story: string;
            };
            source: {
                type: string;
            };
        };
    };
};
export default meta;
export type TeliTableStory = StoryObj<typeof meta>;
export { TableExample };
