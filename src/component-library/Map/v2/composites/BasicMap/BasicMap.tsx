
import { MapCanvasV2 } from "../../primitives/MapCanvas/MapCanvas"
import { LayerSelectorV2 } from "../../primitives/LayerSelector/LayerSelector";
import React, { useRef, useMemo, useEffect, useState, useImperativeHandle } from "react";

import { Map } from "ol";
import BaseLayer from "ol/layer/Base";
import { BasicMapProperties, BasicMapV2Handle } from "../../types/map-types";
import { LayerConfig } from "../../types/layers";
import { markerToOLFeature } from "../../utils/markers";
import { ensureLayers } from "../../utils/ensureLayers";
import { mapLegacyConfigToLayers } from "../../utils/legacy";
import { MARKER_LAYER_ID } from "../../utils/layers";
import { convertMarkerToFeature, findVectorLayerById } from "../../utils/feature";
import { getFeaturesById, panToFeature, panToFeatures } from "./interactions/addPanToFeature";
import { polygonToOLFeature } from "../../utils/polygons";


export const BasicMapV2 = React.forwardRef<BasicMapV2Handle, BasicMapProperties>((props, ref) => {
	const [layers, setLayers] = useState<BaseLayer[]>([]);
	// const layersRef = useRef<BaseLayer[] | null>(null);
	// const [layersReady, setLayersReady] = useState(false);
	const mapInstance = useRef<Map | null>(null);

	const showLayerSelector = true;
	// props.controls?.showLayerSelector ?? true;

	const effectiveLayers = useMemo(() => {
		const baseLayers =
			Array.isArray(props.layers) && props.layers.length > 0
				? props.layers
				: [];

		const overlayVectorLayers: LayerConfig[] = [
			// Marker layer
			{
				kind: "overlay-vector",
				id: MARKER_LAYER_ID,
				data: props.markers?.map(convertMarkerToFeature) ?? [],      // simple marker objects from props
				visible: true
			},
			// Polygon layer
			{
				kind: "overlay-vector",
				id: "polygon-layer",
				data: props?.polygons ?? [],
				visible: true,
			},
		];

		return [...baseLayers, ...overlayVectorLayers];
	}, [props.layers, props.mapStyleOptions]);


	useEffect(() => {
		let cancelled = false;

		(async () => {
			const layers = await ensureLayers(effectiveLayers);
			if (!cancelled) {
				setLayers(layers)
			}
		})();

		return () => {
			cancelled = true;
		};
	}, [effectiveLayers]);
	// const layersRef = useRef<BaseLayer[]>(ensureLayers(effectiveLayers));

	// useEffect(() => {
	// 	setLayersReady(true)
	// 	if (props.onLayersReady) {
	// 		props.onLayersReady(true);
	// 	}
	// 	return () => {
	// 		setLayersReady(false);
	// 		props.onLayersReady?.(false);
	// 	};
	// }, [!!layersRef.current]);

	// useEffect(() => {
	// 	return () => {
	// 		setLayersReady(false);
	// 		props.onLayersReady?.(false);
	// 	};
	// }, [])

	useEffect(() => {
		if (!mapInstance.current) return;
		const markerLayer = findVectorLayerById(layers, MARKER_LAYER_ID);
		if (!markerLayer) {
			console.debug("No marker layer found");
			return;
		}

		const source = markerLayer.getSource();
		if (!source) {
			console.debug("Could not find layer source");
			return;
		}

		source.clear();
		const markerFeatures = props.markers.map(markerToOLFeature);
		source.addFeatures(markerFeatures);

		const polygonFeatures = props.polygons.map(polygonToOLFeature);
		source.addFeatures(polygonFeatures);

		const features = [...markerFeatures, ...polygonFeatures]

		if (features.length === 1) {
			panToFeature(mapInstance.current, features[0])
		} else {
			panToFeatures(mapInstance.current, features)
		}
	}, [props.markers, props.polygons, layers])

	useImperativeHandle(ref, () => ({
		zoomIn: () => {
			const view = mapInstance.current?.getView();
			if (!view) {
				console.warn("Map view is not ready yet");
				return;
			}

			const currentZoom = view.getZoom() ?? 0; // defensive
			view.setZoom(currentZoom + 1);
		},
		zoomOut: () => {
			const view = mapInstance.current?.getView();
			if (!view) {
				console.warn("Map view is not ready yet");
				return;
			}

			const currentZoom = view.getZoom() ?? 0; // defensive
			view.setZoom(currentZoom - 1);
		},
		panToFeature: (id: string) => {
			if (!mapInstance.current) {
				console.warn("Map is not ready yet");
				return;
			}

			const features = getFeaturesById(layers, [id])
			if (features.length === 0) return;
			panToFeature(mapInstance.current, features[0]);
		},
		panToFeatures: (ids: string[]) => {
			if (!mapInstance.current) {
				console.warn("Map is not ready yet");
				return;
			}

			const features = getFeaturesById(layers, ids)
			if (features.length === 0) return;
			panToFeature(mapInstance.current, features[0]);
		},
		layers
	}), [mapInstance.current, layers])

	console.log({ layers, showLayerSelector })

	return <>
		<MapCanvasV2 layersRef={layers} mapInstanceRef={mapInstance} {...props} />
		{showLayerSelector &&
			<LayerSelectorV2 layers={layers} />
		}
	</>
})
