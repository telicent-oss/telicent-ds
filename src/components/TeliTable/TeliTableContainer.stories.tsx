import type { Meta, StoryObj } from "@storybook/react";
import TeliTableContainer from "./TeliTableContainer";

const meta = {
  component: TeliTableContainer,
} satisfies Meta;

export default meta;
type TeliTableContainerStory = StoryObj<typeof meta>;

export const Example: TeliTableContainerStory = {
  args: {
    children: <table />,
  },
};
