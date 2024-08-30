import { StoryObj } from '@storybook/react';
import { BasicSwitches, ControlledSwitches, LabelledSwitches, Sizes, LabelPlacement } from './stories';

declare const meta: {
    component: import('react').FC<import('./TeliSwitch').TeliSwitchProps>;
};
export default meta;
export type TeliSwitchStory = StoryObj<typeof meta>;
export { BasicSwitches, LabelledSwitches, ControlledSwitches, Sizes, LabelPlacement, };
