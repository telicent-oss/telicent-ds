import { Meta, StoryObj } from "@storybook/react";
import ClockRotateLeft from "./ClockRotateLeft";

const meta: Meta<typeof ClockRotateLeft> = {
  component: ClockRotateLeft,
};

export default meta;

type ClockRotateLeftStory = StoryObj<typeof ClockRotateLeft>;

export const Example: ClockRotateLeftStory = {
  args: {},
};
