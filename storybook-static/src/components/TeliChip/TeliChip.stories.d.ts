import { StoryObj } from '@storybook/react';
import { BasicChips, ChipsExample, ClickableChips, ClickableLinkChips, ColorChips, DeleteableChips, IconChips, SizeChips } from './stories';

declare const meta: {
    component: import('../../../node_modules/react').FC<import('./TeliChip').TeliChipProps>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default meta;
export type TeliChipStory = StoryObj<typeof meta>;
export { BasicChips, ClickableChips, DeleteableChips, ClickableLinkChips, IconChips, ColorChips, SizeChips, ChipsExample, };
