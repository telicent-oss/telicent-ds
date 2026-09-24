import React from "react";
import { setup } from "../../../test-utils";
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
      />,
    );

    await user.click(screen.getByRole("button", { name: "app-switch" }));

    expect(screen.getAllByRole("menuitem")).toHaveLength(3);

    expect(screen.getByRole("heading", { name: "APP 1" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "APP 2" })).toBeInTheDocument();
  });

  test("prefers theme-aware icon over legacy icon field", async () => {
    const { user } = setup(
      <AppSwitch
        apps={[
          {
            id: "app-1",
            name: "App 1",
            url: "www.app1.com",
            icon: "www.app1.com/legacy.svg",
            iconLight: "www.app1.com/light.svg",
            iconDark: "www.app1.com/dark.svg",
          },
        ]}
      />,
    );

    await user.click(screen.getByRole("button", { name: "app-switch" }));

    const icon = screen.getByRole("img", { name: "App 1 icon" });
    expect(icon).toHaveAttribute("src", "www.app1.com/light.svg");
  });

  test("falls back to legacy icon when theme-aware variants are absent", async () => {
    const { user } = setup(
      <AppSwitch
        apps={[
          {
            id: "app-1",
            name: "App 1",
            url: "www.app1.com",
            icon: "www.app1.com/legacy.svg",
          },
        ]}
      />,
    );

    await user.click(screen.getByRole("button", { name: "app-switch" }));

    const icon = screen.getByRole("img", { name: "App 1 icon" });
    expect(icon).toHaveAttribute("src", "www.app1.com/legacy.svg");
  });

  test("renders name only when no icon is provided", async () => {
    const { user } = setup(
      <AppSwitch
        apps={[
          {
            id: "app-1",
            name: "App 1",
            url: "www.app1.com",
          },
        ]}
      />,
    );

    await user.click(screen.getByRole("button", { name: "app-switch" }));

    expect(screen.getByRole("heading", { name: "APP 1" })).toBeInTheDocument();
    expect(screen.queryByRole("img", { name: "App 1 icon" })).not.toBeInTheDocument();
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
      />,
    );

    await user.click(screen.getByRole("button", { name: "app-switch" }));

    expect(screen.getAllByRole("menuitem")).toHaveLength(2);
    expect(screen.getAllByRole("menuitem")[0]).toHaveTextContent(
      "Misconfiguration error: App Switch library for id app-1url: Required",
    );
  });
});
