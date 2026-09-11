import { screen } from "@testing-library/react";
import React, { useState } from "react";
import Tabs from "../Tabs";
import Tab from "../Tab";
import TabPanel from "../TabPanel";
import { setup } from "../../../../test-utils";

const TabSet = ({ keepMounted = false }: { keepMounted?: boolean }) => {
  const [tab, setTab] = useState<string>("one");

  return (
    <>
      <Tabs idPrefix="set" aria-label="Test tabs" value={tab} onChange={(_, next) => setTab(next)}>
        <Tab value="one" label="One" />
        <Tab value="two" label="Two" disabled />
      </Tabs>
      <TabPanel idPrefix="set" value="one" activeValue={tab}>
        panel one
      </TabPanel>
      <TabPanel idPrefix="set" value="two" activeValue={tab} keepMounted={keepMounted}>
        panel two
      </TabPanel>
    </>
  );
};

describe("Tabs", () => {
  test("names the tablist from the required accessible name", () => {
    setup(<TabSet />);

    expect(screen.getByRole("tablist", { name: "Test tabs" })).toBeInTheDocument();
  });

  test("wires each tab to its panel from idPrefix and value", () => {
    setup(<TabSet />);

    const tab = screen.getByRole("tab", { name: "One" });
    expect(tab).toHaveAttribute("id", "set-tab-one");
    expect(tab).toHaveAttribute("aria-controls", "set-panel-one");

    const panel = screen.getByRole("tabpanel");
    expect(panel).toHaveAttribute("id", "set-panel-one");
    expect(panel).toHaveAttribute("aria-labelledby", "set-tab-one");
  });

  test("makes the visible panel a tab stop", () => {
    setup(<TabSet />);

    expect(screen.getByRole("tabpanel")).toHaveAttribute("tabindex", "0");
  });

  test("hides the inactive panel and drops its children", () => {
    setup(<TabSet />);

    expect(screen.getByText("panel one")).toBeInTheDocument();
    expect(screen.queryByText("panel two")).not.toBeInTheDocument();
    // The element itself stays, so the inactive tab's aria-controls resolves.
    expect(document.getElementById("set-panel-two")).toBeInTheDocument();
  });

  test("keepMounted holds the inactive panel's children in the tree", () => {
    setup(<TabSet keepMounted />);

    expect(screen.getByText("panel two")).toBeInTheDocument();
    expect(document.getElementById("set-panel-two")).toHaveAttribute("hidden");
  });

  test("selects the clicked tab and swaps the visible panel", async () => {
    const { user } = setup(<TabSet />);

    await user.click(screen.getByRole("tab", { name: "One" }));
    expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveAttribute("id", "set-panel-one");
  });

  test("passes MUI props through to the underlying Tab", () => {
    setup(<TabSet />);

    expect(screen.getByRole("tab", { name: "Two" })).toBeDisabled();
  });

  test("throws when a Tab renders outside Tabs", () => {
    const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});

    expect(() => setup(<Tab value="orphan" label="Orphan" />)).toThrow(
      "<Tab> must be rendered inside <Tabs>."
    );

    consoleError.mockRestore();
  });
});
