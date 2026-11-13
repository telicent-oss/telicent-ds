import {
  defaults as olDefaultControls,
  FullScreen,
  Rotate,
  Zoom,
} from "ol/control";

import { MapControlsConfig } from "../types";

const createDefaultControls = () =>
  olDefaultControls({
    zoom: false,
    rotate: false,
    attribution: true,
    // Credits start open (OSM licence); users can still collapse them.
    attributionOptions: { collapsed: false },
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
