import { screen } from "@testing-library/react";
import AppInfo from "../AppInfo";
import AppInfoRow from "../AppInfoRow";
import { setup } from "../../../../test-utils";

describe("AppInfo", () => {
  test("renders the trigger with the default accessible name", () => {
    setup(<AppInfo />);

    expect(
      screen.getByRole("button", { name: "App information" })
    ).toBeInTheDocument();
  });

  test("popover is closed by default", () => {
    setup(<AppInfo />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("opens on click and renders composed children", async () => {
    const { user } = setup(
      <AppInfo>
        <AppInfoRow label="Version" value="1.16.0" />
      </AppInfo>
    );

    await user.click(screen.getByRole("button", { name: "App information" }));

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(await screen.findByText("1.16.0")).toBeInTheDocument();
  });

  test("closes on Escape", async () => {
    const { user } = setup(<AppInfo />);

    await user.click(screen.getByRole("button", { name: "App information" }));
    expect(await screen.findByRole("dialog")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("renders arbitrary children inside the open dialog", async () => {
    const { user } = setup(
      <AppInfo>
        <div id="extra">extra</div>
      </AppInfo>
    );

    await user.click(screen.getByRole("button", { name: "App information" }));

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toContainElement(screen.getByTestId("extra"));
  });

  test("custom id prop is applied to the trigger", () => {
    setup(<AppInfo id="foo" />);

    expect(
      screen.getByRole("button", { name: "App information" })
    ).toHaveAttribute("id", "foo-trigger");
  });

  test("aria-expanded reflects the open state", async () => {
    const { user } = setup(<AppInfo />);

    const trigger = screen.getByRole("button", { name: "App information" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });
});
