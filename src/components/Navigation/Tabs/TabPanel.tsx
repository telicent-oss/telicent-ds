import React, { forwardRef } from "react";
import { tabId, tabPanelId, type TabValue } from "./tabsContext";

export type TabPanelProps = Omit<React.HTMLAttributes<HTMLDivElement>, "hidden"> & {
  /** Matches the `idPrefix` on this group's `Tabs`. */
  idPrefix: string;
  /** This panel's own value. */
  value: TabValue;
  /** The tab set's selected value — the same state `Tabs` receives. */
  activeValue: TabValue;
  /**
   * Keep this panel's children mounted while it is hidden. Off by default, so
   * an inactive panel costs nothing; on when the panel holds form state worth
   * preserving across tab switches.
   */
  keepMounted?: boolean;
};

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ idPrefix, value, activeValue, keepMounted = false, children, ...props }, ref) => {
    const selected = value === activeValue;

    // The element renders in both states so the matching `Tab`'s
    // `aria-controls` always resolves to a real node; only the children are
    // conditional.
    return (
      <div
        ref={ref}
        role="tabpanel"
        hidden={!selected}
        id={tabPanelId(idPrefix, value)}
        aria-labelledby={tabId(idPrefix, value)}
        // WAI-ARIA APG makes the panel a tab stop so keyboard users can reach
        // panels holding no focusable element. mui.com's copy-paste
        // `CustomTabPanel` omits this.
        tabIndex={0}
        {...props}
      >
        {(selected || keepMounted) && children}
      </div>
    );
  }
);

TabPanel.displayName = "TabPanel";

export default TabPanel;
