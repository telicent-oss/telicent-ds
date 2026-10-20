import { screen } from "@testing-library/react";
import React from "react";
import Badge from "../Badge";
import { setup } from "../../../../test-utils";

const badge = () => screen.getByText("2");

describe("Badge", () => {
  test("hides the count from assistive technology by default", () => {
    setup(
      <Badge badgeContent={2}>
        <span>Host</span>
      </Badge>
    );
    expect(badge()).toHaveAttribute("aria-hidden", "true");
  });

  test("lets a callsite announce the badge", () => {
    setup(
      <Badge badgeContent={2} slotProps={{ badge: { "aria-hidden": false } }}>
        <span>Host</span>
      </Badge>
    );
    expect(badge()).toHaveAttribute("aria-hidden", "false");
  });

  test("keeps the default with a function-form badge slot", () => {
    setup(
      <Badge badgeContent={2} slotProps={{ badge: () => ({ id: "count" }) }}>
        <span>Host</span>
      </Badge>
    );
    expect(badge()).toHaveAttribute("aria-hidden", "true");
    expect(badge()).toHaveAttribute("id", "count");
  });

  test("defaults to the primary colour", () => {
    setup(
      <Badge badgeContent={2}>
        <span>Host</span>
      </Badge>
    );
    expect(badge()).toHaveClass("MuiBadge-colorPrimary");
  });

  test("hides a zero count", () => {
    const { container } = setup(
      <Badge badgeContent={0}>
        <span>Host</span>
      </Badge>
    );
    expect(container.querySelector(".MuiBadge-badge")).toHaveClass("MuiBadge-invisible");
  });
});
