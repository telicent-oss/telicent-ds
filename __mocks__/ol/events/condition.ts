// __mocks__/ol/events/condition.ts
import type { MapBrowserEvent } from "ol/MapBrowserEvent";

/**
 * Each function receives a MapBrowserEvent (or similar) and returns boolean.
 * For tests, we can just return fixed values or evaluate simple properties.
 */

export const always = (_event?: MapBrowserEvent<any>): boolean => true;

export const never = (_event?: MapBrowserEvent<any>): boolean => false;

export const shiftKeyOnly = (event: MapBrowserEvent<any>): boolean =>
  event && !!event.originalEvent?.shiftKey;

export const platformModifierKeyOnly = (
  event: MapBrowserEvent<any>
): boolean => {
  if (!event?.originalEvent) return false;
  const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  const mod = isMac ? event.originalEvent.metaKey : event.originalEvent.ctrlKey;
  return mod && !event.originalEvent.altKey && !event.originalEvent.shiftKey;
};

export const doubleClick = (event: MapBrowserEvent<any>): boolean =>
  event?.type === "dblclick";

export const singleClick = (event: MapBrowserEvent<any>): boolean =>
  event?.type === "singleclick";

export const mouseOnly = (event: MapBrowserEvent<any>): boolean =>
  !event?.originalEvent?.pointerType ||
  event.originalEvent.pointerType === "mouse";

export const primaryAction = (event: MapBrowserEvent<any>): boolean =>
  !event?.originalEvent?.button || event.originalEvent.button === 0;

// Default export so `import * as condition` works
export default {
  always,
  never,
  shiftKeyOnly,
  platformModifierKeyOnly,
  doubleClick,
  singleClick,
  mouseOnly,
  primaryAction,
};
