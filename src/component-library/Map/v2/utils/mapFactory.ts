import Map from "ol/Map";
import View from "ol/View";
import BaseLayer from "ol/layer/Base";
import { Collection } from "ol";
import { Control } from "ol/control";

export const createMap = ({
  target,
  layers,
  view,
  controls,
}: {
  target: HTMLElement;
  layers: BaseLayer[];
  view: View;
  controls?: Collection<Control>;
}) =>
  new Map({
    target,
    layers,
    view,
    controls,
  });
