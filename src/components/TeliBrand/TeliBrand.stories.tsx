import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TeliBrand from "./TeliBrand";

const meta = {
  component: TeliBrand,
} satisfies Meta<typeof TeliBrand>;
export default meta;

type Story = StoryObj<typeof TeliBrand>;

export const WithAppName: Story = {
  args: {
    appName: "design-system",
  },
};

export const WithBetaAppName: Story = {
  args: {
    ...WithAppName.args,
    beta: true,
  },
};

export const ClickableExample: Story = {
  args: {
    ...WithBetaAppName.args,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
    target: "_blank",
    rel: "noreferrer",
  },
};
