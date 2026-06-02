// src/component-library/Map/v2/utils/__tests__/markerIconLoader.test.ts

import { ensureMarkerIconsLoaded } from "../markerIconLoader";
import { ensureFaIconPath } from "../faIconResolver"; // Adjust this path if needed!

// 1. ADD THIS LINE!
// The path string here must exactly match the path string in the import above.
jest.mock("../faIconResolver");

describe("ensureMarkerIconsLoaded", () => {
  // Clear mocks before each test to prevent test pollution
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("extracts unique icons and awaits their resolution", async () => {
    // 2. Because of jest.mock() above, ensureFaIconPath is now a recognized mock
    (ensureFaIconPath as jest.Mock).mockResolvedValue("M0 0 L10 10 Z");

    const mockMarkers = [
      { style: { faIcon: "fa-solid fa-church" } },
      { style: { faIcon: "fa-solid fa-church" } }, // Duplicate!
      { style: { faIcon: "fa-solid fa-tree" } },
    ] as any;

    await ensureMarkerIconsLoaded(mockMarkers);

    // 3. Assertions
    expect(ensureFaIconPath).toHaveBeenCalledTimes(2); // Should only be called 2 times, not 3!
    expect(ensureFaIconPath).toHaveBeenCalledWith("fa-solid fa-church");
    expect(ensureFaIconPath).toHaveBeenCalledWith("fa-solid fa-tree");
  });
});
