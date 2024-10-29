import React, { HTMLAttributes, useContext } from "react";
import MUIBox from "@mui/material/Box";
import MUIStack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import { Rnd } from "react-rnd";

import { DownArrowIcon, DragHandleIcon, Text } from "../../data-display";
import { IconButton } from "../../inputs";
import useFloatingPanelContext from "./useFloatingPanelContext";

interface DraggableFloatingPanelProps extends HTMLAttributes<HTMLDivElement> {
  targetId: string;
  title: string;
  bounds?: "parent" | "window" | "body" | string | Element;
  count?: number;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  visible?: boolean;
  defaultPosition?: { x: number, y: number };
}

const DraggableFloatingPanel: React.FC<DraggableFloatingPanelProps> = ({
  bounds,
  count,
  icon,
  visible = true,
  defaultPosition = { x: 50, y: 150 },
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
      dragHandleClassName="drag-handle"
      default={{ x: defaultPosition.x, y: defaultPosition.y, width: 'auto', height: 'auto' }}
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
            className="drag-handle"
            sx={{
              fontSize: 14,
              color: theme.palette.grey[400],
              cursor: "move",
            }}
          />
          {icon}
          <Text sx={{ paddingRight: 4 }}>
            {title}
            {count && (
              <span css={{ marginLeft: 4, color: theme.palette.primary.main }}>
                ({count})
              </span>
            )}
          </Text>
          <IconButton size="small" onClick={() => context?.toggleMinimized(targetId)} color="primary">
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
