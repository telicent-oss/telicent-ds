import React, { useEffect, useRef } from "react";
import { Feature, Map, View } from "ol";
import "ol/ol.css";
import { MapCanvasV2Props } from "../../types/map-types";
import { panToFeature, panToFeatures } from "../../composites/BasicMap/interactions/addPanToFeature";
import { addSelectInteraction } from "../../composites/BasicMap/interactions/addSelectInteraction";
import { findVectorLayerById } from "../../utils/feature";
import { MARKER_LAYER_ID } from "../../utils/layers";
import { ensureView } from "../../utils/ensureView";


export const MapCanvasV2: React.FC<MapCanvasV2Props> = ({
	zoom,
	center,
	layersRef,
	mapInstanceRef,
}) => {
	const mapRef = useRef<HTMLDivElement>(null);
	// const mapInstance = useRef<Map | null>(null);
	const viewRef = useRef<View>(ensureView(zoom, center));
	useEffect(() => {
		if (!mapRef.current || layersRef.current.length === 0) return;

		mapInstanceRef.current = new Map({
			target: mapRef.current,
			layers: layersRef.current,
			view: viewRef.current,
		});

		const markerLayer = findVectorLayerById(layersRef.current, MARKER_LAYER_ID);
		if (!markerLayer) {
			console.debug("No marker layer configured");
			return
		}

		const select = addSelectInteraction({
			map: mapInstanceRef.current,
			layer: markerLayer,
			onSelect: (features: Feature[]) => {
				if (features.length === 1) {
					panToFeature(mapInstanceRef.current!, features[0]);
				} else {
					panToFeatures(mapInstanceRef.current!, features);
				}
			},
		});

		return () => {
			mapInstanceRef.current?.removeInteraction(select);
			mapInstanceRef.current?.setTarget(undefined);
		};
	}, [layersRef.current, zoom, center]);

	return <div id="TelicentMap" className="map-container" style={{ width: "100%", height: "100%" }} ref={mapRef}></div>
}
