// src/components/FeatureMap/FeatureMap.tsx
import React from "react";
import { LayerSelector } from "../../primitives/LayerSelector/composites/LayerSelector/LayerSelector";
import { FlexGrid, FlexGridItem, UIThemeProvider, UITheme } from "../../../../export";
import { ErrorBoundary } from "react-error-boundary";
import { useMapCanvas } from "../../primitives/MapCanvas/useMapCanvas";
import { MapCanvas, MapCanvasProps } from "../../primitives/MapCanvas/MapCanvas";
import { DEFAULT_GEO_POLYGONS, DEFAULT_VIEW } from "../../constants";
import { MapProvider } from "react-map-gl/maplibre";

// TODO bad type
type Picked = Pick<
  MapCanvasProps,
  | "initialViewState"
  | "defaultStyle"
  | "attributionControl"
  | "markers"
  | "geoPolygons"
  | "selected"
  | "onClickMarker"
  | "findByClassUri"
>;

type Optional = Pick<
  Picked,
  "initialViewState" | "geoPolygons" | "attributionControl"
>;

type Optionalized = Partial<Optional>;

type RequiredRest = Omit<Picked, keyof Optional>;

export interface FeatureMapProps
  extends RequiredRest,       // everything except initialViewState & geoPolygons
          Optionalized       // those two, now optional
{
  theme?: UITheme;
  polygonLayers?: (
    | mapboxgl.FillLayer
    | mapboxgl.LineLayer
    | mapboxgl.SymbolLayer
  )[];
}



const FeatureMap: React.FC<FeatureMapProps> = ({
  markers = [],
  selected,
  theme = "DocumentPink",
  geoPolygons = DEFAULT_GEO_POLYGONS,
  initialViewState = DEFAULT_VIEW,
  defaultStyle,
  onClickMarker,
  findByClassUri,
  attributionControl = true,
  polygonLayers,
}) => {
  
  const { mapRef, cursor, onDragStart, onDragEnd, onMouseEnter, onMouseLeave, onLoad } =
    useMapCanvas({ markers, geoPolygons, selected });

  return (
    <UIThemeProvider dark theme={theme}>
      <ErrorBoundary fallback={<p>Failed to load map</p>}>
        <div className="contents">
          <FlexGrid
            m={0}
            direction="column"
            style={{ width: "100%", height: "100%" }}
          >
            <FlexGridItem flexGrow={1}>
              <MapProvider>
                <MapCanvas
                  mapRef={mapRef}
                  initialViewState={initialViewState}
                  cursor={cursor}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  onLoad={onLoad}
                  defaultStyle={defaultStyle}
                  attributionControl={attributionControl}
                  markers={markers}
                  geoPolygons={geoPolygons}
                  selected={selected}
                  onClickMarker={onClickMarker}
                  findByClassUri={findByClassUri}
                  polygonLayers={polygonLayers}
                />
              </MapProvider>
            </FlexGridItem>
            <FlexGridItem flexGrow={0} p={1}>
              <LayerSelector />
            </FlexGridItem>
          </FlexGrid>
        </div>
      </ErrorBoundary>
    </UIThemeProvider>
  );
};

export default FeatureMap;
