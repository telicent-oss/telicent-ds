import { cleanup, screen } from "@testing-library/react";
import React from "react";

import { setup } from "../../../test-utils";
import { Menu } from "./Menu";

describe("Menu", () => {
  afterEach(cleanup);

  it("does not warn about Fragment children when options include a divider", async () => {
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    const { user } = setup(
      <Menu
        aria-label="test-menu"
        menuId="test-menu"
        options={[
          { id: "edit", label: "Edit" },
          { id: "delete", label: "Delete", dividerAbove: true },
        ]}
        button={(btnProps) => (
          <button type="button" {...btnProps}>
            open
          </button>
        )}
      />,
    );

    await user.click(screen.getByRole("button", { name: "open" }));
    await screen.findByRole("menu");

    const fragmentWarning = errorSpy.mock.calls.find(
      ([msg]) =>
        typeof msg === "string" &&
        msg.includes("Menu component doesn't accept a Fragment"),
    );
    expect(fragmentWarning).toBeUndefined();

    errorSpy.mockRestore();
  });
});
