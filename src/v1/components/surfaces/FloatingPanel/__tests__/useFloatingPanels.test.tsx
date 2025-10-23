import { renderHook } from "@testing-library/react";
import { FloatingPanelContext } from "../FloatingPanelProvider";
import useFloatingPanels from "../useFloatingPanels";

describe("useFloatingPanels custom hook", () => {
  test("returns panels array", () => {
    const { result } = renderHook(() => useFloatingPanels(), {
      wrapper: (props) => (
        <FloatingPanelContext.Provider
          value={{
            panels: {
              map: { visible: true, minimised: false },
              timeline: { visible: false, minimised: false },
            },

            toggleVisibility: jest.fn(),
            get: jest.fn(),
          }}
          {...props}
        />
      ),
    });

    expect(result.current.panels).toEqual(["map", "timeline"]);
  });
});
