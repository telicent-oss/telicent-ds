import React from "react";
import { screen } from "@testing-library/dom";
import { setup } from "../../../../test-utils";
import UserProfile from "../UserProfile";

describe("UserProfile", () => {
  test("renders the full name", () => {
    setup(<UserProfile fullName="Test User">contents go here</UserProfile>);
    expect(screen.getByText("Test User")).toBeVisible();
  });

  test("trigger is a real <button> with menu-trigger ARIA state", () => {
    setup(<UserProfile fullName="Test User">contents go here</UserProfile>);
    const trigger = screen.getByRole("button", { name: "User menu" });
    expect(trigger.tagName).toBe("BUTTON");
    expect(trigger).toHaveAttribute("aria-haspopup", "menu");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).not.toHaveAttribute("aria-controls");
  });

  test("ariaLabel prop overrides the default accessible name", () => {
    setup(
      <UserProfile fullName="" ariaLabel="Account menu">
        contents
      </UserProfile>,
    );
    expect(screen.getByRole("button", { name: "Account menu" })).toBeInTheDocument();
  });

  test("`id` prop lands on the trigger and derives the menu id", async () => {
    const { user } = setup(
      <UserProfile id="user-profile" fullName="Test User">
        contents go here
      </UserProfile>,
    );
    const trigger = screen.getByRole("button");
    expect(trigger).toHaveAttribute("id", "user-profile");

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(trigger).toHaveAttribute("aria-controls", "user-profile-menu");
    // Menu is portalled; find it by the derived id.
    expect(document.getElementById("user-profile-menu")).toBeInTheDocument();
  });

  test("keyboard activation opens the menu", async () => {
    const { user } = setup(
      <UserProfile fullName="Test User">
        <div>panel content</div>
      </UserProfile>,
    );
    const trigger = screen.getByRole("button");
    trigger.focus();
    expect(trigger).toHaveFocus();

    await user.keyboard("{Enter}");
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("panel content")).toBeVisible();
  });

  test("falls back to the legacy menu id when `id` is omitted", async () => {
    const { user } = setup(
      <UserProfile fullName="Test User">contents go here</UserProfile>,
    );
    await user.click(screen.getByRole("button"));
    expect(document.getElementById("user-profile-menu")).toBeInTheDocument();
  });

  test("decorative chevron is not announced as a separate button", () => {
    setup(<UserProfile fullName="Test User">contents go here</UserProfile>);
    // Only one button in the a11y tree — the outer trigger. The IconButton
    // chevron is now a `<span>` and aria-hidden.
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });
});
