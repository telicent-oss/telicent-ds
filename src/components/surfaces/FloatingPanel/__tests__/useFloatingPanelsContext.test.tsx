import { act, renderHook } from "@testing-library/react";
import { useFloatingPanelContext } from "../useFloatingPanelContext";
import { FloatingPanelProvider } from "../FloatingPanelProvider";

const renderContext = () => {
  return renderHook(() => useFloatingPanelContext(), {
    wrapper: (props) => <FloatingPanelProvider {...props} />,
  });
};

describe("useFloatingPanels hook", () => {
  test("throws error when it's not used inside Floating.Provider", () => {
    // Temporarily suppress console.error
    const originalConsoleError = console.error;
    console.error = jest.fn();

    try {
      renderHook(() => useFloatingPanelContext());
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe("FloatingPanel.ToggleButton must be used within a FloatingPanel.Provider");
      } else {
        console.error = originalConsoleError;
        throw new Error("Test failed because of a unexpected error");
      }
    }

    // Restore console.error
    console.error = originalConsoleError;
  });

  test("updates visible state when toggleVisibility is called and sets minimised to false by default", () => {
    const { result } = renderContext();

    expect(result.current.get("map", "visible")).toBe(false);

    act(() => {
      result.current.toggleVisibility("map");
    });

    expect(result.current.panels).toEqual({
      map: { minimised: false, visible: true },
    });
    expect(result.current.get("map", "visible")).toBe(true);
  });
});
