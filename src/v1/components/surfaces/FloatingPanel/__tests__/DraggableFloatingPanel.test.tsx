import { screen } from "@testing-library/react";

import { setup as renderWithUser } from "../../../../../test-utils";
import { FloatingPanelProvider } from "../FloatingPanelProvider";
import * as floatingPanelContext from "../useFloatingPanelContext";
import DraggableFloatingPanel from "../DraggableFloatingPanel";

const renderComponent = (count?: number) => {
  return renderWithUser(
    <DraggableFloatingPanel
      title="Geo locations"
      targetId="map"
      count={count}
    />,
    {
      wrapper: (props) => <FloatingPanelProvider {...props} />,
    }
  );
};

describe("Draggable floating panel component", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  })

  test("The toggleMinimised function is called with the value of the targetId prop", async () => {
    const toggleMinimisedMock = jest.fn();
    jest
      .spyOn(floatingPanelContext, "useFloatingPanelContext")
      .mockReturnValue({
        toggleMinimised: toggleMinimisedMock,
        toggleVisibility: jest.fn(),
        get: jest.fn(),
        panels: { map: { visible: true, minimised: false }},
      });

    const { user } = renderComponent();

    await user.click(screen.getByRole("button", { name: "minimise" }));
    expect(toggleMinimisedMock).toHaveBeenCalledWith("map");
  });

  test("renders total count when number is greater than 0", () => {
    jest
      .spyOn(floatingPanelContext, "useFloatingPanelContext")
      .mockReturnValue({
        toggleMinimised: jest.fn(),
        toggleVisibility: jest.fn(),
        get: jest.fn(),
        panels: { map: { visible: true, minimised: false }},
      });
    renderComponent(2);

    expect(screen.getByText("Geo locations")).toBeVisible();
    expect(screen.getByText("(2)")).toBeVisible();
  });
});
