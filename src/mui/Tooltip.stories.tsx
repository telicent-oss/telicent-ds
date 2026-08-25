import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Button, Stack, Tooltip } from "@mui/material";

const meta: Meta<typeof Tooltip> = {
  excludeStories: ["Markup"],
  title: "MUI Coverage/Individual/Tooltip",
  component: Tooltip,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: tooltip background and text contrast, radius, arrow colour, font size, dark mode. Shows theming, not production positioning or stacking.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Markup: React.FC = () => (
  <Stack direction="row" spacing={8} sx={{ height: 140, alignItems: "center" }}>
    <Box sx={{ position: "relative" }}>
      <Tooltip
        open
        title="Plain tooltip"
        placement="bottom"
        slotProps={{ popper: { disablePortal: true } }}
      >
        <Button>Plain</Button>
      </Tooltip>
    </Box>
    <Box sx={{ position: "relative" }}>
      <Tooltip
        open
        arrow
        title="Tooltip with arrow"
        placement="bottom"
        slotProps={{ popper: { disablePortal: true } }}
      >
        <Button>With arrow</Button>
      </Tooltip>
    </Box>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
