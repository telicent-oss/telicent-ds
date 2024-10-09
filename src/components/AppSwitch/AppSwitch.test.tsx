import React from "react";
import { render, screen } from "@testing-library/react";

import AppSwitch from "./AppSwitch";
import { appsArray } from "./appsArray";
import { setup } from "../../test-utils";

const missingUrlApps = [
  {
    name: "search",
    url: " ",
  },
];

describe("AppSwitch", () => {
  test("does not render components when apps is undefined or empty", () => {
    const { container, rerender } = render(<AppSwitch />);
    expect(container).toBeEmptyDOMElement();

    rerender(<AppSwitch apps={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("should render apps button", () => {
    render(<AppSwitch apps={appsArray} />);
    expect(screen.getByRole("button", { name: /apps/i })).toBeInTheDocument();
  });

  test("should render all the apps when clicked", async () => {
    const { user } = setup(<AppSwitch apps={appsArray} />);

    await user.click(screen.getByRole("button", { name: /apps/i }));
    expect(screen.getByRole("link", { name: /search/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /graph/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /geo/i })).toBeInTheDocument();
  });

  test("Don't render apps that don't have a url", async () => {
    const { user } = setup(<AppSwitch apps={missingUrlApps} />);

    await user.click(screen.getByRole("button", { name: /apps/i }));

    expect(
      screen.queryByRole("link", { name: /search/i })
    ).not.toBeInTheDocument();
  });
});
