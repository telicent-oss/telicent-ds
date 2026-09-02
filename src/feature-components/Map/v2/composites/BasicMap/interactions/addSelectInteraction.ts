import Select from "ol/interaction/Select";
import { click } from "ol/events/condition";
import { Feature, Map as OlMap } from "ol";
import type VectorLayer from "ol/layer/Vector";
import { Stroke, Style } from "ol/style";
import type { StyleFunction } from "ol/style/Style";
import { FeatureEvent } from "../../../types/map-types";

interface AddSelectInteractionOptions {
  map: OlMap;
  layer: VectorLayer;
  onSelect?: (features: Feature[], event?: FeatureEvent) => void;
}

export const addSelectInteraction = ({
  map,
  layer,
  onSelect,
}: AddSelectInteractionOptions): Select => {
  const select = new Select({
    layers: [layer],
    condition: click,
    style: (feat) => {
      const original = feat.get("originalStyle") as Style | Style[] | undefined;
      const baseStyles = Array.isArray(original)
        ? original
        : original
        ? [original]
        : [];
      // Add highlight on top
      return baseStyles;
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
