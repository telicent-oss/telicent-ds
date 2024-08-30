import { StoryObj } from '@storybook/react';
import { BasicTable, CaptionedTable, CustomColumns, DenseTable, StickyHeader } from './stories';

declare const meta: {
    component: import('react').FC<import('./TeliBasicTable').TeliBasicTableProps>;
    parameters: {
        docs: {
            source: {
                type: string;
            };
        };
    };
};
export default meta;
export type TeliBasicTableStory = StoryObj<typeof meta>;
export { BasicTable, DenseTable, StickyHeader, CaptionedTable, CustomColumns };
