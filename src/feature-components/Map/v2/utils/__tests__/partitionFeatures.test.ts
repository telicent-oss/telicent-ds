import Feature from "ol/Feature";
import { partitionFeatures } from "../partitionFeatures";
import { MalformedFeatureError } from "../errors";

const toFeature = (item: { id: string; bad?: boolean }) => {
  if (item.bad) throw new MalformedFeatureError(item.id, "bad coordinates");
  return new Feature();
};

describe("partitionFeatures", () => {
  it("keeps the items that convert and collects the ones that don't", () => {
    const { features, malformed } = partitionFeatures(
      [{ id: "a" }, { id: "b", bad: true }, { id: "c" }],
      toFeature
    );

    expect(features).toHaveLength(2);
    expect(malformed).toHaveLength(1);
    expect(malformed[0].featureId).toBe("b");
  });

  it("collects a plain TypeError too, naming the feature", () => {
    // What OpenLayers throws on a null vertex, past the converters' first-coordinate check.
    const { features, malformed } = partitionFeatures([{ id: "a" }], () => {
      throw new TypeError("Cannot read properties of null (reading '0')");
    });

    expect(features).toEqual([]);
    expect(malformed).toHaveLength(1);
    expect(malformed[0]).toBeInstanceOf(MalformedFeatureError);
    expect(malformed[0].featureId).toBe("a");
    expect(malformed[0].message).toContain("Cannot read properties of null");
  });

  it("collects a non-Error throw", () => {
    const { malformed } = partitionFeatures([{ id: "a" }], () => {
      throw "just a string";
    });

    expect(malformed[0].featureId).toBe("a");
    expect(malformed[0].message).toContain("just a string");
  });

  it("returns empty results for an empty list", () => {
    const { features, malformed } = partitionFeatures([], toFeature);
    expect(features).toEqual([]);
    expect(malformed).toEqual([]);
  });
});
