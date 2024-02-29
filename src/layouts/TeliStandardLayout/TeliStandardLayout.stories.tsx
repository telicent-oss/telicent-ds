import type { Meta, StoryObj } from "@storybook/react";
import TeliStandardLayout from "./TeliStandardLayout";

const meta = {
  component: TeliStandardLayout,
} satisfies Meta<typeof TeliStandardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    appName: "design-system",
    children: (
      <p>
        The TeliStandardLayout is provides an opiniated layout used across all
        telicent applications where suitable.
        <b> Note: Light mode is not yet fully supported</b>
        <br />
        Refer to the TeliStandardLayoutHeader component to see how the header
        component can be configured
      </p>
    ),
  },
};
