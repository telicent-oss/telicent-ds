import { StyleLike } from 'ol/style/Style';
import { StyleConfig } from '../types/map-types';
import { default as BaseLayer } from 'ol/layer/Base';
import { default as VectorLayer } from 'ol/layer/Vector';
import { MarkerFeature } from '../types/markers';
import { OverlayFeatureConfig } from '../types/overlays';
export declare const convertMarkerToFeature: (marker: MarkerFeature) => OverlayFeatureConfig;
export declare const toOlStyle: (styleConfig?: StyleConfig, feature?: unknown) => StyleLike;
export declare const findVectorLayerById: (layers: BaseLayer[], id: string) => VectorLayer | undefined;
