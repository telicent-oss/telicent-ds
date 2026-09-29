import { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popper } from "./Popper";
import Button from "../../buttons/Button/Button";
import Paper from "../Paper/Paper";

const meta = {
  title: "Surfaces/Popper",
  component: Popper,
} satisfies Meta<typeof Popper>;

export default meta;

export type PopperStory = StoryObj<typeof meta>;

export const Basic: PopperStory = {
  args: { open: false },
  parameters: {
    docs: {
      description: {
        story:
          "Thin re-export of MUI Popper. Positions floating content next to an anchor element without the paper/dismiss chrome that `PopOver` adds — reach for `Popper` when you need placement only (custom typeaheads, floating labels) and for `PopOver` when you need a modal-style dismissible surface.",
      },
    },
  },
  render: () => {
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 40 }}>
        <Button ref={anchorRef} onClick={() => setOpen((v) => !v)}>
          {open ? "Close popper" : "Open popper"}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start">
          <Paper sx={{ padding: 2, marginTop: 1 }}>
            <div>Anchored to the button.</div>
          </Paper>
        </Popper>
      </div>
    );
  },
};
