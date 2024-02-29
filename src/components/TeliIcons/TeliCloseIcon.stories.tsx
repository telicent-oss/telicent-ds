import { Meta, StoryObj } from "@storybook/react";
import TeliCloseIcon from "./TeliCloseIcon";

const meta: Meta<typeof TeliCloseIcon> = {
  component: TeliCloseIcon,
};

export default meta;

type TeliCloseIconStory = StoryObj<typeof TeliCloseIcon>;

export const Example: TeliCloseIconStory = {
  args: {},
};
