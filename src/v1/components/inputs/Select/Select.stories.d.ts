import { Meta, StoryObj } from '@storybook/react';
import { default as Select } from './Select';

declare const meta: Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof Select>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const WithCustomWidth: Story;
export declare const WithNoLabel: Story;
/**
 * This exemple is set up using useState to simulate how it would
 * work on the app, how the selected item is styled
 *
 * Refer back to the top of the document on how to implement
 */
export declare const ExampleWithOnChange: Story;
