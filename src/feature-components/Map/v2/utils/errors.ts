/**
 * A feature whose `coordinates` could not be converted into geometry.
 * `featureId` is that feature's id.
 */
export class MalformedFeatureError extends Error {
  readonly featureId: string;

  constructor(featureId: string, message: string) {
    super(message);
    this.name = "MalformedFeatureError";
    this.featureId = featureId;
    Object.setPrototypeOf(this, MalformedFeatureError.prototype);
  }
}
