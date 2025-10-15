// __mocks__/ol/easing.ts

// All easing functions take a number (0–1) and return a number (0–1)
export type EasingFunction = (t: number) => number;

/**
 * No easing, no acceleration
 */
export const linear: EasingFunction = (t) => t;

/**
 * Accelerating from zero velocity
 */
export const easeIn: EasingFunction = (t) => t * t;

/**
 * Decelerating to zero velocity
 */
export const easeOut: EasingFunction = (t) => t * (2 - t);

/**
 * Acceleration until halfway, then deceleration
 */
export const inAndOut: EasingFunction = (t) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

/**
 * Starts fast and ends slowly
 */
export const easeOutQuart: EasingFunction = (t) => 1 - Math.pow(1 - t, 4);

/**
 * Default export (so `import * as easing from "ol/easing"` works)
 */
export default {
  linear,
  easeIn,
  easeOut,
  inAndOut,
  easeOutQuart,
};
