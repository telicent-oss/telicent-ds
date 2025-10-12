import BaseLayer from "ol/layer/Base";

export type LayersRef = React.MutableRefObject<BaseLayer[]>;

export type AnchorPosition =
  | "center"
  | "top-left"
  | "top-middle"
  | "top-right"
  | "middle-left"
  | "middle-right"
  | "bottom-left"
  | "bottom-middle"
  | "bottom-right";
