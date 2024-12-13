import React, { HTMLAttributes } from "react";
import { useTheme } from "@mui/material/styles";
import { Rnd } from "react-rnd";

import Panel from "../FixedPanel/FixedPanel"
import { useFloatingPanelContext } from "./useFloatingPanelContext";
import { DragHandleIcon } from "../../data-display";

interface DraggableFloatingPanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * For linking to associated ToggleButtonState
   */
  targetId: string;
  /**
   * 	Panel title.
   */
  title: string;
  /**
   * Specifies movement boundaries. Accepted values:
   *
   * parent restricts movement
   * within the node's offsetParent (nearest node with position relative or
   * absolute), window, body, Selector like .fooClassName or Element.
   */
  bounds?: "parent" | "window" | "body" | string | Element;
  /**
   * Total number of items
   */
  count?: number;
  /**
   * Component content
   */
  children?: React.ReactNode;
  /**
   * Specifies a selector to be used as the handle that initiates drag. Example:
   * drag-handle.
   */
  dragHandleClassName?: string;
  /**
   * The icon to be displayed before the title
   */
  iconBeforeTitle?: React.ReactNode;
  /**
   * The x and y property is used to set the default position of the component.
   */
  defaultPosition?: { x: number; y: number };
}

const DraggableFloatingPanel: React.FC<DraggableFloatingPanelProps> = ({
  bounds,
  defaultPosition = { x: 50, y: 150 },
  dragHandleClassName = "drag-handle",
  targetId,
  children,
  ...props
}) => {
  const context = useFloatingPanelContext();
  const theme = useTheme()

  const visible = (!context.panels[targetId]?.minimised &&
    context.panels[targetId]?.visible);

  const dragHandle = <DragHandleIcon
    className={dragHandleClassName}
    sx={{
      fontSize: 14,
      color: theme.palette.grey[400],
      cursor: "move",
    }}
  />


  return (
    <Rnd
      bounds={bounds}
      enableResizing={false}
      dragHandleClassName={dragHandleClassName}
      default={{
        x: defaultPosition.x,
        y: defaultPosition.y,
        width: "auto",
        height: "auto",
      }}
      css={{
        visibility: visible ? "visible" : "hidden",
      }}
    >
      <Panel targetId={targetId} dragHandle={dragHandle} {...props}>
        {children}
      </Panel>
    </Rnd>
  );
};

export default DraggableFloatingPanel;
export type { DraggableFloatingPanelProps };
