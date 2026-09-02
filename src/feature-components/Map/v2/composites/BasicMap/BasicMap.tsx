import { MapCanvasV2 } from "../../primitives/MapCanvas/MapCanvas";
import { LayerSelectorV2 } from "../../primitives/LayerSelector/LayerSelector";
import React, {
  useRef,
  useMemo,
  useEffect,
  useState,
  useImperativeHandle,
  useCallback,
} from "react";

import { Map } from "ol";
import Feature from "ol/Feature";
import BaseLayer from "ol/layer/Base";
import { BasicMapProperties, BasicMapV2Handle } from "../../types/map-types";
import { LayerConfig } from "../../types/layers";
import { markerToOLFeature } from "../../utils/markers";
import { ensureLayers } from "../../utils/ensureLayers";
import { MARKER_LAYER_ID, POLYGON_LAYER_ID, PATH_LAYER_ID } from "../../utils/layers";
import { findVectorLayerById } from "../../utils/feature";
import {
  getFeaturesById,
  fitToFeature,
  fitToFeatures,
} from "./interactions/addPanToFeature";
import { polygonToOLFeature } from "../../utils/polygons";
import { pathToOLFeature } from "../../utils/paths";
import { mapLegacyConfigToLayers } from "../../utils/legacy";
import { ensureMarkerIconsLoaded } from "../../utils/markerIconLoader";

export const BasicMapV2 = React.forwardRef<
  BasicMapV2Handle,
  BasicMapProperties
>((props, ref) => {
  const [layers, setLayers] = useState<BaseLayer[]>([]);
  const mapInstance = useRef<Map | null>(null);

  // Held in a ref so an inline onError lambda does not re-run the effects.
  const onErrorRef = useRef(props.onError);
  onErrorRef.current = props.onError;

  const reportError = useCallback((context: string, cause: unknown) => {
    const error = cause instanceof Error ? cause : new Error(String(cause));
    if (onErrorRef.current) {
      onErrorRef.current(error);
      return;
    }
    console.error(`BasicMapV2: ${context}`, error);
  }, []);

  // Built during render, not in the effect below, so that coordinates which
  // don't match their declared type fail fast and hard: polygonToOLFeature and
  // pathToOLFeature throw synchronously here and the throw reaches the nearest
  // error boundary, instead of surfacing as an async rejection after the map
  // sources have already been cleared. Malformed coordinates are a config
  // mistake, so this is deliberately not recoverable.
  const polygonFeatures = useMemo(
    () => props.polygons.map(polygonToOLFeature),
    [props.polygons]
  );

  const pathFeatures = useMemo(
    () => (props.paths ?? []).map(pathToOLFeature),
    [props.paths]
  );

  const showLayerSelector = props.controls?.showLayerSelector ?? true;

  const effectiveLayers = useMemo(() => {
    const baseLayers =
      Array.isArray(props.layers) && props.layers.length > 0
        ? props.layers
        : props.mapStyleOptions && Object.keys(props.mapStyleOptions).length > 0
        ? mapLegacyConfigToLayers(props.mapStyleOptions)
        : [];

    const overlayVectorLayers: LayerConfig[] = [
      // Marker layer
      {
        kind: "overlay-vector",
        id: MARKER_LAYER_ID,
        data: [],
        visible: true,
      },
      // Polygon layer
      {
        kind: "overlay-vector",
        id: POLYGON_LAYER_ID,
        data: [],
        visible: true,
      },
      // Path layer
      {
        kind: "overlay-vector",
        id: PATH_LAYER_ID,
        data: [],
        visible: true,
        style: props.pathStyle,
      },
    ];
    return [...baseLayers, ...overlayVectorLayers];
  }, [props.layers, props.pathStyle]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const layers = await ensureLayers(effectiveLayers);
        if (!cancelled) {
          setLayers(layers);
        }
      } catch (e) {
        reportError("could not set up layers", e);
        return;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [effectiveLayers, reportError]);

  useEffect(() => {
    if (layers.length < 1) return;
    props?.onLayersReady?.(true);
  }, [layers]);

  useEffect(() => {
    return () => {
      props.onLayersReady?.(false);
    };
  }, []);

  useEffect(() => {
    if (!mapInstance.current) return;
    const markerLayer = findVectorLayerById(layers, MARKER_LAYER_ID);
    const polygonLayer = findVectorLayerById(layers, POLYGON_LAYER_ID);
    const pathLayer = findVectorLayerById(layers, PATH_LAYER_ID);

    if (!markerLayer) {
      console.debug("No marker layer found");
      return;
    }

    const markerSource = markerLayer.getSource();
    const polygonSource = polygonLayer?.getSource();
    const pathSource = pathLayer?.getSource();

    if (!markerSource) {
      console.debug("Could not find marker layer source");
      return;
    }

    let cancelled = false;

    (async () => {
      let markerFeatures: Feature[];
      try {
        // Icon preload is a network fetch, so a failure here is a runtime
        // problem rather than a config mistake: report it and leave the
        // previous render in place instead of dying as an unhandled rejection.
        await ensureMarkerIconsLoaded(props.markers);
        if (cancelled) return;
        markerFeatures = props.markers.map(markerToOLFeature);
      } catch (error) {
        reportError("could not load marker icons", error);
        return;
      }

      markerSource.clear();
      polygonSource?.clear();
      pathSource?.clear();

      markerSource.addFeatures(markerFeatures);
      polygonSource?.addFeatures(polygonFeatures);
      pathSource?.addFeatures(pathFeatures);

      const features = [
        ...markerFeatures,
        ...polygonFeatures,
        ...pathFeatures,
      ];

      if (features.length === 1) {
        fitToFeature(mapInstance.current!, features[0]);
      } else {
        fitToFeatures(mapInstance.current!, features);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [props.markers, polygonFeatures, pathFeatures, layers, reportError]);

  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;

    const markerLayer = findVectorLayerById(layers, MARKER_LAYER_ID);
    const polygonLayer = findVectorLayerById(layers, POLYGON_LAYER_ID);
    const pathLayer = findVectorLayerById(layers, PATH_LAYER_ID);

    const markerFeatures = markerLayer?.getSource()?.getFeatures() ?? [];
    const polygonFeatures = polygonLayer?.getSource()?.getFeatures() ?? [];
    const pathFeatures = pathLayer?.getSource()?.getFeatures() ?? [];

    const features = [...markerFeatures, ...polygonFeatures, ...pathFeatures];
    if (!features.length) return;

    if (features.length === 1) {
      fitToFeature(map, features[0]);
    } else {
      fitToFeatures(map, features);
    }
  }, [props.markers, props.polygons, props.paths, layers]);

  useImperativeHandle(
    ref,
    () => ({
      zoomIn: () => {
        const view = mapInstance.current?.getView();
        if (!view) {
          console.warn("Map view is not ready yet");
          return;
        }

        const currentZoom = view.getZoom() ?? 0;
        view.setZoom(currentZoom + 1);
      },
      zoomOut: () => {
        const view = mapInstance.current?.getView();
        if (!view) {
          console.warn("Map view is not ready yet");
          return;
        }

        const currentZoom = view.getZoom() ?? 0;
        view.setZoom(currentZoom - 1);
      },
      panToFeature: (id: string) => {
        if (!mapInstance.current) {
          console.warn("Map is not ready yet");
          return;
        }

        const features = getFeaturesById(layers, [id]);
        if (features.length === 0) return;
        fitToFeature(mapInstance.current, features[0]);
      },
      panToFeatures: (ids: string[]) => {
        if (!mapInstance.current) {
          console.warn("Map is not ready yet");
          return;
        }

        const features = getFeaturesById(layers, ids);
        if (features.length === 0) return;
        fitToFeature(mapInstance.current, features[0]);
      },
      setLayerOpacity: (layerId: string, opacity: number) => {
        const layer = layers.find((l) => l.get("id") === layerId);
        if (layer) {
          layer.setOpacity(Math.max(0, Math.min(1, opacity)));
        }
      },
      layers,
    }),
    [mapInstance.current, layers]
  );

  const { layers: _ignored, ...restProps } = props;
  return (
    <>
      <MapCanvasV2
        layers={layers}
        mapInstanceRef={mapInstance}
        {...restProps}
      />
      {showLayerSelector && <LayerSelectorV2 layers={layers} />}
    </>
  );
});
