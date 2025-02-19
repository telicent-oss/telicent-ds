import React, { useEffect, useState } from "react";
import { z } from "zod";
import Map, {
  Layer,
  LngLatBoundsLike,
  MapProvider,
  Source,
  useMap,
} from "react-map-gl/maplibre";
import { ErrorBoundary } from "react-error-boundary";

import ResultsMarkers, { LocationFeature } from "./ResultsMarkers";
import { getBounds } from "./utils";

import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import { useStyleSelector, MapBoxSourceSchema } from "./layer-selector/useLayerSelector";
import { LayerSelector } from "./layer-selector/LayerSelector";
import { FlexGrid, FlexGridItem, UIThemeProvider } from "../../export";

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
  geoPoints: LocationFeature[];
  geoPolygons: number[];
  selected: any; // TODO: not sure where this is used in search? Have evidence it is a string[] array. Do not know if there are exceptions
  onClickMarker: (uri: string) => void;
  findByClassUri: (maybeClassUri: string) => ClassIcon;
  defaultStyle?: string;
  panToSelected?: boolean;
}

const FeatureMap: React.FC<TelicentMapProps> = ({
  mapStyleOptions,
  geoPoints,
  selected,
  geoPolygons,
  defaultStyle,
  onClickMarker,
  findByClassUri,
  panToSelected = true
}) => {
  const mapContainerRef = React.useRef(null);
  const [cursor, setCursor] = useState("auto");

  const styleSelector = useStyleSelector(mapStyleOptions);
  const resetCursor = () => {
    setCursor("auto");
  };

  console.log({ selected })
  return (
    <UIThemeProvider dark theme="DocumentPink">
      <ErrorBoundary
        fallback={<p>Something went wrong: Failed to load map component</p>}
      >
        <div className=" w-full h-[260px]" ref={mapContainerRef}>
          <FlexGrid m={0} direction="column" style={W_H_100}>
            <FlexGridItem flexGrow={1}>
              <MapProvider>
                <Map
                  cursor={cursor}
                  initialViewState={{
                    bounds: getBounds(geoPoints)
                  }}
                  id="TelicentMap"
                  interactiveLayerIds={["document-locations-layer"]}
                  mapStyle={defaultStyle}
                  attributionControl={true}
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
                  <ResultsMarkers onClick={onClickMarker} geoPoints={geoPoints} findByClassUri={findByClassUri} selected={selected} />
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
