import { Source, Layer } from "react-map-gl"
import POLYGON_LAYERS from "./polygonStyles"
import React from "react";

// Define the type for GeoJSON features
interface Geometry {
  type: 'Polygon' | 'MultiPolygon';
  coordinates: number[][][]; // for MultiPolygon, it's an array of arrays of arrays of coordinates
}

interface Feature {
  type: 'Feature';
  geometry: Geometry;
}

export interface FeatureCollection {
  type: 'FeatureCollection';
  features: Feature[];
}

interface PolygonMarkersProps {
  geometryCollection: FeatureCollection
}

const PolygonMarkers: React.FC<PolygonMarkersProps> = ({ geometryCollection }) => {

  return (
    <Source
      id="polygons"
      type="geojson"
      data={{ type: 'FeatureCollection', features: geometryCollection.features }}
    >
      {POLYGON_LAYERS.map((layer) => (
        <Layer key={layer.id} {...layer} />
      ))}
    </Source>
  )
}

export default PolygonMarkers;
