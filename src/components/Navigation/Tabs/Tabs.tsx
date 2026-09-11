import React, { forwardRef } from "react";
import MuiTabs, { type TabsProps as MuiTabsProps } from "@mui/material/Tabs";
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
  };

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ idPrefix, children, ...props }, ref) => (
    <TabsIdContext.Provider value={idPrefix}>
      <MuiTabs ref={ref} {...props}>
        {children}
      </MuiTabs>
    </TabsIdContext.Provider>
  )
);

Tabs.displayName = "Tabs";

export default Tabs;
