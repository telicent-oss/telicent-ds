import Select from "ol/interaction/Select";
import { click } from "ol/events/condition";
import { Feature, Map as OlMap } from "ol";
import type VectorLayer from "ol/layer/Vector";
import { FeatureEvent } from "../../../types/map-types";

interface AddSelectInteractionOptions {
  map: OlMap;
  /** Every selectable layer; one Select spans all of them. */
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
    // A style here is applied via feature.setStyle() and overrides the layer's own style; null leaves appearance to the layer.
    style: null,
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
