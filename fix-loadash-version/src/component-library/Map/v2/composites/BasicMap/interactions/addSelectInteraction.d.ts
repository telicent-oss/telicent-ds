import { default as Select } from 'ol/interaction/Select';
import { Feature, Map as OlMap } from 'ol';
import { default as VectorLayer } from 'ol/layer/Vector';
interface AddSelectInteractionOptions {
    map: OlMap;
    layer: VectorLayer;
    onSelect?: (features: Feature[]) => void;
}
export declare const addSelectInteraction: ({ map, layer, onSelect, }: AddSelectInteractionOptions) => Select;
export {};
