import React, { forwardRef } from "react";
import MuiToggleButtonGroup, {
  type ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from "@mui/material/ToggleButtonGroup";
import { PILL_GROUP_CLASS } from "../../../tokens";

// WCAG 2.2 AA (ADR-0001): a toggle group needs an accessible name, so a
// screen reader can say what the set controls. MUI leaves both
// attributes optional; the DS requires exactly one, matching `Tabs`.
type AccessibleName =
  | { "aria-label": string; "aria-labelledby"?: never }
  | { "aria-labelledby": string; "aria-label"?: never };

export type ToggleButtonGroupProps = Omit<
  MuiToggleButtonGroupProps,
  "aria-label" | "aria-labelledby"
> &
  AccessibleName & {
    /**
     * Render as a pill group: a bordered well hugging its buttons, with
     * the selected one filled. Without it the group renders MUI's
     * default squared-off segments.
     */
    pill?: boolean;
  };

export const ToggleButtonGroup = forwardRef<HTMLDivElement, ToggleButtonGroupProps>(
  ({ pill, className, ...props }, ref) => (
    <MuiToggleButtonGroup
      ref={ref}
      className={[pill ? PILL_GROUP_CLASS : null, className].filter(Boolean).join(" ") || undefined}
      {...props}
    />
  )
);

ToggleButtonGroup.displayName = "ToggleButtonGroup";

export default ToggleButtonGroup;
