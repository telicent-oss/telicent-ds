import { z, ZodTypeAny } from 'zod';

export declare function parseOrThrowWithInput<TSchema extends ZodTypeAny>(schema: TSchema, data: unknown): z.output<TSchema>;
