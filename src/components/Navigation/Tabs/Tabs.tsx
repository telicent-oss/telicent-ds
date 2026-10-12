import React, { forwardRef } from "react";
import MuiTabs, { type TabsProps as MuiTabsProps } from "@mui/material/Tabs";
import { PILL_GROUP_CLASS } from "../../../tokens";
import { TabsIdContext } from "./tabsContext";

// WCAG 2.2 AA (ADR-0001): a tablist needs an accessible name. MUI leaves both
// attributes optional; the DS requires exactly one so an unnamed tab set
// cannot compile.
type AccessibleName =
  | { "aria-label": string; "aria-labelledby"?: never }
  | { "aria-labelledby": string; "aria-label"?: never };

export type TabsProps = Omit<MuiTabsProps, "aria-label" | "aria-labelledby"> &
  AccessibleName & {
    /**
     * Namespace for the `id` / `aria-controls` / `aria-labelledby` triple the
     * DS wires between each `Tab` and its `TabPanel`. Unique per tab set on the
     * page, and repeated on this group's `TabPanel`s.
     */
    idPrefix: string;
    /**
     * Render as a pill group: a bordered well hugging its tabs, the
     * selected tab filled, and no underline indicator.
     *
     * A boolean rather than a `variant` value — MUI's `Tabs` already owns
     * `variant` for `standard | scrollable | fullWidth`, and MUI v5's
     * theme `variants` support does not cover `MuiTabs`.
     */
    pill?: boolean;
  };

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ idPrefix, pill, className, children, ...props }, ref) => (
    <TabsIdContext.Provider value={idPrefix}>
      <MuiTabs
        ref={ref}
        className={[pill ? PILL_GROUP_CLASS : null, className].filter(Boolean).join(" ") || undefined}
        {...props}
      >
        {children}
      </MuiTabs>
    </TabsIdContext.Provider>
  )
);

Tabs.displayName = "Tabs";

export default Tabs;
