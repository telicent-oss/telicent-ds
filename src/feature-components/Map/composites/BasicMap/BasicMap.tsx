// src/components/BasicMap.tsx
import React from "react";
import { FlexGrid, FlexGridItem } from "../../../../export";
import { ErrorBoundary } from "react-error-boundary";
import { useMapCanvas } from "../../primitives/MapCanvas/useMapCanvas";
import { MapCanvas } from "../../primitives/MapCanvas/MapCanvas";
import { DEFAULT_GEO_POLYGONS, DEFAULT_VIEW } from "../../constants";
import { FeatureMapProps } from "../FeatureMap/FeatureMap";
 
export type BasicMapProps = FeatureMapProps;

export const BasicMap: React.FC<FeatureMapProps> = ({
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
      <FlexGrid
        m={0}
        direction="column"
        style={{ width: "100%", height: "100%" }}
      >
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
            polygonLayers={polygonLayers}
          />
        </FlexGridItem>
      </FlexGrid>
    </ErrorBoundary>
  );
};
