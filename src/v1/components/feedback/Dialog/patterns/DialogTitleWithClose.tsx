// ignore story-coverage.test.ts
// See Dialog.stories.tsx
import * as React from "react";
import Box from "@mui/material/Box";
import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { Button, type ButtonProps, CloseIcon } from "../../../../../export";

import { DialogTitle, type DialogTitleProps } from "../Dialog";

type SxObj = SystemStyleObject<Theme>;
type SxFn = (theme: Theme) => SxObj;
type SlotSx = SxObj | SxFn;

const resolveSx = (sx: SlotSx, theme: Theme): SxObj =>
  typeof sx === "function" ? sx(theme) : sx;

const mergeSx = (base: SlotSx, extra?: SlotSx): SxFn => {
  if (!extra) return (theme) => resolveSx(base, theme);
  return (theme) => ({
    ...resolveSx(base, theme),
    ...resolveSx(extra, theme),
  });
};

const baseRootSx: SlotSx = {
  display: "flex",
  alignItems: "baseline",
  gap: 1,
  px: 2,
  py: 2,
  typography: "subtitle1",
};

const baseTitleSx: SlotSx = {
  m: 0,
  p: 0,
  flex: 1,
  minWidth: 0,
  overflowWrap: "anywhere",
  typography: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  letterSpacing: "inherit",
  fontWeight: 700,
};

const baseCloseButtonSx: SlotSx = (theme) => ({
  minWidth: 0,
  p: 0,
  ml: "auto",
  color: theme.palette.grey[500],
  textTransform: "none",
  typography: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  letterSpacing: "inherit",
  fontWeight: "inherit",
  "& .MuiButton-endIcon": { ml: 0.5 },
  "& .MuiSvgIcon-root": { fontSize: "1em" },
});

export type DialogTitleWithCloseProps = {
  id: string;
  title: React.ReactNode;
  onClose: () => void;

  closeLabel?: React.ReactNode;
  closeAriaLabel?: string;
  closeIcon?: React.ReactNode;

  rootSx?: SlotSx;
  titleSx?: SlotSx;
  closeButtonSx?: SlotSx;

  dialogTitleProps?: Omit<DialogTitleProps, "id" | "children" | "sx">;
  closeButtonProps?: Omit<
    ButtonProps,
    "variant" | "onClick" | "sx" | "children" | "endIcon" | "aria-label"
  >;
};

// WARNING: This is a reference implementation, not a fully vetted DS component.
// It may not be appropriate for composition in every scenario.
// Read the warning in Dialog.stories.tsx before adopting it.
export const DialogTitleWithClose = ({
  id,
  title,
  onClose,
  closeLabel = "Close",
  closeAriaLabel = "close",
  closeIcon = <CloseIcon />,
  rootSx,
  titleSx,
  closeButtonSx,
  dialogTitleProps,
  closeButtonProps,
}: DialogTitleWithCloseProps) => (
  <Box sx={mergeSx(baseRootSx, rootSx)}>
    <DialogTitle
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...dialogTitleProps}
      id={id}
      sx={mergeSx(baseTitleSx, titleSx)}
    >
      {title}
    </DialogTitle>

    <Button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...closeButtonProps}
      variant="text"
      aria-label={closeAriaLabel}
      onClick={onClose}
      endIcon={closeIcon}
      sx={mergeSx(baseCloseButtonSx, closeButtonSx)}
    >
      {closeLabel}
    </Button>
  </Box>
);
