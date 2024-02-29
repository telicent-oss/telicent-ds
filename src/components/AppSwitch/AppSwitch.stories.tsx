import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { appsArray, appsNoMatching } from "./appsArray";

import AppSwitch from "./AppSwitch";

const meta = {
  component: AppSwitch,
} satisfies Meta<typeof AppSwitch>;
export default meta;

type Story = StoryObj<typeof meta>;

/**
 * This is an example of the App Switcher were all the apps have style configure in this component. 
 */
export const Example: Story = {
  args: {
    apps: appsArray,
    className: "absolute right-5 top-3",
  },
};

/**
 * This is the default style that will be applied if your appliction style is not configured inside this component.
 */
export const DefaultAppNameStyle: Story = {
  args: {
    apps: appsNoMatching,
    className: "absolute right-5 top-3",
  },
};