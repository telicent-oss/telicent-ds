import Select from "ol/interaction/Select";
import { click } from "ol/events/condition";
import { Feature, Map as OlMap } from "ol";
import type VectorLayer from "ol/layer/Vector";
import { Stroke, Style } from "ol/style";
import type { StyleFunction } from "ol/style/Style";
import { FeatureEvent } from "../../../types/map-types";
import { getDefaultOverlayStyle } from "../../../utils/layers";

interface AddSelectInteractionOptions {
  map: OlMap;
  /** Every layer whose features are selectable. One Select across all of them,
   *  so an overlap resolves once instead of firing per layer. */
  layers: VectorLayer[];
  onSelect?: (features: Feature[], event?: FeatureEvent) => void;
}

export const addSelectInteraction = ({
  map,
  layers,
  onSelect,
}: AddSelectInteractionOptions): Select => {
  const select = new Select({
    layers,
    condition: click,
    style: (feat, resolution) => {
      const original = feat.get("originalStyle") as Style | Style[] | undefined;
      if (original) return Array.isArray(original) ? original : [original];
      // Polygons carry no per-feature style; they render off the overlay
      // layer's default. A Select style function overrides the layer style,
      // so returning [] here would make a polygon vanish the instant it was
      // clicked. Fall back to that same default instead.
      return (getDefaultOverlayStyle() as StyleFunction)(feat, resolution);
    },
  });

  map.addInteraction(select);

  if (onSelect) {
    select.on("select", (evt) => {
      const selected = evt.selected as Feature[];
      const pixel = evt.mapBrowserEvent?.pixel;
      const event: FeatureEvent | undefined =
        pixel && pixel.length === 2
          ? { pixel: [pixel[0], pixel[1]] }
          : undefined;
      onSelect(selected, event);
    });
  }

  return select;
};
