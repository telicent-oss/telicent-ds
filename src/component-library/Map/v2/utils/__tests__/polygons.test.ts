import { polygonToOLFeature } from "../polygons";
import Feature from "ol/Feature";
import Polygon from "ol/geom/Polygon";
import { MultiPolygon } from "ol/geom";
import { PolygonFeature } from "../../types/polygons";

describe("polygonToOLFeature", () => {
  it("creates a Feature with Polygon geometry", () => {
    const polygon: PolygonFeature = {
      id: "poly-1",
      type: "Polygon",
      name: "Test Polygon",
      coordinates: [
        [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 0],
        ],
      ],
    };

    const feature = polygonToOLFeature(polygon);

    expect(feature).toBeInstanceOf(Feature);
    expect(feature.getGeometry()).toBeInstanceOf(Polygon);
    expect(feature.getId()).toBe("poly-1");
  });

  it("creates a Feature with MultiPolygon geometry", () => {
    const polygon: PolygonFeature = {
      id: "mpoly-1",
      type: "MultiPolygon",
      name: "Multi Polygon",
      coordinates: [
        [
          [
            [0, 0],
            [1, 0],
            [1, 1],
            [0, 0],
          ],
        ],
        [
          [
            [2, 2],
            [3, 2],
            [3, 3],
            [2, 2],
          ],
        ],
      ],
    };

    const feature = polygonToOLFeature(polygon);

    expect(feature).toBeInstanceOf(Feature);
    expect(feature.getGeometry()).toBeInstanceOf(MultiPolygon);
    expect(feature.getId()).toBe("mpoly-1");
  });

  it("spreads meta onto the feature", () => {
    const polygon: PolygonFeature = {
      id: "poly-meta",
      type: "Polygon",
      name: "Meta Polygon",
      coordinates: [
        [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 0],
        ],
      ],
      meta: { region: "europe" },
    };

    const feature = polygonToOLFeature(polygon);

    expect(feature.get("region")).toBe("europe");
  });

  it("does not set id when not provided", () => {
    const polygon = {
      type: "Polygon",
      name: "No ID",
      coordinates: [
        [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 0],
        ],
      ],
    } as PolygonFeature;

    const feature = polygonToOLFeature(polygon);

    expect(feature.getId()).toBeUndefined();
  });
});
