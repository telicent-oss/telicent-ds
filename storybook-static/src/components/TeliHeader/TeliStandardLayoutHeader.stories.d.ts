import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('react').FC<import('./TeliStandardLayoutHeader').TeliStandardLayoutHeaderProps>;
};
export default meta;
type TeliStandardLayoutHeaderStory = StoryObj<typeof meta>;
export declare const Basic: TeliStandardLayoutHeaderStory;
export declare const AppSwitcherExample: TeliStandardLayoutHeaderStory;
export declare const UserProfileExample: TeliStandardLayoutHeaderStory;
