import { ensureView } from "../ensureView";

describe("ensureView", () => {
  test("generate view using default values", () => {
    expect(ensureView()).toEqual({
      center: [0, 0],
      opts: {
        constrainResolution: false,
        center: [0, 0],
        minZoom: 0,
        projection: "EPSG:3857",
        zoom: 2,
      },
      zoom: 2,
    });
  });

  test("generate view using passed values", () => {
    expect(ensureView(3, [1, 1])).toEqual({
      center: [1, 1],
      opts: {
        constrainResolution: false,
        center: [1, 1],
        minZoom: 0,
        projection: "EPSG:3857",
        zoom: 3,
      },
      zoom: 3,
    });
  });
});
