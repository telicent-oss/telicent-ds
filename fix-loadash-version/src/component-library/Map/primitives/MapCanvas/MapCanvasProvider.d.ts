import { default as React, ReactNode } from '../../../../../node_modules/react';
import { z } from 'zod';
import { StyleOption } from '../../utils/schema';
import { LayerOption } from '../LayerSelector/primitives/LayerSelectorPresentational';
export declare const MapBoxSourceSchema: z.ZodObject<{
    label: z.ZodString;
    uri: z.ZodString;
    image: z.ZodString;
}, "strip", z.ZodTypeAny, {
    label: string;
    image: string;
    uri: string;
}, {
    label: string;
    image: string;
    uri: string;
}>;
type MapBoxSource = z.infer<typeof MapBoxSourceSchema>;
interface MapStyleConfig {
    vectorStyles?: StyleOption | StyleOption[];
    tileSets?: StyleOption[];
}
type MapCanvasConfig = {
    tileSets: StyleOption[];
    vectorStyles?: StyleOption | StyleOption[];
};
interface StyleSelectorState {
    selected: MapBoxSource | null;
    mapConfig: MapCanvasConfig;
    props: {
        onChange: (v: LayerOption) => void;
        data: StyleOption[];
    };
}
export interface MapCanvasState {
    styleSelector: StyleSelectorState;
}
/**
 * For state that is shared throughout the app
 */
export declare const MapCanvasProvider: React.FC<{
    initialMapStyleConfig: MapStyleConfig;
    children: ReactNode;
}>;
export declare const useMapCanvasContext: () => MapCanvasState;
export {};
