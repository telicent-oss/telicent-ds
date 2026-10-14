import React from "react";
import MuiBadge, { type BadgeProps as MuiBadgeProps } from "@mui/material/Badge";

export type BadgeProps = MuiBadgeProps;
type BadgeSlot = NonNullable<MuiBadgeProps["slotProps"]>["badge"];

// The badge is decoration: what it counts belongs in the accessible name
// of what it sits on ("Refine, 2 filters applied"), so it is hidden from
// assistive technology by default. A callsite can still set aria-hidden.
const hideFromAssistiveTech = (badge: BadgeSlot): BadgeSlot =>
  typeof badge === "function"
    ? (ownerState) => ({ "aria-hidden": true, ...badge(ownerState) })
    : { "aria-hidden": true, ...badge };

export const Badge: React.FC<BadgeProps> = ({ slotProps, ...props }) => (
  <MuiBadge
    color="primary"
    {...props}
    slotProps={{ ...slotProps, badge: hideFromAssistiveTech(slotProps?.badge) }}
  />
);

export default Badge;
