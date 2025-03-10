import { screen, within } from "@testing-library/react";
import FloatingPanelDockItem from "../FloatingPanelDockItem";
import { FloatingPanelProvider } from "../FloatingPanelProvider";
import * as floatingPanelContext from "../useFloatingPanelContext";
import { setup as renderWithUser } from "../../../../../test-utils";

const renderComponent = (count?: number) => {
  return renderWithUser(
    <FloatingPanelDockItem label="Toggle map" targetId="map" count={count} />,
    {
      wrapper: (props) => <FloatingPanelProvider {...props} />,
    }
  );
};

describe("Floating panel dock item component", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("The toggleMinimised function is called with the value of the targetId prop", async () => {
    const toggleMinimisedMock = jest.fn();
    jest
      .spyOn(floatingPanelContext, "useFloatingPanelContext")
      .mockReturnValue({
        toggleMinimised: toggleMinimisedMock,
        toggleVisibility: jest.fn(),
        get: jest.fn(),
        panels: { map: { visible: true, minimised: true } },
      });

    const { user } = renderComponent();

    const listitem = screen.getByRole("listitem");

    await user.click(
      within(listitem).getByRole("button", { name: "Toggle map" })
    );
    expect(toggleMinimisedMock).toHaveBeenCalledWith("map");
  });

  test("renders total count when number is greater than 0", () => {
    jest
      .spyOn(floatingPanelContext, "useFloatingPanelContext")
      .mockReturnValue({
        toggleVisibility: jest.fn(),
        toggleMinimised: jest.fn(),
        get: jest.fn(),
        panels: { map: { visible: true, minimised: true } },
      });
    renderComponent(2);

    const listitem = screen.getByRole("listitem");

    expect(
      within(listitem).getByRole("button", { name: "Toggle map (2)" })
    ).toBeVisible();
  });
});
