import { renderHook } from "@testing-library/react";
import useFloatingPanelContext from "../useFloatingPanelContext";

describe("useFloatingPanels hook", () => {
  test("throws error when it's not used inside Floating.Provider", () => {
    // Temporarily suppress console.error
    const originalConsoleError = console.error;
    console.error = jest.fn();

    try {
      renderHook(() => useFloatingPanelContext());
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
});
