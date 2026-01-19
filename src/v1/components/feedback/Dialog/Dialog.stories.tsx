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
import {
  DialogTitleWithClose,
  type DialogTitleWithCloseProps,
} from "./patterns/DialogTitleWithClose";
import muiDialogProblemUrl from "./mui-dialog-problem.png";
import figmaDialog from "./figma-dialog.png";

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

type PatternDemoProps = Omit<DialogTitleWithCloseProps, "onClose">;

const PatternDemo = (args: PatternDemoProps) => {
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
        aria-labelledby={args.id}
        PaperProps={{ sx: { width: DIALOG_WIDTH } }}
      >
        <DialogTitleWithClose {...args} onClose={onClose} />

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
};

export const PatternDialogTitleWithClose: Story = {
  name: 'Pattern: DialogTitleWithClose',
  parameters: {
    docs: {
      description: {
        story: `
**What** - Renders a dialog header with aligned title + close action using \`DialogTitle\` + \`Button\` primitives.

**Why**  - The MUI docs provide a rudimentary example with [overlap issues](${muiDialogProblemUrl}), and the Figma design includes [a pattern](${figmaDialog}) that MUI doesn't express cleanly

**Warning** - \`DialogTitleWithClose\` is a **reference implementation**, not a production-grade DS component.
It has limited coverage, a narrow proven use case, and may not suit every composition scenario.
        `,
      },
    },
  },
  render: () => (
    <PatternDemo
      id="dialog-title-with-close"
      title={`Dialog title with close that needs to wrap as width is ${DIALOG_WIDTH}px `}
      closeLabel="Close button"
    />
  ),
};
