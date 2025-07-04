import { z } from 'zod';

export declare const ENCODE_SEARCH_PARAMS_MODES_Schema: z.ZodUnion<[z.ZodLiteral<"as base64">, z.ZodLiteral<"as uri component">]>;
export type ENCODE_SEARCH_PARAMS_MODES_Type = z.infer<typeof ENCODE_SEARCH_PARAMS_MODES_Schema>;
