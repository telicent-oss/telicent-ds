/**
 * Names a feature whose `coordinates` could not be converted into geometry.
 *
 * `polygonToOLFeature` and `pathToOLFeature` throw this when the nesting
 * contradicts the declared `type`, rather than handing broken geometry to
 * OpenLayers. BasicMapV2 also wraps anything else a conversion throws in this
 * class, so a null vertex that OpenLayers rejects arrives the same way -- with
 * OpenLayers' own wording in the message. BasicMapV2 catches it per feature, skips that
 * record and passes this error to `onError`, so a consumer can tell a bad
 * record apart from any other failure and read which one it was:
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
