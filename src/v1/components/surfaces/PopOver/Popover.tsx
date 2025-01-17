import React from "react";
import { useTheme } from "@mui/material";
import MUIPopOver, {
  PopoverProps as MUIPopOverProps,
  PopoverOrigin,
  PopoverPosition,
  PopoverReference,
} from "@mui/material/Popover";
import { ModalProps } from "../../utils";
export interface PopOverProps extends Omit<ModalProps, "children"> {
  /**
   * Used to set the position of the pop over
   */
  anchorEl?: MUIPopOverProps["anchorEl"];
  /**
   * Anchor element anchor. This is the point on the anchor where the pop over's
   * `anchorEl` will attach to. Should not e used when anchorReference is
   * 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin?: PopoverOrigin;
  /**
   * This is the position that may be used to set the position of the pop over.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition?: PopoverPosition;
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the pop over.
   * @default 'anchorEl'
   */
  anchorReference?: PopoverReference;
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  // onClose?: MUIModalProps["onClose"];
  /**
   * If `true`, the component is shown.
   */
  open: boolean;
  /**
   * This is the point on the pop over which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin?: PopoverOrigin;
  width?: number;
}

/**
 * A PopOver can be used to display some content on top of another.
 *
 * Things to know when using the PopOver component:
 * - The component is built on top of the Modal component.
 */
const PopOver = (props: PopOverProps) => {
  const theme = useTheme();

  return (
    <MUIPopOver
      elevation={3}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: theme.palette.mode === "dark" ? "#2A2A2A" : "#eee",
            backgroundImage: "none",
            width: props.width,
            padding: 2,
          },
        },
      }}
      {...props}
    />
  );
};

export default PopOver;
