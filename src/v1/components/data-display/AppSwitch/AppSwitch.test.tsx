import React from "react";
import { setup } from "../../../../test-utils";
import AppSwitch from "./AppSwitch";
import { screen, within } from "@testing-library/dom";

describe("App switch component", () => {
  test("renders apps list", async () => {
    const { user } = setup(
      <AppSwitch
        apps={[
          {
            id: "app-1",
            name: "App 1",
            url: "www.app1.com",
            icon: "www.app1.com/assets/favicon.svg",
          },
          {
            id: "app-2",
            name: "App 2",
            url: "www.app2.com",
            icon: "www.app2.com/assets/favicon.svg",
          },
          {
            id: "app-3",
            name: "App 3",
            url: "www.app3.com",
            icon: "www.app3.com/assets/favicon.svg",
          },
        ]}
      />
    );

    await user.click(screen.getByRole("button", { name: "app-switch" }));

    expect(screen.getAllByRole("menuitem")).toHaveLength(3);
    expect(
      within(screen.getAllByRole("menuitem")[0]).getByRole("link")
    ).toHaveTextContent("App 1");
    expect(
      within(screen.getAllByRole("menuitem")[1]).getByRole("link")
    ).toHaveTextContent("App 2");
    expect(
      within(screen.getAllByRole("menuitem")[2]).getByRole("link")
    ).toHaveTextContent("App 3");
  });

  test("renders error message when schema validation errors", async () => {
    const { user } = setup(
      <AppSwitch
        apps={[
          // @ts-ignore
          {
            id: "app-1",
            name: "App 1",
            icon: "www.app1.com/assets/favicon.svg",
          },
          {
            id: "app-2",
            name: "App 2",
            url: "www.app2.com",
            icon: "www.app2.com/assets/favicon.svg",
          },
        ]}
      />
    );

    await user.click(screen.getByRole("button", { name: "app-switch" }));

    expect(screen.getAllByRole("menuitem")).toHaveLength(2);
    expect(screen.getAllByRole("menuitem")[0]).toHaveTextContent(
      "Misconfiguration error: App Switch library for id app-1url: Required"
    );
  });
});
