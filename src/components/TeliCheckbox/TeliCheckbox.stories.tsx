import type { Meta, StoryObj } from "@storybook/react";
import TeliCheckbox from "./TeliCheckbox";

const meta = {
  component: TeliCheckbox,
} satisfies Meta<typeof TeliCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "checkbox label",
  },
};

export const WithoutLabel: Story = {
  args: {
    disableRipple: true,
    inputProps: { "aria-label": "Without label" },
  },
};

export const CheckboxIcon: Story = {
  args: {
    icon: <i className="ri-heart-3-line" />,
    checkedIcon: <i className="ri-heart-3-fill" />,
  },
};
