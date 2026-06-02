// jest.mock("ol/control");

import { buildControls } from "../buildControls";

describe("buildControls", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("add zoom and fullscreen controls when enabled", () => {
    const push = jest.fn();
    const createControls = jest.fn().mockReturnValue({ push });
    buildControls(
      {
        showZoom: true,
        showFullScreen: true,
      },
      createControls
    );

    expect(push).toHaveBeenCalledTimes(2);
    expect(push).toHaveBeenCalledWith({ element: null });
    expect(push).toHaveBeenLastCalledWith({ element: null });
  });
});
