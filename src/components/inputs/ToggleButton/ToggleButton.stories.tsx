import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleButton } from "./ToggleButton";

const meta = {
  title: "Inputs/ToggleButton",
  component: ToggleButton,
} satisfies Meta<typeof ToggleButton>;

export default meta;

export type ToggleButtonStory = StoryObj<typeof meta>;

export const Basic: ToggleButtonStory = {
  args: { value: "active" },
  parameters: {
    docs: {
      description: {
        story:
          "Thin re-export of MUI ToggleButton. For a toggle button that shows a tooltip on hover, reach for `TooltipToggleButton` instead.",
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <ToggleButton value="active" selected={selected} onChange={() => setSelected((v) => !v)}>
        {selected ? "On" : "Off"}
      </ToggleButton>
    );
  },
};
