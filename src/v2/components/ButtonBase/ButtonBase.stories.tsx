import type { Meta, StoryObj } from "@storybook/react";
import ButtonBase from "./ButtonBase";

const meta = {
  component: ButtonBase,
} satisfies Meta<typeof ButtonBase>;

export default meta;

export type ButtonBaseStory = StoryObj<typeof meta>;

export const Basic: ButtonBaseStory = {
  args: {
    id: "example-id",
  },
  parameters: {
    docs: {
      description: {
        story: `<code>fullWidth</code> can be used to make the ButtonBase take up the
        full width of its parent container.`,
      },
    },
  },
};
