import React, { useEffect, useRef } from "react";
import Feature from "ol/Feature";
import View from "ol/View";
import { MapCanvasV2Props } from "../../types/map-types";
import { panToFeature, panToFeatures } from "../../composites/BasicMap/interactions/addPanToFeature";
import { addSelectInteraction } from "../../composites/BasicMap/interactions/addSelectInteraction";
import { findVectorLayerById } from "../../utils/feature";
import { attachTileLoadErrorLogging, MARKER_LAYER_ID } from "../../utils/layers";
import { ensureView } from "../../utils/ensureView";
import "ol/ol.css";
import { buildControls } from "../../utils/buildControls";
import { createMap } from "../../utils/mapFactory";

export const MapCanvasV2: React.FC<MapCanvasV2Props> = ({
	zoom,
	center,
	onFeatureClick,
	layers,
	mapInstanceRef,
	controls
}) => {
	const mapRef = useRef<HTMLDivElement>(null);
	const viewRef = useRef<View>(ensureView(zoom, center));

	useEffect(() => {
		if (!mapRef.current || layers.length < 1) return;

		mapInstanceRef.current = createMap({
			target: mapRef.current,
			controls: buildControls(controls),
			layers,
			view: viewRef.current
		})

		attachTileLoadErrorLogging(
			mapInstanceRef.current.getLayers(),
			(e: Error) => console.warn("Tile error", e)
		);

		const markerLayer = findVectorLayerById(layers, MARKER_LAYER_ID);
		if (!markerLayer) {
			console.debug("No marker layer configured");
			return
		}

		const select = addSelectInteraction({
			map: mapInstanceRef.current,
			layer: markerLayer,
			onSelect: (features: Feature[]) => {
				const ids = features
					.map(f => f.getId?.())
					.filter((id): id is string => typeof id === "string");
				if (features.length === 1) {
					panToFeature(mapInstanceRef.current!, features[0]);
				} else {
					panToFeatures(mapInstanceRef.current!, features);
				}

				if (onFeatureClick) {
					onFeatureClick(ids);
				}
			},
		});

		return () => {
			mapInstanceRef.current?.removeInteraction(select);
			mapInstanceRef.current?.setTarget(undefined);
		};
	}, [layers, zoom, center]);

	if (layers.length < 1) return null

	return <div id="TelicentMap" className="map-container" style={{
		width: "100%", height: "100%", background: "#f8f4f0"
	}} ref={mapRef}></div>
}
