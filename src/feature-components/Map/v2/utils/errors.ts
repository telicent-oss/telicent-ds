/**
 * Names a feature whose `coordinates` could not be converted into geometry; thrown by `polygonToOLFeature`, `pathToOLFeature` and `partitionFeatures`.
 */
export class MalformedFeatureError extends Error {
  readonly featureId: string;

  constructor(featureId: string, message: string) {
    super(message);
    this.name = "MalformedFeatureError";
    this.featureId = featureId;
    // Without this, `instanceof` returns false once compiled down to ES5.
    Object.setPrototypeOf(this, MalformedFeatureError.prototype);
  }
}
