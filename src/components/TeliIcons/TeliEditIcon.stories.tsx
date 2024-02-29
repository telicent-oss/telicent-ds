import { Meta, StoryObj } from "@storybook/react";
import TeliEditIcon from "./TeliEditIcon";

const meta: Meta<typeof TeliEditIcon> = {
  component: TeliEditIcon,
};

export default meta;

type TeliEditIconStory = StoryObj<typeof TeliEditIcon>;

export const Example: TeliEditIconStory = {
  args: {},
};
