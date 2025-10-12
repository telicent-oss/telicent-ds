
import { MapCanvasV2 } from "../../primitives/MapCanvas/MapCanvas"
import { LayerSelector } from "../../primitives/LayerSelector/LayerSelector";
import { useRef, useMemo, useEffect, useState } from "react";
import { convertMarkerToFeature, findVectorLayerById } from "../../primitives/MapCanvas/utils";

import BaseLayer from "ol/layer/Base";
import { BasicMapProperties } from "../../types/map-types";
import { LayerConfig } from "../../types/layers";
import { markerToOLFeature } from "../../utils/markers";
import { ensureLayers } from "../../utils/ensureLayers";
import { mapLegacyConfigToLayers } from "../../utils/legacy";

const MARKER_LAYER_ID = "marker-layer";

export const BasicMapV2: React.FC<BasicMapProperties> = (props) => {
	const [layersReady, setLayersReady] = useState(false);
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
				data: props.markers?.map(convertMarkerToFeature) ?? [],      // simple marker objects from props
				visible: true,
				zIndex: 1,
			},
			// Polygon layer
			// {
			// 	kind: "overlay-vector",
			// 	id: "polygon-layer",
			// 	data: props.geoPolygons ?? [],  // simple polygon objects from props
			// 	style: DEFAULT_POLYGON_STYLE,   // internal default style
			// 	visible: true,
			// 	zIndex: 0,
			// },
		];

		return [...baseLayers, ...overlayVectorLayers];
	}, [props.layers, props.mapStyleOptions]);

	const layersRef = useRef<BaseLayer[]>(ensureLayers(effectiveLayers));

	useEffect(() => {
		setLayersReady(true)
	}, [layersRef.current]);

	useEffect(() => {

		const markerLayer = findVectorLayerById(layersRef.current, MARKER_LAYER_ID);
		if (!markerLayer) {
			console.debug("No marker layer found");
			return;
		}

		const source = markerLayer.getSource();
		console.log("s", source);
		if (!source) {
			console.debug("Could not find layer source");
			return;
		}

		source.clear();
		const features = props.markers.map(markerToOLFeature)
		console.log({ features })
		source.addFeatures(features);
	}, [props.markers, layersReady])

	return <>
		<MapCanvasV2 layersRef={layersRef} {...props} />
		<LayerSelector layersRef={layersRef} />
	</>
}
