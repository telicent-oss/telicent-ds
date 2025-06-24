import { Meta, StoryObj } from '@storybook/react';
import { default as AppSwitch } from './AppSwitch';

export declare const appList: {
    id: string;
    name: string;
    url: string;
    icon: string;
}[];
declare const meta: Meta<typeof AppSwitch>;
export default meta;
type Story = StoryObj<typeof AppSwitch>;
export declare const AppSwitchExample: Story;
