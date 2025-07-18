import { z } from 'zod';
import { LayerOption } from './LayerSelector';
import { StyleOption } from '../utils/schema';

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
export declare const useStyleSelector: (initialMapConfig: {
    vectorStyles?: StyleOption | StyleOption[];
    tileSets?: StyleOption[];
}) => {
    selected: {
        label: string;
        image: string;
        uri: string;
    } | null;
    mapConfig: {
        vectorStyles?: StyleOption | StyleOption[];
        tileSets: StyleOption[];
    };
    props: {
        onChange: (value: LayerOption) => void;
        data: StyleOption[];
    };
};
