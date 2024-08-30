import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('react').FC<import('./TeliTableCell').TeliTableCellProps>;
};
export default meta;
type TeliTableCellStory = StoryObj<typeof meta>;
export declare const Example: TeliTableCellStory;
