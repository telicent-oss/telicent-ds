import { renderHook } from "@testing-library/react";
import useFloatingPanels from "../useFloatingPanels";
import { FloatingPanelContext } from "../index";

describe("useFloatingPanels hook", () => {
  test("throws error when it's not used inside Floating.Provider", () => {
    // Temporarily suppress console.error
    const originalConsoleError = console.error;
    console.error = jest.fn();

    try {
      renderHook(() => useFloatingPanels());
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe(
          "FloatingPanel.ToggleButton must be used within a FloatingPanel.Provider"
        );
      } else {
        console.error = originalConsoleError;
        throw new Error("Test failed because of a unexpected error");
      }
    }

    // Restore console.error
    console.error = originalConsoleError;
  });

  test("returns panels", () => {
    const { result } = renderHook(() => useFloatingPanels(), {
      wrapper: (props) => (
        <FloatingPanelContext.Provider
          value={{
            panels: {
              map: { visible: true, minimised: false },
              timeline: { visible: false, minimised: false },
            },
            toggleMinimized: jest.fn(),
            toggleVisibility: jest.fn(),
            get: jest.fn(),
          }}
          {...props}
        />
      ),
    });

    expect(result.current.panels).toEqual({
      map: { visible: true, minimised: false },
      timeline: { visible: false, minimised: false },
    });
  });
});
