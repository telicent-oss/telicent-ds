import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Button, Popover, Typography } from "@mui/material";

const meta: Meta<typeof Popover> = {
  excludeStories: ["Markup"],
  title: "MUI Coverage/Individual/Popover",
  component: Popover,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: popover surface colour, elevation and radius, content typography, dark mode. Shows theming, not production positioning or stacking.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Markup: React.FC = () => (
  <Box sx={{ position: "relative", width: 320, height: 220 }}>
    <Button>Anchor</Button>
    <Popover
      open
      anchorReference="anchorPosition"
      anchorPosition={{ top: 44, left: 0 }}
      onClose={() => undefined}
      disablePortal
      hideBackdrop
      disableScrollLock
      disableAutoFocus
      disableEnforceFocus
      sx={{ position: "absolute" }}
    >
      <Typography sx={{ p: 2 }}>Popover content on a themed surface.</Typography>
    </Popover>
  </Box>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
