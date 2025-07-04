import { Meta, StoryObj } from '@storybook/react';
import { default as Checkbox } from './Checkbox';

declare const meta: Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof Checkbox>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const WithCustomLabel: Story;
export declare const WithRequired: Story;
export declare const ExampleWithOnChange: Story;
