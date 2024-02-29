import { Meta, StoryObj } from "@storybook/react";
import TeliDeleteIcon from "./TeliDeleteIcon";

const meta: Meta<typeof TeliDeleteIcon> = {
  component: TeliDeleteIcon,
};

export default meta;

type TeliDeleteIconStory = StoryObj<typeof TeliDeleteIcon>;

export const Example: TeliDeleteIconStory = {
  args: {},
};
