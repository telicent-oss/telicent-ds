import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const meta: Meta<typeof DialogContentText> = {
  excludeStories: ["Markup"],
  title: "MUI Coverage/Individual/Dialog children",
  component: DialogContentText,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Assesses DialogContentText inside a Dialog. Judge: body text colour and contrast against the dialog surface, line height, spacing to title and actions, dark mode. Shows theming, not production positioning or stacking.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof DialogContentText>;

export const Markup: React.FC = () => (
  <Box sx={{ position: "relative", height: 360 }}>
    <Dialog
      open
      disablePortal
      hideBackdrop
      disableScrollLock
      disableAutoFocus
      disableEnforceFocus
      sx={{ position: "absolute" }}
      PaperProps={{ sx: { position: "absolute" } }}
    >
      <DialogTitle>Delete this dataset?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Deleting removes the dataset and every derived index. This cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button color="error">Delete</Button>
      </DialogActions>
    </Dialog>
  </Box>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
