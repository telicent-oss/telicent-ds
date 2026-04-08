import { Meta, StoryObj } from '@storybook/react';
import { default as TextField } from './TextField';
declare const meta: Meta<typeof TextField>;
export default meta;
type Story = StoryObj<typeof TextField>;
export declare const Default: Story;
export declare const MultiLine: Story;
export declare const HelperText: Story;
export declare const ErrorMessage: Story;
