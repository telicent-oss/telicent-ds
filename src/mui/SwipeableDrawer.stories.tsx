import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { Check, List as ListIcon, LocationOn } from "@telicent-oss/mui-icons-material";

const meta: Meta<typeof SwipeableDrawer> = {
  excludeStories: ["Markup"],
  title: "MUI Coverage/Individual/SwipeableDrawer",
  component: SwipeableDrawer,
  tags: ["!autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: drawer paper background and elevation, list item density, selected and hover states, divider colour, dark mode. Shows theming, not production positioning or stacking.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof SwipeableDrawer>;

const noop = (): void => undefined;

export const Markup: React.FC = () => (
  <Box sx={{ position: "relative", height: 320, width: 560, overflow: "hidden" }}>
    <SwipeableDrawer
      open
      anchor="left"
      onOpen={noop}
      onClose={noop}
      ModalProps={{
        disablePortal: true,
        keepMounted: true,
        disableScrollLock: true,
        disableAutoFocus: true,
        disableEnforceFocus: true,
      }}
      sx={{ position: "absolute" }}
      PaperProps={{ sx: { position: "absolute", width: 240 } }}
      BackdropProps={{ sx: { position: "absolute" } }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1">Filters</Typography>
      </Box>
      <Divider />
      <List>
        <ListItemButton selected>
          <ListItemIcon>
            <LocationOn />
          </ListItemIcon>
          <ListItemText primary="Nearby" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Records" secondary="All datasets" />
        </ListItemButton>
        <ListItemButton disabled>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          <ListItemText primary="Approved" />
        </ListItemButton>
      </List>
    </SwipeableDrawer>
  </Box>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
