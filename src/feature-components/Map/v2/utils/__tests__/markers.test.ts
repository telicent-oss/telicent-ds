import { markerToOLFeature, getAnchorFraction, MarkerAnchor } from "../markers";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { getGeneratedOlIcon } from "../../styles/markers";
import { MarkerFeature } from "../../types/markers";

jest.mock("../../styles/markers", () => ({
  getGeneratedOlIcon: jest.fn(() => ({ icon: true })),
}));

describe("getAnchorFraction", () => {
  it("returns correct fractions for each anchor", () => {
    expect(getAnchorFraction(MarkerAnchor.BOTTOM_MIDDLE)).toEqual([0.5, 1]);
    expect(getAnchorFraction(MarkerAnchor.TOP_MIDDLE)).toEqual([0.5, 0]);
    expect(getAnchorFraction(MarkerAnchor.CENTER)).toEqual([0.5, 0.5]);
  });

  it("defaults to CENTER if unknown", () => {
    expect(getAnchorFraction(999 as any)).toEqual([0.5, 0.5]);
  });
});

describe("markerToOLFeature", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("creates a Feature with geometry, id, and style", () => {
    const marker = {
      id: "m1",
      geohash: "u10j4",
      name: "m1",
      style: {
        color: "#FFF",
        backgroundColor: "#000",
        fallbackText: "L",
        markerType: "pin",
      },
    } as MarkerFeature;

    const feature = markerToOLFeature(marker);

    expect(feature).toBeInstanceOf(Feature);

    const geom = feature.getGeometry();
    expect(geom).toBeInstanceOf(Point);

    expect((geom as Point).getCoordinates()).toEqual([
      0.10986328125, 51.52587890625,
    ]);

    // ✅ NEW correct assertion: first argument only
    expect(getGeneratedOlIcon).toHaveBeenCalledWith(
      marker.style,
      expect.any(Feature)
    );
  });

  it("uses default style when none is provided", () => {
    const marker = { id: "m3", geohash: "u10j4" } as MarkerFeature;

    markerToOLFeature(marker);

    expect(getGeneratedOlIcon).toHaveBeenCalledWith(
      { markerType: "pin" },
      expect.any(Feature)
    );
  });
});
