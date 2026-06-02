import React, { useEffect, useRef, useState } from "react";
import Feature from "ol/Feature";
import View from "ol/View";
import { MapCanvasV2Props } from "../../types/map-types";
import { fitToFeature, fitToFeatures } from "../../composites/BasicMap/interactions/addPanToFeature";
import { addSelectInteraction } from "../../composites/BasicMap/interactions/addSelectInteraction";
import { findVectorLayerById } from "../../utils/feature";
import { attachTileLoadErrorLogging, MARKER_LAYER_ID } from "../../utils/layers";
import { ensureView } from "../../utils/ensureView";
import "ol/ol.css";
import { buildControls } from "../../utils/buildControls";
import { createMap } from "../../utils/mapFactory";
import Collection from "ol/Collection";

export const MapCanvasV2: React.FC<MapCanvasV2Props> = ({
	zoom,
	center,
	onFeatureClick,
	layers,
	mapInstanceRef,
	controls
}) => {
	const [mapReady, setMapReady] = useState(false);
	const mapRef = useRef<HTMLDivElement>(null);
	const viewRef = useRef<View>(ensureView(zoom, center));

	useEffect(() => {
		if (!mapRef.current || mapInstanceRef.current) return;
		mapInstanceRef.current = createMap({
			target: mapRef.current,
			controls: buildControls(controls),
			layers,
			view: viewRef.current
		})

		setMapReady(true);
		return () => {
			mapInstanceRef.current?.setTarget(undefined);
			mapInstanceRef.current = null;
			setMapReady(false);
		}
	}, [])

	useEffect(() => {
		if (!mapReady) return;
		const map = mapInstanceRef.current;
		if (!map) return;

		map.getLayerGroup().setLayers(new Collection(layers));
	}, [layers, mapReady]);

	useEffect(() => {
		const map = mapInstanceRef.current;
		if (!map || layers.length === 0) return;

		const detach = attachTileLoadErrorLogging(
			map.getLayers(),
			(e: Error) => console.warn("Tile error", e)
		);

		return detach;
	}, [layers, mapReady]);

	useEffect(() => {
		const map = mapInstanceRef.current;
		if (!map || layers.length === 0) return;

		attachTileLoadErrorLogging(
			map.getLayers(),
			(e: Error) => console.warn("Tile error", e)
		);

		const markerLayer = findVectorLayerById(layers, MARKER_LAYER_ID);
		if (!markerLayer) {
			console.debug("No marker layer configured");
			return
		}

		const select = addSelectInteraction({
			map,
			layer: markerLayer,
			onSelect: (features: Feature[]) => {
				const ids = features
					.map(f => f.getId?.())
					.filter((id): id is string => typeof id === "string");
				if (features.length === 1) {
					fitToFeature(mapInstanceRef.current!, features[0]);
				} else {
					fitToFeatures(mapInstanceRef.current!, features);
				}

				if (onFeatureClick) {
					onFeatureClick(ids);
				}
			},
		});

		return () => {
			mapInstanceRef.current?.removeInteraction(select);
		};
	}, [layers]);

	return <div id="TelicentMap" className="map-container" style={{
		width: "100%", height: "100%", background: "#f8f4f0"
	}} ref={mapRef}></div>
}
