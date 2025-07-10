// src/components/BasicMap.tsx
import React from "react";
import { StyleOption } from "../utils/schema";
import { useStyleSelector } from "../layer-selector/useLayerSelector";
import { FlexGrid, FlexGridItem, UITheme } from "../../../export";
import { ErrorBoundary } from "react-error-boundary";
import { useMapCanvas } from "../MapCanvas/useMapCanvas";
import { MapCanvas, MapCanvasProps } from "../MapCanvas/MapCanvas";
import { DEFAULT_GEO_POLYGONS, DEFAULT_VIEW } from "../constants";

export interface BasicMapProps
  extends Pick<
    MapCanvasProps,
    | "initialViewState"
    | "defaultStyle"
    | "attributionControl"
    | "markers"
    | "geoPolygons"
    | "selected"
    | "onClickMarker"
    | "findByClassUri"
  > {
  mapStyleOptions: {
    vectorStyles?: StyleOption | StyleOption[];
    tileSets?: StyleOption[];
  };
  theme?: UITheme;
  polygonLayers?: (mapboxgl.FillLayer | mapboxgl.LineLayer | mapboxgl.SymbolLayer)[];
}


const BasicMap: React.FC<BasicMapProps> = ({
  mapStyleOptions,
  markers = [],
  selected,
  geoPolygons = DEFAULT_GEO_POLYGONS,
  initialViewState = DEFAULT_VIEW,
  defaultStyle,
  onClickMarker,
  findByClassUri,
  attributionControl = true,
  polygonLayers,
}) => {
  const styleSelector = useStyleSelector(mapStyleOptions);

  const {
    mapRef,
    cursor,
    onDragStart,
    onDragEnd,
    onMouseEnter,
    onMouseLeave,
    onLoad,
  } = useMapCanvas({ markers, geoPolygons, selected });

  return (
      <ErrorBoundary fallback={<p>Failed to load map</p>}>
          <FlexGrid m={0} direction="column" style={{ width: "100%", height: "100%" }}>
            <FlexGridItem flexGrow={1}>
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
                styleConfig={styleSelector}
                polygonLayers={polygonLayers}
              />
            </FlexGridItem>
          </FlexGrid>
      </ErrorBoundary>
  );
};

export default BasicMap;
