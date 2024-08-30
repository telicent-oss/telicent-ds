import { default as React } from '../../../node_modules/react';
import { StoryObj } from '@storybook/react';

declare const meta: {
    component: React.FC<Partial<{
        children: React.ReactNode;
    }>>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
