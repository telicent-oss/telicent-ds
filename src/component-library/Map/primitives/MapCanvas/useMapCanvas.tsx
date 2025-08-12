// src/components/useMapCanvas.ts
import { useRef, useState, useEffect } from "react";
import { MapRef } from "react-map-gl/maplibre";
import { FeatureCollection, Feature } from "geojson";
import { ResultMarker } from "../ResultsMarkers/ResultsMarkers";
import { calculateBounds } from "../../utils/helper/helper";
import { LngLatBounds } from "maplibre-gl";
import debounce from "lodash.debounce";

export function useMapCanvas(params: {
  markers: ResultMarker[];
  geoPolygons: FeatureCollection;
  selected: string[];
}) {
  const { markers, geoPolygons, selected } = params;
  const mapRef = useRef<MapRef>(null);
  const [cursor, setCursor] = useState("auto");
  const offsetRef = useRef<[number, number]>([0, 0]);

  const resetCursor = () => {
    setCursor("auto");
  };

  const fitMarkerAndPolygonBounds = debounce(
    () => {
      if (
        !mapRef.current ||
        (geoPolygons.features.length < 1 && markers.length < 1)
      )
        return;
      const map = mapRef.current;

      let bounds: LngLatBounds;
      if (selected.length < 1) {
        bounds = calculateBounds(markers, geoPolygons.features);
      } else {
        const selectedMarkers = markers.reduce((acc, marker) => {
          if (selected.find((s) => marker.uri === s)) {
            acc.push(marker);
          }
          return acc;
        }, [] as ResultMarker[]);

        const selectedPolygons = geoPolygons.features.reduce((acc, polygon) => {
          if (
            selected.find((s) =>
              polygon.properties?.iso3166_a3.endsWith(s.split("#")[1])
            )
          ) {
            acc.push(polygon);
          }
          return acc;
        }, [] as Feature[]);

        bounds = calculateBounds(selectedMarkers, selectedPolygons);
      }

      map.resize();
      map.fitBounds(bounds, {
        padding: 20,
        maxZoom: 8,
        duration: 500,
        offset: offsetRef.current,
      });
    },
    0,
    { leading: false, trailing: true }
  );

  useEffect(() => {
    fitMarkerAndPolygonBounds();
  }, [geoPolygons, markers, selected]);

  const onLoad = () => {
    fitMarkerAndPolygonBounds();
  };

  return {
    mapRef,
    cursor,
    onDragStart: () => setCursor("move"),
    onDragEnd: resetCursor,
    onMouseEnter: () => setCursor("pointer"),
    onMouseLeave: resetCursor,
    onLoad,
    setOffset: (off: [number, number]) => {
      offsetRef.current = off;
      fitMarkerAndPolygonBounds();
    },
  };
}
