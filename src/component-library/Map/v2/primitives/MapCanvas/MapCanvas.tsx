import React, { useEffect, useRef } from "react";
import Feature from "ol/Feature";
import View from "ol/View";
import Map from "ol/Map";
import "ol/ol.css";
import { MapCanvasV2Props } from "../../types/map-types";
import { panToFeature, panToFeatures } from "../../composites/BasicMap/interactions/addPanToFeature";
import { addSelectInteraction } from "../../composites/BasicMap/interactions/addSelectInteraction";
import { findVectorLayerById } from "../../utils/feature";
import { MARKER_LAYER_ID } from "../../utils/layers";
import { ensureView } from "../../utils/ensureView";
import { defaults as olDefaultControls, Zoom, Rotate, FullScreen } from "ol/control";


export const MapCanvasV2: React.FC<MapCanvasV2Props> = ({
	zoom,
	center,
	onFeatureClick,
	layersRef,
	mapInstanceRef,
	controls
}) => {
	const mapRef = useRef<HTMLDivElement>(null);
	// const mapInstance = useRef<Map | null>(null);
	const viewRef = useRef<View>(ensureView(zoom, center));
	useEffect(() => {
		if (!mapRef.current || layersRef.current.length === 0) return;

		// Build OL controls internally based on the config
		const olControls = olDefaultControls({ zoom: false, rotate: false, attribution: true }); // disable OL zoom/rotate by default
		if (controls?.showZoom) olControls.push(new Zoom());
		if (controls?.showRotate) olControls.push(new Rotate());
		if (controls?.showFullScreen) olControls.push(new FullScreen());

		mapInstanceRef.current = new Map({
			target: mapRef.current,
			controls: olControls,
			layers: layersRef.current,
			view: viewRef.current,
		});
		mapInstanceRef.current.getLayers().forEach(layer => {
			if ("getSource" in layer && typeof layer.getSource === "function") {
				const src = layer.getSource();
				src?.on("tileloaderror", (e: Error) => console.warn("Tile error", e))
			}
		})
		const markerLayer = findVectorLayerById(layersRef.current, MARKER_LAYER_ID);
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
