/**
 * Thrown when a feature's `coordinates` nesting doesn't match its declared
 * `type` — a config mistake rather than a recoverable runtime condition.
 *
 * Thrown while the map builds its features during render, so it propagates to
 * the nearest error boundary. Exported from the package so a consumer boundary
 * can tell it apart from any other render failure:
 *
 * ```ts
 * if (error instanceof MalformedFeatureError) { ... }
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
