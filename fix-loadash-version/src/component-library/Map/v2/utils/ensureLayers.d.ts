import { default as BaseLayer } from 'ol/layer/Base';
import { LayerConfig } from '../types/layers';
export declare const ensureLayers: (layerConfigs: LayerConfig[]) => Promise<BaseLayer[]>;
