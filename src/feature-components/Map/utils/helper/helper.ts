import maplibregl from "maplibre-gl";
import { Geometry, FeatureCollection, Feature } from "geojson";
import { ResultMarker } from "../../primitives/ResultsMarkers/ResultsMarkers";
import { splitURIForNamespaceAndTerm } from "../strings";
import geohash from "../geohash/geohash";

export const getIconLabel = (uri: string) => {
  const [namespace, term] = splitURIForNamespaceAndTerm(uri);
  let label = namespace;
  if (term !== "") {
    label = term;
  }
  return label;
};

export const getLabelCharacters = (label: string): string =>
  label.substring(0, 3);

export const checkIsValidPosition = (arr: unknown[]): boolean =>
  Array.isArray(arr) &&
  arr.length === 2 &&
  !Array.isArray(arr[0]) &&
  !Array.isArray(arr[1]);

export const recursiveFlatten = (array: any[]) =>
  checkIsValidPosition(array)
    ? [array]
    : array.reduce((acc, val) => acc.concat(recursiveFlatten(val)), []);

export const getCoordinates = (geometry: Geometry) => {
  if (geometry.type !== "Polygon" && geometry.type !== "MultiPolygon") {
    throw new Error(`Unsupported geometry type: Expected "Polygon" or "MultiPolygon", instead got "${geometry.type}"`);
  }

  return recursiveFlatten(geometry.coordinates);
};

export const calculateBounds = (
  markers: ResultMarker[] = [],
  polygons: Feature[] = []
) => {
  const bounds = new maplibregl.LngLatBounds();

  polygons.reduce((bounds: maplibregl.LngLatBounds, feature: Feature) => {
    const coordinates = getCoordinates(feature.geometry);

    coordinates.forEach((coord: number[]) =>
      bounds.extend(new maplibregl.LngLat(coord[0], coord[1]))
    );

    return bounds;
  }, bounds);

  markers.forEach((marker) => {
    const { longitude, latitude } = geohash.decode(
      marker.geohash.split("http://geohash.org/")[1]
    );
    bounds.extend(new maplibregl.LngLat(longitude, latitude));
  });

  return bounds;
};
