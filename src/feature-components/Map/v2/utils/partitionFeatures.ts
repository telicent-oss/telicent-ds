import Feature from "ol/Feature";
import { MalformedFeatureError } from "./errors";

export interface PartitionedFeatures {
  features: Feature[];
  malformed: MalformedFeatureError[];
}

/**
 * Converts a list of feature configs, keeping the ones that convert and
 * collecting the ones that don't.
 *
 * Every failure is collected, not only `MalformedFeatureError`. The converters
 * check the nesting of the first coordinate, but OpenLayers throws a plain
 * `TypeError` on a null vertex further in.
 *
 * A failure that isn't a `MalformedFeatureError` says so in its message,
 * because the cause may be a defect in the converter rather than bad data.
 */
export const partitionFeatures = <T extends { id: string }>(
  items: T[],
  toFeature: (item: T) => Feature
): PartitionedFeatures => {
  const features: Feature[] = [];
  const malformed: MalformedFeatureError[] = [];

  for (const item of items) {
    try {
      features.push(toFeature(item));
    } catch (error) {
      if (error instanceof MalformedFeatureError) {
        malformed.push(error);
        continue;
      }
      const message = error instanceof Error ? error.message : String(error);
      malformed.push(
        new MalformedFeatureError(
          item.id,
          `Feature "${item.id}": conversion failed, which may be a defect in the map rather than a bad record. ${message}`
        )
      );
    }
  }

  return { features, malformed };
};
