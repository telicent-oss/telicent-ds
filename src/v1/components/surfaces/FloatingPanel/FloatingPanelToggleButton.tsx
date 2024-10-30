import React from "react";
import MUIToggleButton, {
  ToggleButtonProps as MUIToggleButtonProps,
} from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
import MUITooltip from "@mui/material/Tooltip";

import { useFloatingPanelContext } from "./useFloatingPanelContext";

const StyledToggleButton = styled(MUIToggleButton)(() => ({
  border: 0,
}));

interface FloatingPanelToggleButtonProps
  extends Omit<
    MUIToggleButtonProps,
    "sx" | "classes" | "color" | "onClick" | "selected"
  > {
  /**
   * The unique identifier
   */
  id: string;
  /**
   * Tooltip title
   */
  tooltip?: string;
}

const FloatingPanelToggleButton: React.FC<FloatingPanelToggleButtonProps> = ({
  tooltip,
  ...props
}) => {
  const context = useFloatingPanelContext();

  return (
    <MUITooltip
      title={tooltip}
      placement="bottom"
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -10],
              },
            },
          ],
        },
      }}
    >
      <StyledToggleButton
        onClick={() => context.toggleVisibility(props.id)}
        selected={context.get(props.id, "visible")}
        color="primary"
        {...props}
      />
    </MUITooltip>
  );
};

export default FloatingPanelToggleButton;
export type { FloatingPanelToggleButtonProps };
