import { z } from 'zod';
import { LayerOption } from './LayerSelector';

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
export declare const useStyleSelector: (initialMapConfig: any) => {
    selected: {
        label: string;
        image: string;
        uri: string;
    } | null;
    mapConfig: any;
    props: {
        onChange: (value: LayerOption) => void;
        data: any[];
    };
};
