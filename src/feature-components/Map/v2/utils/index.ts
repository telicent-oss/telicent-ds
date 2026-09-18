export {};
export * from "./faIconResolver";
export * from "./errors";
// The overlay layer ids BasicMapV2 creates. Exported because setLayerOpacity
// takes one, and hard-coding "path-layer" in an app is not an API.
export { MARKER_LAYER_ID, POLYGON_LAYER_ID, PATH_LAYER_ID } from "./layers";
