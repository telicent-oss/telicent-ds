import { createContext, useContext } from "react";

/**
 * Id namespace shared by a `Tabs` group and its `Tab` children, so each `Tab`
 * derives the `id` / `aria-controls` pair pointing at its `TabPanel` without
 * the callsite hand-rolling mui.com's `a11yProps(index)` helper.
 *
 * Private to this folder. `TabPanel` renders outside the provider — it is a
 * sibling of `Tabs`, not a child — and takes `idPrefix` as a prop instead.
 */
export const TabsIdContext = createContext<string | undefined>(undefined);

export type TabValue = string | number;

export const tabId = (idPrefix: string, value: TabValue) => `${idPrefix}-tab-${value}`;

export const tabPanelId = (idPrefix: string, value: TabValue) => `${idPrefix}-panel-${value}`;

export const useTabsIdPrefix = (): string => {
  const idPrefix = useContext(TabsIdContext);
  if (idPrefix === undefined) {
    throw new Error("<Tab> must be rendered inside <Tabs>.");
  }
  return idPrefix;
};
