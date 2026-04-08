import { Meta, StoryObj } from '@storybook/react';
import { default as CopyToClipboard } from './CopyToClipboard';
declare const meta: Meta<typeof CopyToClipboard>;
export default meta;
type Story = StoryObj<typeof CopyToClipboard>;
export declare const Default: Story;
export declare const CustomSuccessMessage: Story;
export declare const CustomStyle: Story;
export declare const Error: Story;
