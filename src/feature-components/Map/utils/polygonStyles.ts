import { FillLayer, LineLayer, SymbolLayer } from "react-map-gl";

const polygon: FillLayer = {
  id: "polygon",
  type: "fill",
  source: "polygon",
  layout: {},
  paint: {
    "fill-color": "#059ec0",
    "fill-opacity": 0.4,
  },
};

const polygonOutline: LineLayer = {
  id: "outline",
  type: "line",
  source: "polygon-outline",
  layout: {},
  paint: {
    "line-color": "#5495cc",
    "line-opacity": 0.6,
    "line-width": 1,
  },
};

const labels: SymbolLayer = {
  id: "labels",
  type: "symbol",
  source: "labels",
  layout: {
    "text-field": ["get", "TA_NAME"],
    "text-variable-anchor": ["top", "bottom", "left", "right"],
    "text-radial-offset": 100,
    "text-offset": [10, -10],
    "text-justify": "auto",
    "text-font": ["Figtree"],
    "text-size": 14,
    "icon-image": "circle",
    "icon-anchor": "center",
    "icon-size": 0,
    "symbol-placement": "line",
  },
  paint: {
    "icon-opacity": 0,
    "text-color": "#DDDDDD",
    "icon-color": "#DDDDDD",
    "text-halo-color": "#1D1D1D",
    "text-halo-width": 2,
  },
};

const POLYGON_LAYERS = [polygon, polygonOutline, labels];
export default POLYGON_LAYERS;
