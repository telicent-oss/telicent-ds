import { Source, Layer } from "react-map-gl"
import { FeatureCollection, Feature } from "geojson";
import POLYGON_LAYERS from "./polygonStyles"
import React from "react";

interface PolygonMarkersProps {
  geometryCollection: FeatureCollection
}

const PolygonMarkers: React.FC<PolygonMarkersProps> = ({ geometryCollection }) => {
  return (
    <Source
      id="polygons"
      type="geojson"
      data={geometryCollection}
    >
      {POLYGON_LAYERS.map((layer) => (
        <Layer key={layer.id} {...layer} />
      ))}
    </Source>
  )
}

export default PolygonMarkers;
