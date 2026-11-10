import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Button, Divider, Menu, MenuItem, MenuList, Paper, Stack } from "@mui/material";

const meta: Meta<typeof Menu> = {
  excludeStories: ["Markup"],
  title: "MUI Coverage/Individual/Menu",
  component: Menu,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: menu surface colour and elevation, item typography, hover/selected/disabled states, divider colour, dark mode. Shows theming, not production positioning or stacking.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Markup: React.FC = () => (
  <Stack direction="row" spacing={4} alignItems="flex-start">
    <Box sx={{ position: "relative", width: 260, height: 260 }}>
      <Button>Anchor</Button>
      <Menu
        open
        anchorReference="anchorPosition"
        anchorPosition={{ top: 44, left: 0 }}
        onClose={() => undefined}
        disablePortal
        hideBackdrop
        disableScrollLock
        disableAutoFocus
        disableEnforceFocus
        autoFocus={false}
        sx={{ position: "absolute" }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem selected>My account</MenuItem>
        <Divider />
        <MenuItem disabled>Disabled entry</MenuItem>
      </Menu>
    </Box>
    <Paper>
      <MenuList>
        <MenuItem>MenuList item</MenuItem>
        <MenuItem selected>Selected item</MenuItem>
        <MenuItem disabled>Disabled item</MenuItem>
      </MenuList>
    </Paper>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
