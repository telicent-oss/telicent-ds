import { screen } from "@testing-library/react";
import React from "react";
import ToggleButtonGroup from "../ToggleButtonGroup";
import ToggleButton from "../../ToggleButton/ToggleButton";
import { PILL_GROUP_CLASS } from "../../../../tokens";
import { setup } from "../../../../test-utils";

const Group = ({ pill, className }: { pill?: boolean; className?: string }) => (
  <ToggleButtonGroup
    pill={pill}
    className={className}
    exclusive
    value="list"
    aria-label="Result view"
  >
    <ToggleButton value="list" aria-label="List view">
      List
    </ToggleButton>
    <ToggleButton value="map" aria-label="Map view">
      Map
    </ToggleButton>
  </ToggleButtonGroup>
);

describe("ToggleButtonGroup", () => {
  test("names the group from the required accessible name", () => {
    setup(<Group />);
    expect(screen.getByRole("group", { name: "Result view" })).toBeInTheDocument();
  });

  test("marks the pill group so the theme can style it", () => {
    setup(<Group pill />);
    expect(screen.getByRole("group", { name: "Result view" })).toHaveClass(PILL_GROUP_CLASS);
  });

  test("leaves MUI's default group unmarked", () => {
    setup(<Group />);
    expect(screen.getByRole("group", { name: "Result view" })).not.toHaveClass(PILL_GROUP_CLASS);
  });

  test("keeps a caller's className alongside the pill class", () => {
    setup(<Group pill className="caller" />);
    const group = screen.getByRole("group", { name: "Result view" });
    expect(group).toHaveClass(PILL_GROUP_CLASS);
    expect(group).toHaveClass("caller");
  });

  test("passes its children through to MUI", () => {
    setup(<Group pill />);
    expect(screen.getByRole("button", { name: "List view" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(screen.getByRole("button", { name: "Map view" })).toHaveAttribute(
      "aria-pressed",
      "false"
    );
  });
});
