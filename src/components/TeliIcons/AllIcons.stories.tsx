import { Meta, StoryObj } from "@storybook/react";
import AllIcons from "./AllIcons";

const meta: Meta<typeof AllIcons> = {
  component: AllIcons,
};

export default meta;

type IconStory = StoryObj<typeof AllIcons>;

export const Example: IconStory = {
  args: {},
};
