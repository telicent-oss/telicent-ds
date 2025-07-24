// src/components/MapCanvas.tsx
import React from "react";
import Map, {
  MapProvider,
  Source,
  Layer,
  MapRef,
} from "react-map-gl/maplibre";
import ResultsMarkers, { ResultMarker } from "../ResultsMarkers/ResultsMarkers";
import PolygonMarkers from "../Polygons";
import { useTheme, GlobalStyles } from "@mui/material";
import { useMapCanvasContext } from "./MapCanvasProvider";

// Note: without these styles the map container will be unrestrained,
// and can cause it to resize - triggering other logic.
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import POLYGON_LAYERS from "../../utils/polygonStyles";

export interface MapCanvasProps {
  mapRef: React.RefObject<MapRef>;
  initialViewState: {
    latitude: number;
    longitude: number;
    zoom: number;
    maxZoom: number;
  };
  cursor?: string;
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
  polygonLayers?: (
    | mapboxgl.FillLayer
    | mapboxgl.LineLayer
    | mapboxgl.SymbolLayer
  )[];
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
  polygonLayers,
}) => {
  const { styleSelector } = useMapCanvasContext();
  const theme = useTheme();

  return (
    <>
      <GlobalStyles
        styles={{
          "#TelicentMap .maplibregl-ctrl-attrib": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.background.default
                : theme.palette.background.paper,
            color: theme.palette.text.primary,
          },
        }}
      />
      <Map
        ref={mapRef}
        id="TelicentMap"
        onLoad={onLoad}
        initialViewState={initialViewState}
        cursor={cursor}
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
        {styleSelector.mapConfig.tileSets.map((el) => (
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
                  styleSelector.selected?.uri === el.uri
                    ? "visible"
                    : "none",
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
    </>
  );
};
