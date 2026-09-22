/**
 * Thrown when a feature's `coordinates` cannot be converted into geometry.
 * `featureId` is the id of the offending record.
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
