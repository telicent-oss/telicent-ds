import { default as OlMap } from 'ol/Map';
import { default as View } from 'ol/View';
import { default as BaseLayer } from 'ol/layer/Base';
import { Collection } from 'ol';
import { Control } from 'ol/control';
export declare const createMap: ({ target, layers, view, controls, }: {
    target: HTMLElement;
    layers: BaseLayer[];
    view: View;
    controls?: Collection<Control>;
}) => OlMap;
