import { default as React } from 'react';
import { StoryObj } from '@storybook/react';
import { default as TeliBrand } from './TeliBrand';

declare const meta: {
    component: React.FC<import('./TeliBrand').TeliBrandProps>;
};
export default meta;
type Story = StoryObj<typeof TeliBrand>;
export declare const WithAppName: Story;
export declare const WithBetaAppName: Story;
export declare const ClickableExample: Story;
