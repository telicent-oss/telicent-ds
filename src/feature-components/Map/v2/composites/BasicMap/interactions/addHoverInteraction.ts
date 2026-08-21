import { Map as OlMap } from "ol";
import BaseLayer from "ol/layer/Base";
import VectorLayer from "ol/layer/Vector";
import type { EventsKey } from "ol/events";
import { unByKey } from "ol/Observable";
import { FeatureEvent } from "../../../types/map-types";

interface AddHoverInteractionOptions {
  map: OlMap;
  layer: VectorLayer;
  onHover: (id: string | null, event?: FeatureEvent) => void;
}

/**
 * Attaches a pointermove hit-test that reports enter/leave transitions on the
 * given vector layer's features. Fires only when the hovered feature id
 * changes — moving within the same feature does not re-fire. Returns a
 * detach function.
 */
export const addHoverInteraction = ({
  map,
  layer,
  onHover,
}: AddHoverInteractionOptions): (() => void) => {
  let lastId: string | null = null;

  const key: EventsKey = map.on("pointermove", (evt) => {
    if (evt.dragging) return;

    let currentId: string | null = null;
    map.forEachFeatureAtPixel(
      evt.pixel,
      (feat) => {
        const id = feat.getId?.();
        if (typeof id === "string") {
          currentId = id;
          return true;
        }
        return false;
      },
      { layerFilter: (l: BaseLayer) => l === layer }
    );

    if (currentId === lastId) return;

    lastId = currentId;
    if (currentId === null) {
      onHover(null);
    } else {
      onHover(currentId, { pixel: [evt.pixel[0], evt.pixel[1]] });
    }
  });

  return () => unByKey(key);
};
