import maplibregl from "maplibre-gl";
import { ResultMarker } from "./ResultsMarkers";
import { splitURIForNamespaceAndTerm } from "./strings";
import geohash from "./geohash";
import { getBounds } from "./utils";

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

// Define the type for GeoJSON features
interface Geometry {
  type: "Polygon" | "MultiPolygon";
  coordinates: number[][][]; // for MultiPolygon, it's an array of arrays of arrays of coordinates
}

interface Feature {
  type: "Feature";
  geometry: Geometry;
}

export interface FeatureCollection {
  type: "FeatureCollection";
  features: Feature[];
}

interface PolygonMarkersProps {
  geometryCollection: FeatureCollection;
}

export const calculateBounds = (
  markers: ResultMarker[],
  geometryCollection: FeatureCollection
) => {
  const bounds = new maplibregl.LngLatBounds();

  geometryCollection.features.reduce(
    (bounds: maplibregl.LngLatBounds, feature: Feature) => {
      const getCoordinates = (coords: number[][]) => coords.flat(); // Flatten nested arrays

      const coordinates =
        feature.geometry.type === "Polygon"
          ? getCoordinates(feature.geometry.coordinates[0]) // Get the first polygon
          : feature.geometry.coordinates.flatMap(getCoordinates); // Flatten all coordinates for MultiPolygon

      coordinates.forEach((coord) =>
        bounds.extend(new maplibregl.LngLat(coord[0], coord[1]))
      );

      return bounds;
    },
    bounds
  );

  markers.forEach((marker) => {
    const { longitude, latitude } = geohash.decode(
      marker.geohash.split("http://geohash.org/")[1]
    );
    bounds.extend(new maplibregl.LngLat(longitude, latitude));
  });

  return bounds;
};
