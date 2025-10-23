import { Fill, Stroke, Style } from "ol/style";
import CircleStyle from "ol/style/Circle";

const DEFAULT_PIN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" viewBox="0 0 24 36">
  <path d="M12 0C7 0 3 4 3 9c0 7.5 9 27 9 27s9-19.5 9-27c0-5-4-9-9-9z" fill="#FF6600"/>
  <circle cx="12" cy="9" r="4" fill="#fff"/>
</svg>
`;

export const DEFAULT_MARKER_ICON_URL = `data:image/svg+xml;base64,${btoa(
  DEFAULT_PIN_SVG
)}`;

export const defaultVectorStyle = new Style({
  fill: new Fill({ color: "rgba(0, 0, 255, 0.1)" }),
  stroke: new Stroke({ color: "#3399CC", width: 1 }),
  image: new CircleStyle({
    radius: 5,
    fill: new Fill({ color: "#3399CC" }),
    stroke: new Stroke({ color: "#000", width: 1 }),
  }),
  text: undefined,
});
