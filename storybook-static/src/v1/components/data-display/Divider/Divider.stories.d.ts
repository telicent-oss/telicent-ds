import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('@mui/material/OverridableComponent').OverridableComponent<import('@mui/material').DividerTypeMap<{}, "hr">>;
};
export default meta;
export type DividerStory = StoryObj<typeof meta>;
export declare const Basic: DividerStory;
