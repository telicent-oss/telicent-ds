import { screen } from "@testing-library/react";
import FloatingPanelToggleButton from "../FloatingPanelToggleButton";
import { FloatingPanelProvider } from "../FloatingPanelProvider";
import * as floatingPanelContext from "../useFloatingPanelContext";
import { setup as renderWithUser } from "../../../../../test-utils";

describe("Floating Panel Toggle Button component", () => {
  test("toggleVisible gets called with value of the id prop", async () => {
    const toggleVisibilityMock = jest.fn();
    jest.spyOn(floatingPanelContext, "useFloatingPanelContext").mockReturnValue({
      toggleVisibility: toggleVisibilityMock,
      get: jest.fn(),
      panels: {},
    });

    const { user } = renderWithUser(
      <FloatingPanelToggleButton id="map" value="map1">
        Toggle map
      </FloatingPanelToggleButton>,
      {
        wrapper: (props) => <FloatingPanelProvider {...props} />,
      }
    );

    await user.click(screen.getByRole("button", { name: "Toggle map" }));
    expect(toggleVisibilityMock).toHaveBeenCalledWith("map");

    jest.restoreAllMocks();
  });

  test("updates aria-pressed value", async () => {
    const { user } = renderWithUser(
      <FloatingPanelToggleButton id="map" value="map1">
        Toggle map
      </FloatingPanelToggleButton>,
      {
        wrapper: (props) => <FloatingPanelProvider {...props} />,
      }
    );

    expect(screen.getByRole("button", { name: "Toggle map" })).toHaveAttribute("aria-pressed", "false");
    await user.click(screen.getByRole("button", { name: "Toggle map" }));
    expect(screen.getByRole("button", { name: "Toggle map" })).toHaveAttribute("aria-pressed", "true");
  });
});
