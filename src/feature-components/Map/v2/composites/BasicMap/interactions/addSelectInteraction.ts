import Select from "ol/interaction/Select";
import { click } from "ol/events/condition";
import { Feature, Map as OlMap } from "ol";
import type VectorLayer from "ol/layer/Vector";
import { FeatureEvent } from "../../../types/map-types";

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
    // OpenLayers applies a Select style by calling setStyle() on the selected
    // feature, which overrides its layer's style. Any style here would beat
    // BasicMapV2's pathStyle prop the instant a path was clicked, so selection
    // is reported through onSelect only and appearance stays with the layer.
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
