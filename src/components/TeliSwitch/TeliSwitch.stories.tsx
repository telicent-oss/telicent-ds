import type { Meta, StoryObj } from "@storybook/react";
import TeliSwitch from "./TeliSwitch";
import {
  BasicSwitches,
  ControlledSwitches,
  LabelledSwitches,
  Sizes,
  LabelPlacement,
} from "./stories";

const meta = {
  component: TeliSwitch,
} satisfies Meta<typeof TeliSwitch>;

export default meta;
export type TeliSwitchStory = StoryObj<typeof meta>;

export {
  BasicSwitches,
  LabelledSwitches,
  ControlledSwitches,
  Sizes,
  LabelPlacement,
};
