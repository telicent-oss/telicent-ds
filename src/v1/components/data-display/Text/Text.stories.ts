import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import Text from "./Text";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Data Display/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    align: "inherit",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Subtitle1: Story = {
  args: {
    variant: "subtitle1",
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
};

export const Subtitle2: Story = {
  args: {
    variant: "subtitle2",
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
};

export const Body1: Story = {
  args: {
    variant: "body2",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  },
};

export const Body2: Story = {
  args: {
    variant: "body2",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Caption text",
  },
};

export const Overline: Story = {
  args: {
    variant: "overline",
    children: "overline",
  },
};
