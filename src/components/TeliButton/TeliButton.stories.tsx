import type { Meta, StoryObj } from "@storybook/react";
import TeliButton from "./TeliButton";

const meta = {
  component: TeliButton,
  parameters: {
    docs: {
      source: {
        type: "dynamic",
      },
    },
  },
} satisfies Meta<typeof TeliButton>;

export default meta;
export type Story = StoryObj<typeof meta>;

/**
 * The TeliButton comes with four variants: primary, secondary,
 * tertiary and link.
 * All components accept an onClick handler that is applied to the root DOM element.
 * **Note**: The documentation avoids mentioning native props (there are a lot)
 * refer to the MUI and MDN documentation for a full list of props
 */
export const Basic: Story = {
  args: {
    children: "Default button",
    onClick: () => alert("Clicked default button"),
  },
};

export {
  PrimaryButtons,
  SecondaryButtons,
  TertiaryButtons,
  LinkButtons,
  DangerButtons,
  ButtonsWithIcons,
  IconButtons,
  Sizes,
  ButtonsWithTooltips,
} from "./stories";
