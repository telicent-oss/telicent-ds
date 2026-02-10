import React, { HTMLAttributes } from "react";
import MUIStack from "@mui/material/Stack";
import MUIBox from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { Text, XIcon } from "../../data-display";
import { IconButton } from "../../buttons";
import { useFloatingPanelContext } from "./useFloatingPanelContext";
import { FlexBox } from "../../layout";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * For linking to associated ToggleButtonState
   */
  targetId: string;
  /**
   * 	Panel title.
   */
  title: string;
  width?: string;
  /**
   * Total number of items
   */
  count?: number;
  /**
   * Component content
   */
  children?: React.ReactNode;
  /**
   *
   */
  dragHandle?: React.ReactNode;
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
  menu?: any;
}

const Panel: React.FC<PanelProps> = ({
  count = 0,
  iconBeforeTitle,
  targetId,
  title,
  children,
  width,
  dragHandle = null,
  menu,
  ...props
}) => {
  const theme = useTheme();
  const context = useFloatingPanelContext();

  const visible = context.panels[targetId]?.visible;

  // const backgroundColor = theme.palette.mode === "dark" ? theme.palette.grey[900] : theme.palette.grey[300];

  const backgroundColor = "#2D2D2D";

  return (
    <MUIBox
      sx={{
        width: "100%",
        height: "100%",
        visibility: visible ? "visible" : "hidden",
        backgroundColor,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
      {...props}
    >
      <MUIStack
        direction="row"
        spacing={1}
        padding={1}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor,
          width: "100%",
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          flex: "0 0 auto",
        }}
      >
        <FlexBox direction="row" gap={1} alignItems="center" className="drag-handle" sx={{ cursor: "move" }}>
          {dragHandle}
          {iconBeforeTitle}
          <Text sx={{ paddingRight: 4 }}>
            {title}
            {count > 0 ? <span css={{ marginLeft: 4, color: theme.palette.primary.main }}>({count})</span> : null}
          </Text>
        </FlexBox>
        <FlexBox direction="row" gap={1} alignItems="center">
          {menu}
          <IconButton
            size="small"
            onClick={() => context?.toggleVisibility(targetId)}
            color="primary"
            aria-label="close"
          >
            <XIcon fontSize="small" />
          </IconButton>
        </FlexBox>
      </MUIStack>
      <MUIBox
        sx={{
          backgroundColor,
          width: "100%",
          flex: 1,
          minHeight: 0,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          borderTopRightRadius: 4,
          pl: 1,
          pr: 1,
          pb: 1,
        }}
      >
        {children}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "1rem", // w-8
            height: "1rem", // h-8
            borderRight: "2px solid #9CA3AF",
            borderBottom: "2px solid #9CA3AF",
            zIndex: 100,
          }}
        />
      </MUIBox>
    </MUIBox>
  );
};

export default Panel;
export type { PanelProps };
