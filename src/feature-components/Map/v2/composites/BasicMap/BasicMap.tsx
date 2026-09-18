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
import { partitionFeatures } from "../../utils/partitionFeatures";
import { OpacitySchema } from "../../types/opacity";
import { parseOrThrowWithInput } from "../../../../../utils/utils-lib/src/parseOrThrowWithInput/parseOrThrowWithInput";
import {
  MARKER_LAYER_ID,
  POLYGON_LAYER_ID,
  PATH_LAYER_ID,
  getPathLayerDefaultStyle,
} from "../../utils/layers";
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

  // Held in refs so an inline lambda does not re-run the effects, and so the
  // unmount cleanup below calls the current handler rather than the one from
  // the first render.
  const onErrorRef = useRef(props.onError);
  onErrorRef.current = props.onError;
  const onLayersReadyRef = useRef(props.onLayersReady);
  onLayersReadyRef.current = props.onLayersReady;

  const reportError = useCallback((context: string, cause: unknown) => {
    const error = cause instanceof Error ? cause : new Error(String(cause));
    if (onErrorRef.current) {
      onErrorRef.current(error);
      return;
    }
    console.error(`BasicMapV2: ${context}`, error);
  }, []);

  // Built during render rather than in the effect below, so the features are
  // ready on the first frame instead of one paint later. A record whose
  // coordinates don't match its declared type is skipped and reported through
  // onError by the effect further down: coordinates arrive from an API at
  // runtime, so one bad record out of five hundred should cost that record,
  // not the map.
  const { features: polygonFeatures, malformed: malformedPolygons } = useMemo(
    () => partitionFeatures(props.polygons, polygonToOLFeature),
    [props.polygons]
  );

  const { features: pathFeatures, malformed: malformedPaths } = useMemo(
    () => partitionFeatures(props.paths ?? [], pathToOLFeature),
    [props.paths]
  );

  // Reported from an effect, never from the memo above: calling a consumer
  // callback during render fires it twice under StrictMode and again on every
  // re-render that rebuilds the props array.
  const reportedMalformed = useRef(new Set<string>());
  useEffect(() => {
    for (const error of [...malformedPolygons, ...malformedPaths]) {
      // A record that breaks the same way twice is the same problem, so it is
      // reported once. Breaking differently changes the message and reports
      // again.
      const key = `${error.featureId}\u0000${error.message}`;
      if (reportedMalformed.current.has(key)) continue;
      reportedMalformed.current.add(key);
      reportError(`malformed feature "${error.featureId}"`, error);
    }
  }, [malformedPolygons, malformedPaths, reportError]);

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
      // Path layer. pathStyle is applied in its own effect below, not here:
      // it is a presentational property of a live layer, and routing it through
      // effectiveLayers would rebuild (and refetch) every layer on each change.
      // The default style is set here as well as in that effect so a styled
      // path draws correctly on the first frame rather than flashing OpenLayers'
      // built-in blue until the effect runs.
      {
        kind: "overlay-vector",
        id: PATH_LAYER_ID,
        data: [],
        visible: true,
        style: getPathLayerDefaultStyle(),
      },
    ];
    const allLayers = [...baseLayers, ...overlayVectorLayers];
    // Throws rather than being silently healed. Unlike feature coordinates,
    // which arrive from an API, opacity is written by a developer in a prop or
    // a deployment config, so a bad value is a mistake to surface at once.
    allLayers.forEach((layer) => {
      if ("opacity" in layer && layer.opacity !== undefined) {
        parseOrThrowWithInput(OpacitySchema, layer.opacity);
      }
    });
    return allLayers;
  }, [props.layers]);

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
        // Without this an app that spins until onLayersReady(true) spins
        // forever: the failure only reached onError.
        if (!cancelled) onLayersReadyRef.current?.(false);
        return;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [effectiveLayers, reportError]);

  useEffect(() => {
    if (layers.length < 1) return;
    onLayersReadyRef.current?.(true);
  }, [layers]);

  useEffect(() => {
    const pathLayer = findVectorLayerById(layers, PATH_LAYER_ID);
    if (!pathLayer) return;
    // pathStyle wins outright over a path's own `style`. A path's style is
    // held as `originalStyle` and only read back by the default below, so
    // supplying pathStyle replaces it for every path.
    pathLayer.setStyle(props.pathStyle ?? getPathLayerDefaultStyle());
  }, [layers, props.pathStyle]);

  useEffect(() => {
    return () => {
      onLayersReadyRef.current?.(false);
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
        // Icon preload is a network fetch: report the failure and leave the
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
  }, [props.markers, polygonFeatures, pathFeatures, layers]);

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
        fitToFeatures(mapInstance.current, features);
      },
      setLayerOpacity: (layerId: string, opacity: number) => {
        const validated = parseOrThrowWithInput(OpacitySchema, opacity);
        // Before the layers resolve there is nothing to find, and a call that
        // early is a timing mistake rather than a wrong id, so it stays quiet.
        // onLayersReady(true) is the signal that this handle is usable.
        if (layers.length < 1) return;
        const layer = layers.find((l) => l.get("id") === layerId);
        if (!layer) {
          // Silently doing nothing here made a typo in the id look identical to
          // a layer that was never configured.
          reportError(
            `no layer with id "${layerId}"`,
            new Error(
              `BasicMapV2: setLayerOpacity called with unknown layer id "${layerId}".`
            )
          );
          return;
        }
        layer.setOpacity(validated);
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
