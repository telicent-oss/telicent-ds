import React from "react";
import { Button } from "@mui/material";
import { TeliMenu, TeliMenuItem } from "../TeliMenu";

const SimpleMenu = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Open simple menu
      </Button>
      <TeliMenu open={open} onClose={handleClose}>
        <TeliMenuItem>First item</TeliMenuItem>
        <TeliMenuItem>Second item</TeliMenuItem>
      </TeliMenu>
    </>
  );
};

export default SimpleMenu;
