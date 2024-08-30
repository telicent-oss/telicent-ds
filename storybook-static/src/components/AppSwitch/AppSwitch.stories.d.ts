import { default as React } from 'react';
import { StoryObj } from '@storybook/react';

declare const meta: {
    component: React.FC<import('./AppSwitch').AppSwitchProps>;
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * This is an example of the App Switcher were all the apps have style configure in this component.
 */
export declare const Example: Story;
/**
 * This is the default style that will be applied if your appliction style is not configured inside this component.
 */
export declare const DefaultAppNameStyle: Story;
