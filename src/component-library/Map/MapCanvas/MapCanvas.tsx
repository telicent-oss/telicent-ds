// src/components/MapCanvas.tsx
import React from "react";
import Map, {
  MapProvider,
  Source,
  Layer,
  MapRef,
  FillLayer,
} from "react-map-gl/maplibre";
import ResultsMarkers, { ResultMarker } from "../ResultsMarkers";
import PolygonMarkers from "../Polygons";
import { z } from "zod";
import { MapBoxSourceSchema } from "../layer-selector/useLayerSelector";

// Note: without these styles the map container will be unrestrained,
// and can cause it to resize - triggering other logic.
import "maplibre-gl/dist/maplibre-gl.css";
import "../map.css";
import POLYGON_LAYERS from "../polygonStyles";

export interface MapCanvasProps {
  mapRef: React.RefObject<MapRef>;
  initialViewState: {
    latitude: number;
    longitude: number;
    zoom: number;
    maxZoom: number;
  };
  cursor: string;
  onDragStart: () => void;
  onDragEnd: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onLoad: () => void;
  defaultStyle?: string;
  attributionControl: boolean;
  markers: ResultMarker[];
  geoPolygons: GeoJSON.FeatureCollection;
  selected: string[];
  onClickMarker?: (m: ResultMarker) => void;
  findByClassUri: (u: string) => any;
  styleConfig: {
    mapConfig: { tileSets: z.infer<typeof MapBoxSourceSchema>[] };
    selected: { uri?: string } | null;
  };
  polygonLayers?: (mapboxgl.FillLayer | mapboxgl.LineLayer | mapboxgl.SymbolLayer)[];
}

const W_H_100 = { width: "100%", height: "100%" };

export const MapCanvas: React.FC<MapCanvasProps> = ({
  mapRef,
  initialViewState,
  cursor,
  onDragStart,
  onDragEnd,
  onMouseEnter,
  onMouseLeave,
  onLoad,
  defaultStyle,
  attributionControl,
  markers,
  geoPolygons,
  selected,
  onClickMarker,
  findByClassUri,
  styleConfig,
  polygonLayers
}) => {
  return (
    <MapProvider>
      <Map
        ref={mapRef}
        onLoad={onLoad}
        initialViewState={initialViewState}
        cursor={cursor}
        id="TelicentMap"
        interactiveLayerIds={["document-locations-layer"]}
        scrollZoom
        mapStyle={defaultStyle}
        attributionControl={attributionControl}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={W_H_100}
      >
        {styleConfig.mapConfig.tileSets.map((el) => (
          <Source
            key={el.label}
            id={`tile-${el.label}`}
            type="raster"
            tiles={[el.uri]}
            tileSize={256}
          >
            <Layer
              id={`layer-${el.label}`}
              type="raster"
              layout={{
                visibility:
                  styleConfig.selected?.uri === el.uri ? "visible" : "none",
              }}
            />
          </Source>
        ))}
        <ResultsMarkers
          markers={markers}
          selected={selected}
          onClick={onClickMarker}
          findByClassUri={findByClassUri}
        />
        <PolygonMarkers
          geometryCollection={geoPolygons}
          layers={polygonLayers}
        />
      </Map>
    </MapProvider>
  );
};
