import { ensureView } from "../ensureView";

describe("ensureView", () => {
  test("generate view using default values", () => {
    expect(ensureView()).toEqual({
      center: [0, 0],
      opts: {
        center: [0, 0],
        maxZoom: 18,
        minZoom: 0,
        zoom: 2,
      },
      zoom: 2,
    });
  });

  test("generate view using passed values", () => {
    expect(ensureView(3, [1, 1])).toEqual({
      center: [1, 1],
      opts: {
        center: [1, 1],
        maxZoom: 18,
        minZoom: 0,
        zoom: 3,
      },
      zoom: 3,
    });
  });
});
