import { Meta, StoryObj } from "@storybook/react";
import TeliAddIcon from "./TeliAddIcon";

const meta: Meta<typeof TeliAddIcon> = {
  component: TeliAddIcon,
};

export default meta;

type TeliAddIconStory = StoryObj<typeof TeliAddIcon>;

export const Example: TeliAddIconStory = {
  args: {},
};
