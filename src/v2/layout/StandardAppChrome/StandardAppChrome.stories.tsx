import type { Meta, StoryObj } from "@storybook/react";
import StandardAppChrome from "./StandardAppChrome";

const meta = {
  component: StandardAppChrome,
} satisfies Meta<typeof StandardAppChrome>;

export default meta;

export type StandardAppChromeStory = StoryObj<typeof meta>;

export const Basic: StandardAppChromeStory = {
  args: {
    appName: "New App",
  },
  parameters: {
    docs: {
      description: {
        story: `Standard "app UI" around Telicent apps (like Chrome is UI around webpage) (alias of <code>StandardTelicentLayout</core> to avoid collisions with <code>v2/layout/*<code>).`,
      },
    },
  },
};
