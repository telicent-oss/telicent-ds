import { Source, Layer } from "react-map-gl"
import { FeatureCollection, Feature } from "geojson";
import POLYGON_LAYERS from "../polygonStyles"
import React from "react";

// ignore story-coverage.test.ts
interface PolygonMarkersProps {
  geometryCollection: FeatureCollection;
  layers?: (mapboxgl.FillLayer | mapboxgl.LineLayer | mapboxgl.SymbolLayer)[];
}

const PolygonMarkers: React.FC<PolygonMarkersProps> = ({ geometryCollection, layers = POLYGON_LAYERS}) => {
  return (
    <Source
      id="polygons"
      type="geojson"
      data={geometryCollection}
    >
      {layers.map((layer) => (
        <Layer key={layer.id} {...layer} />
      ))}
    </Source>
  )
}

export default PolygonMarkers;
