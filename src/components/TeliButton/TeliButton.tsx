import React, { forwardRef } from "react";
import { Tooltip } from "@mui/material";

import TeliButtonBase, { TeliButtonBaseProps } from "./TeliButtonBase";
import "./teliButton.css";

export interface TeliButtonProps extends TeliButtonBaseProps {
  /**
   * Tooltip contents
   */
  tooltip?: string;
  /**
   * Tooltip placement.
   * @default bottom
   */
  tooltipPlacement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
}
const TeliButton = forwardRef<HTMLButtonElement, TeliButtonProps>(
  ({ tooltip, tooltipPlacement = "bottom", ...btnProps }, ref) => {
    if (tooltip) {
      return (
        <Tooltip
          arrow
          title={tooltip}
          placement={tooltipPlacement}
          PopperProps={{
            disablePortal: true,
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -4],
                },
              },
            ],
          }}
        >
          <TeliButtonBase ref={ref} {...btnProps} />
        </Tooltip>
      );
    }

    return <TeliButtonBase ref={ref} {...btnProps} />;
  }
);

export default TeliButton;
