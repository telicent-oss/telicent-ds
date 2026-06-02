import React from "react";
import MUIToggleButton, {
  ToggleButtonProps as MUIToggleButtonProps,
} from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
import MUITooltip from "@mui/material/Tooltip";

const StyledToggleButton = styled(MUIToggleButton)({
  border: 0,
});

export interface TooltipToggleButtonProps
  extends Omit<
    MUIToggleButtonProps,
    "sx" | "classes" | "color"
  > {
  /**
   * Tooltip text
   */
  tooltip?: string;
}

const TooltipToggleButton: React.FC<TooltipToggleButtonProps> = ({
  tooltip,
  onClick,
  selected,
  children,
  ...props
}) => (
  <MUITooltip
    title={tooltip ?? ""}
    placement="bottom"
    PopperProps={{
      modifiers: [
        {
          name: "offset",
          options: { offset: [0, -10] },
        },
      ],
    }}
  >
    <StyledToggleButton
      color="primary"
      onClick={onClick}
      selected={selected}
      {...props}
    >
      {children}
    </StyledToggleButton>
  </MUITooltip>
);

export default TooltipToggleButton;

