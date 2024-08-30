import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('../../../node_modules/react').FC<import('./TeliCheckbox').TeliCheckboxProps>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const WithoutLabel: Story;
export declare const CheckboxIcon: Story;
