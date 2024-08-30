import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('../../../node_modules/react').FC<import('./TeliButton').TeliButtonProps>;
    parameters: {
        docs: {
            source: {
                type: string;
            };
        };
    };
};
export default meta;
export type Story = StoryObj<typeof meta>;
/**
 * The TeliButton comes with four variants: primary, secondary,
 * tertiary and link.
 * All components accept an onClick handler that is applied to the root DOM element.
 * **Note**: The documentation avoids mentioning native props (there are a lot)
 * refer to the MUI and MDN documentation for a full list of props
 */
export declare const Basic: Story;
export { PrimaryButtons, SecondaryButtons, TertiaryButtons, LinkButtons, DangerButtons, ButtonsWithIcons, IconButtons, Sizes, ButtonsWithTooltips, } from './stories';
