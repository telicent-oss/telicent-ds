import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";

const meta: Meta<typeof Dialog> = {
  title: "Feedback/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const DIALOG_WIDTH = 350;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: `
This uses **only MUI-provided** dialog components.
Use it for a simple, standard title region when you don't need a dedicated close action in the header.
If you need a title paired with a close control (and consistent alignment), prefer the pattern story below.
        `,
      },
    },
  },
  render: () => (
    (() => {
      const [open, setOpen] = useState(false);
      const onClose = () => setOpen(false);

      return (
        <>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Open Dialog
          </Button>
          <Dialog open={open} onClose={onClose} aria-labelledby="dialog-title">
            <DialogTitle id="dialog-title">Delete saved search</DialogTitle>
            <DialogContent>
              <Typography>
                Content is here to show layout under a realistic dialog header.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onClose} variant="contained">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </>
      );
    })()
  ),
};

export const PaddingOrderAgnostic: Story = {
  name: "Padding",
  parameters: {
    docs: {
      description: {
        story: `
Top padding is applied to which child (DialogTitle, DialogContent, or DialogAction) appears first.
This allows for varied structure without changing edge spacing.
        `,
      }
    }
  },
  render: () => (
    (() => {
      const [open, setOpen] = useState(false);
      const onClose = () => setOpen(false);

      return (
        <>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Open Dialog
          </Button>
          <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="dialog-title-order"
            PaperProps={{ sx: { width: DIALOG_WIDTH } }}
          >
            <DialogContent>
              <Typography>
                Content first to show padding stays consistent regardless of order.
              </Typography>
            </DialogContent>
            <DialogTitle id="dialog-title-order">Order-agnostic padding</DialogTitle>
            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onClose} variant="contained">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </>
      );
    })()
  ),
};
