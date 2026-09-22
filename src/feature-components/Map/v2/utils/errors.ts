/**
 * Names a feature whose `coordinates` could not be converted into geometry.
 *
 * `polygonToOLFeature` and `pathToOLFeature` throw this when the coordinate
 * nesting contradicts the declared `type`. `partitionFeatures` wraps any other
 * conversion failure in this class too, so a `TypeError` from OpenLayers on a
 * null vertex arrives the same way, carrying OpenLayers' wording in the
 * message. The record is skipped and the error is passed to `onError`:
 *
 * ```ts
 * if (error instanceof MalformedFeatureError) { log(error.featureId); }
 * ```
 */
export class MalformedFeatureError extends Error {
  readonly featureId: string;

  constructor(featureId: string, message: string) {
    super(message);
    this.name = "MalformedFeatureError";
    this.featureId = featureId;
    // Restores the prototype chain when compiled down to ES5, without which
    // `instanceof` returns false.
    Object.setPrototypeOf(this, MalformedFeatureError.prototype);
  }
}
