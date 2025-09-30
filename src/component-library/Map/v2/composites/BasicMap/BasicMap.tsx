
import { MapCanvasV2 } from "../../primitives/MapCanvas/MapCanvas"
import { LayerSelector } from "../../primitives/LayerSelector/LayerSelector";
import { useRef, useMemo } from "react";
import { ensureLayers, mapLegacyConfigToLayers } from "../../primitives/MapCanvas/utils";
import { BasicMapProperties } from "../../types";
import BaseLayer from "ol/layer/Base";

export const BasicMapV2: React.FC<BasicMapProperties> = (props) => {

	const effectiveLayers = useMemo(() => {
		if (Array.isArray(props.layers) && props.layers.length > 0) {
			return props.layers;
		}

		if (props.mapStyleOptions && Object.keys(props.mapStyleOptions).length > 0) {
			return mapLegacyConfigToLayers(props.mapStyleOptions);
		}

		return [];
	}, [props.layers, props.mapStyleOptions]);

	const layersRef = useRef<BaseLayer[]>(ensureLayers(effectiveLayers));

	return <>
		<MapCanvasV2 layersRef={layersRef} {...props} />
		<LayerSelector layersRef={layersRef} />
	</>
}
