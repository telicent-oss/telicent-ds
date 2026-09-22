import Select from "ol/interaction/Select";
import { click } from "ol/events/condition";
import { Feature, Map as OlMap } from "ol";
import type VectorLayer from "ol/layer/Vector";
import { FeatureEvent } from "../../../types/map-types";

interface AddSelectInteractionOptions {
  map: OlMap;
  /** Every layer whose features are selectable. One Select spans all of them,
   *  and with `multi` false a click on overlapping features selects one. */
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
    // OpenLayers applies a Select style with feature.setStyle(), which
    // overrides the layer's style. Null leaves appearance to the layer and
    // reports selection through onSelect only.
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
