import { z } from 'zod';

export declare const reactElementSchema: z.ZodObject<{
    type: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, z.ZodSymbol, z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>]>;
    props: z.ZodRecord<z.ZodString, z.ZodAny>;
    key: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>>;
}, "strip", z.ZodTypeAny, {
    type: string | symbol | ((...args: unknown[]) => unknown) | z.objectOutputType<{}, z.ZodTypeAny, "passthrough">;
    props: Record<string, any>;
    key?: string | number | null | undefined;
}, {
    type: string | symbol | ((...args: unknown[]) => unknown) | z.objectInputType<{}, z.ZodTypeAny, "passthrough">;
    props: Record<string, any>;
    key?: string | number | null | undefined;
}>;
