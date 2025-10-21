import { screen } from "@testing-library/react";

import { setup as renderWithUser } from "../../../../../test-utils";
import { FloatingPanelProvider } from "../../FloatingPanel/FloatingPanelProvider";
import * as floatingPanelContext from "../../FloatingPanel/useFloatingPanelContext";
import FixedPanel from "../FixedPanel";

const renderComponent = (count?: number) => {
  return renderWithUser(<FixedPanel title="Geo locations" targetId="map" count={count} />, {
    wrapper: (props) => <FloatingPanelProvider {...props} />,
  });
};

describe("Fixed panel component", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("renders total count when number is greater than 0", () => {
    jest.spyOn(floatingPanelContext, "useFloatingPanelContext").mockReturnValue({
      toggleVisibility: jest.fn(),
      get: jest.fn(),
      panels: { map: { visible: true, minimised: false } },
    });
    renderComponent(2);

    expect(screen.getByText("Geo locations")).toBeVisible();
    expect(screen.getByText("(2)")).toBeVisible();
  });

  test("the panel should not be visible if visible is false", () => {
    jest.spyOn(floatingPanelContext, "useFloatingPanelContext").mockReturnValue({
      toggleVisibility: jest.fn(),
      get: jest.fn(),
      panels: { map: { visible: false, minimised: false } },
    });

    renderComponent();
    expect(screen.getByText("Geo locations")).not.toBeVisible();
  });

  test("the panel should not be visible if minimised is true", () => {
    jest.spyOn(floatingPanelContext, "useFloatingPanelContext").mockReturnValue({
      toggleVisibility: jest.fn(),
      get: jest.fn(),
      panels: { map: { visible: true, minimised: true } },
    });

    renderComponent();

    expect(screen.getByText("Geo locations")).not.toBeVisible();
  });
  test("the panel should be visible if visible is true and minimised is false", () => {
    jest.spyOn(floatingPanelContext, "useFloatingPanelContext").mockReturnValue({
      toggleVisibility: jest.fn(),
      get: jest.fn(),
      panels: { map: { visible: true, minimised: false } },
    });

    renderComponent();

    expect(screen.getByText("Geo locations")).toBeVisible();
  });
});
