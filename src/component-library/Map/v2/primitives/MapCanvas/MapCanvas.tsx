import React, { useEffect, useRef } from "react";
import { Map, View } from "ol";
import "ol/ol.css";
import { MapCanvasV2Props } from "../../types/map-types";
import { ensureView } from "./utils";


export const MapCanvasV2: React.FC<MapCanvasV2Props> = ({
	zoom,
	center,
	layersRef,
}) => {
	const mapRef = useRef<HTMLDivElement>(null);
	const mapInstance = useRef<Map | null>(null);
	const viewRef = useRef<View>(ensureView(zoom, center));
	useEffect(() => {
		if (!mapRef.current || layersRef.current.length === 0) return;

		mapInstance.current = new Map({
			target: mapRef.current,
			layers: layersRef.current,
			view: viewRef.current,
		});

		console.log(mapInstance.current.getView().getProjection().getCode())
		return () => {
			mapInstance.current?.setTarget(undefined);
		};
	}, [layersRef.current, zoom, center]);

	return <div id="TelicentMap" className="map-container" style={{ width: "100%", height: "100%" }} ref={mapRef}></div>
}
