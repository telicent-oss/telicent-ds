import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TeliDialog, TeliDialogContent, TeliDialogTitle } from "./TeliDialog";
import TeliButton from "../TeliButton/TeliButton";

const meta = {
  component: TeliDialog,
} satisfies Meta<typeof TeliDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const SimpleDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <TeliButton variant="outlined" onClick={handleOpenDialog}>
        Open simple dialog
      </TeliButton>
      <TeliDialog open={open} onClose={handleCloseDialog}>
        <TeliDialogTitle>Simple dialog</TeliDialogTitle>
        <TeliDialogContent id="scroll-dialog-description">
          {[...new Array(5)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </TeliDialogContent>
      </TeliDialog>
    </>
  );
};

export const BasicDialog: Story = {
  render: () => <SimpleDialog />,
  args: {
    open: false,
  },
};
