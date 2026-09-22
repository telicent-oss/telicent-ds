import Feature from "ol/Feature";
import { MalformedFeatureError } from "./errors";

export interface PartitionedFeatures {
  features: Feature[];
  malformed: MalformedFeatureError[];
}

/**
 * Converts each item. Returns the converted features and one
 * `MalformedFeatureError` per item that failed. Any thrown error counts as a failure.
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
