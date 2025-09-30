import React, { useEffect, useRef } from "react";
import { Map } from "ol";
import { ensureView, ensureLayers, attachMeta } from "./utils";
import { MapCanvasV2Props } from "../../types"
import "ol/ol.css";


export const MapCanvasV2: React.FC<MapCanvasV2Props> = ({
	zoom,
	center,
	layersRef
}) => {
	const mapRef = useRef<HTMLDivElement>(null);
	const mapInstance = useRef<Map | null>(null);

	useEffect(() => {
		if (!mapRef.current || layersRef.current.length === 0) return;

		mapInstance.current = new Map({
			target: mapRef.current,
			layers: layersRef.current,
			view: ensureView(zoom, center)
		});

		return () => {
			mapInstance.current?.setTarget(undefined);
		};
	}, [layersRef.current, zoom, center]);

	return <div id="TelicentMap" className="map-container" style={{ width: "100%", height: "100%" }} ref={mapRef}></div>
}
