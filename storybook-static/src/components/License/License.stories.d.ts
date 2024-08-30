import { Meta, StoryObj } from '@storybook/react';
import { default as License } from './License';

declare const meta: Meta<typeof License>;
export default meta;
type Story = StoryObj<typeof License>;
export declare const Example: Story;
export declare const ExpiredLicenseExample: Story;
export declare const NoDateExample: Story;
