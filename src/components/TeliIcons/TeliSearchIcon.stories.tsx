import { Meta, StoryObj } from "@storybook/react";
import TeliSearchIcon from "./TeliSearchIcon";

const meta: Meta<typeof TeliSearchIcon> = {
  component: TeliSearchIcon,
};

export default meta;

type TeliSearchIconStory = StoryObj<typeof TeliSearchIcon>;

export const Example: TeliSearchIconStory = {
  args: {},
};
