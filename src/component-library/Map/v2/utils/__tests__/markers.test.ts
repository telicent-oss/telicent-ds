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

    // Check OpenLayers Feature basics
    expect(feature).toBeInstanceOf(Feature);
    const geom = feature.getGeometry();
    expect(geom).toBeInstanceOf(Point);

    // Verify coordinates (mocked)
    expect((geom as Point).getCoordinates()).toEqual([
      0.10986328125, 51.52587890625,
    ]);

    // Style checks
    expect(getGeneratedOlIcon).toHaveBeenCalledWith({
      markerType: "pin",
      backgroundColor: "#000",
      color: "#FFF",
      fallbackText: "L",
    });
  });

  it("uses default style when none is provided", () => {
    const marker = { id: "m3", geohash: "u10j4" } as MarkerFeature;
    markerToOLFeature(marker);

    expect(getGeneratedOlIcon).toHaveBeenCalledWith({ markerType: "pin" });
  });
});
