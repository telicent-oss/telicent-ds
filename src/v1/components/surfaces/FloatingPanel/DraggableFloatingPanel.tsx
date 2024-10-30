import React, { HTMLAttributes, useContext } from "react";
import MUIBox from "@mui/material/Box";
import MUIStack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import { Rnd } from "react-rnd";

import { DownArrowIcon, DragHandleIcon, Text } from "../../data-display";
import { IconButton } from "../../inputs";
import { useFloatingPanelContext } from "./useFloatingPanelContext";

interface DraggableFloatingPanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The id target reference for the toggle button.
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
  icon?: React.ReactNode;
  /**
   * If false, the component will be hidden
   */
  visible?: boolean;
  /**
   * The x and y property is used to set the default position of the component.
   */
  defaultPosition?: { x: number; y: number };
}

const DraggableFloatingPanel: React.FC<DraggableFloatingPanelProps> = ({
  bounds,
  count,
  icon,
  visible = true,
  defaultPosition = { x: 50, y: 150 },
  dragHandleClassName = "drag-handle",
  targetId,
  title,
  children,
  ...props
}) => {
  const theme = useTheme();
  const context = useFloatingPanelContext();

  const backgroundColor =
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.grey[300];

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
      <MUIBox
        sx={{
          width: "fit-content",
          height: "fit-content",
          visibility: visible ? "visible" : "hidden",
        }}
        {...props}
      >
        <MUIStack
          direction="row"
          spacing={1}
          alignItems="center"
          padding={1}
          sx={{
            backgroundColor,
            width: "fit-content",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        >
          <DragHandleIcon
            className={dragHandleClassName}
            sx={{
              fontSize: 14,
              color: theme.palette.grey[400],
              cursor: "move",
            }}
          />
          {icon}
          <Text sx={{ paddingRight: 4 }}>
            {title}
            {count && count > 0 ? (
              <span css={{ marginLeft: 4, color: theme.palette.primary.main }}>
                ({count})
              </span>
            ) : null}
          </Text>
          <IconButton
            size="small"
            onClick={() => context?.toggleMinimised(targetId)}
            color="primary"
            aria-label="minimise"
          >
            <DownArrowIcon />
          </IconButton>
        </MUIStack>
        <MUIBox
          sx={{
            backgroundColor,
            width: "fit-content",
            height: "fit-content",
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            borderTopRightRadius: 4,
            padding: 0.4,
          }}
        >
          {children}
        </MUIBox>
      </MUIBox>
    </Rnd>
  );
};

export default DraggableFloatingPanel;
export type { DraggableFloatingPanelProps };
