import {
  defaults as olDefaultControls,
  Zoom,
  Rotate,
  FullScreen,
} from "ol/control";

import { MapControlsConfig } from "../types";

const createDefaultControls = () =>
  olDefaultControls({
    zoom: false,
    rotate: false,
    attribution: true,
  });

export const buildControls = (
  controls?: Partial<MapControlsConfig>,
  createControls = createDefaultControls
) => {
  const olControls = createControls();

  if (controls?.showZoom) olControls.push(new Zoom());
  if (controls?.showRotate) olControls.push(new Rotate());
  if (controls?.showFullScreen) olControls.push(new FullScreen());

  return olControls;
};
