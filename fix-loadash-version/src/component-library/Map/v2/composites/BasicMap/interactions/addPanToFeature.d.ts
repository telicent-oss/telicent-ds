import { Map as OlMap } from 'ol';
import { default as Geometry } from 'ol/geom/Geometry';
import { default as Feature } from 'ol/Feature';
import { default as BaseLayer } from 'ol/layer/Base';
export declare const getFeaturesById: (layers: BaseLayer[], ids: string[]) => Feature[];
export declare const fitToFeature: (map: OlMap, feature: Feature<Geometry>, options?: PanOptions) => void;
interface PanOptions {
    padding?: [number, number, number, number];
    maxZoom?: number;
    duration?: number;
}
export declare const fitToFeatures: (map: OlMap, features: Feature<Geometry>[], options?: PanOptions) => void;
export {};
