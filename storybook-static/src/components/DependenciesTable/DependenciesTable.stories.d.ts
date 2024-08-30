import { Meta, StoryObj } from '@storybook/react';
import { default as DependenciesTable } from './DependenciesTable';

declare const meta: Meta<typeof DependenciesTable>;
export default meta;
type Story = StoryObj<typeof DependenciesTable>;
export declare const Example: Story;
