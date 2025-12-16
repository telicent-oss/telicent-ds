export const fromLonLat = (coords: [number, number]): [number, number] =>
  coords;
export const toLonLat = (coords: [number, number]): [number, number] => coords;
export const transform = (coords: [number, number]): [number, number] => coords;
export const get = (code = "EPSG:3857") => ({
  getCode: () => code,
  getUnits: () => "m",
  getExtent: () => [
    -20037508.342789244, -20037508.342789244, 20037508.342789244,
    20037508.342789244,
  ],
  canWrapX: () => true,
});
