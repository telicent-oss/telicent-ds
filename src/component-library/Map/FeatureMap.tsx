import React, { useEffect, useState } from "react";
import { z } from "zod";
import Map, {
  Layer,
  MapProvider,
  Source,
} from "react-map-gl/maplibre";
import { ErrorBoundary } from "react-error-boundary";

import ResultsMarkers, { ResultMarker } from "./ResultsMarkers";

import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import { useStyleSelector, MapBoxSourceSchema } from "./layer-selector/useLayerSelector";
import { LayerSelector } from "./layer-selector/LayerSelector";
import { FlexGrid, FlexGridItem, UIThemeProvider } from "../../export";
import PolygonMarkers, { FeatureCollection } from "./Polygons";
import maplibregl from "maplibre-gl";
import { calculateBounds } from "./helper";
import { MapRef } from "react-map-gl";
import { duration } from "@mui/material";

export const GEOJSON = "geojson";
export const FEATURE_COLLECTION = "FeatureCollection";
const W_H_100 = { height: "100%", width: "100%" };

type StyleOption = {
  label: string,
  uri: string,
  image: string
}

export type ClassIcon = {
  backgroundColor: string;
  color: string;
  classUri: string;
  iconFallbackText: string;
  alt: string;
  faIcon?: string | undefined;
  faUnicode?: string | undefined;
  shape?: string | undefined;
}

interface TelicentMapProps {
  mapStyleOptions?: {
    vectorStyles?: StyleOption | StyleOption[], // by the looks of it we are only allowed up to one vector style, so why are we accepting an array?
    tileSets?: StyleOption[]
  },
  markers?: ResultMarker[];
  geoPolygons?: FeatureCollection;
  selected: string;
  onClickMarker: (uri: string) => void;
  findByClassUri: (maybeClassUri: string) => ClassIcon;
  theme?: "DocumentPink" | "dark" | "light" | "DataNavy" | "GraphOrange";
  defaultStyle?: string;
  panToSelected?: boolean;
  showAttribution?: boolean;
}

const FeatureMap: React.FC<TelicentMapProps> = ({
  mapStyleOptions,
  markers = [],
  selected,
  theme = "DocumentPink",
  geoPolygons = { type: 'FeatureCollection', features: [] },
  defaultStyle,
  onClickMarker,
  findByClassUri,
  panToSelected = true,
  showAttribution = true
}) => {
  const mapContainerRef = React.useRef<MapRef | null>(null);
  const [cursor, setCursor] = useState("auto");

  console.log({ geoPolygons, markers })
  const styleSelector = useStyleSelector(mapStyleOptions);
  const resetCursor = () => {
    setCursor("auto");
  };

  useEffect(() => {
    if (!mapContainerRef.current || (geoPolygons.features.length < 1 && markers.length < 1)) return;

    const map = mapContainerRef.current;
    const bounds = calculateBounds(markers, geoPolygons);

    // Wait for next cycle to zoom otherwise map won't be initialized
    setTimeout(() => {
      map.fitBounds(bounds, { padding: 20, maxZoom: 8 });
    }, 200)
  }, [geoPolygons, markers])

  return (
    <UIThemeProvider dark theme={theme}>
      <ErrorBoundary
        fallback={<p>Something went wrong: Failed to load map component</p>}
      >
        <div className=" w-full h-full" >
          <FlexGrid m={0} direction="column" style={W_H_100}>
            <FlexGridItem flexGrow={1}>
              <MapProvider>
                <Map
                  ref={mapContainerRef}
                  cursor={cursor}
                  id="TelicentMap"
                  interactiveLayerIds={["document-locations-layer"]}
                  scrollZoom
                  mapStyle={defaultStyle}
                  attributionControl={showAttribution}
                  onDragStart={() => setCursor("move")}
                  onDragEnd={resetCursor}
                  onMouseEnter={() => setCursor("pointer")}
                  onMouseLeave={resetCursor}
                >
                  {
                    styleSelector.mapConfig.tileSets.map((el: z.infer<typeof MapBoxSourceSchema>) => (
                      <Source
                        id={`arcgis-raster-${el.label}`}
                        key={`arcgis-raster-${el.label}`}
                        type="raster"
                        tiles={[el.uri]}
                        tileSize={256}
                      >
                        <Layer
                          id={`arcgis-raster-layer-${el.label}`}
                          type="raster"
                          layout={{
                            visibility:
                              styleSelector?.selected?.uri == el.uri
                                ? "visible"
                                : "none",
                          }}
                        />
                      </Source>
                    ))}
                  <ResultsMarkers onClick={onClickMarker} markers={markers} findByClassUri={findByClassUri} selected={selected} />
                  <PolygonMarkers geometryCollection={geoPolygons} />
                </Map>
              </MapProvider>
            </FlexGridItem>
            <FlexGridItem flexGrow={0} p={1}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <LayerSelector {...styleSelector.props} />
            </FlexGridItem>
          </FlexGrid>
        </div>
      </ErrorBoundary>
    </UIThemeProvider>
  );
};

export default FeatureMap;
