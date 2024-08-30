import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('../../../node_modules/react').FC<import('./TeliList').TeliListProps>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
