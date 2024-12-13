import React, { HTMLAttributes } from "react";
import MUIStack from "@mui/material/Stack";
import MUIBox from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { DownArrowIcon, Text } from "../../data-display";
import { IconButton } from "../../inputs";
import { useFloatingPanelContext } from "../FloatingPanel/useFloatingPanelContext";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * For linking to associated ToggleButtonState
   */
  targetId: string;
  /**
   * 	Panel title.
   */
  title: string;
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
}

const Panel: React.FC<PanelProps> = ({
  count = 0,
  iconBeforeTitle,
  targetId,
  title,
  children,
  dragHandle = null,
  ...props
}) => {
  const theme = useTheme();
  const context = useFloatingPanelContext();

  const visible = (!context.panels[targetId]?.minimised &&
    context.panels[targetId]?.visible);

  const backgroundColor = theme.palette.mode === "dark"
    ? theme.palette.grey[900]
    : theme.palette.grey[300];

  return (
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
        {dragHandle}
        {iconBeforeTitle}
        <Text sx={{ paddingRight: 4 }}>
          {title}
          {count > 0
            ? (
              <span
                css={{ marginLeft: 4, color: theme.palette.primary.main }}
              >
                ({count})
              </span>
            )
            : null}
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
        {!context?.get(targetId, 'minimised') && children}
      </MUIBox>
    </MUIBox>
  );
};

export default Panel;
export type { PanelProps };
