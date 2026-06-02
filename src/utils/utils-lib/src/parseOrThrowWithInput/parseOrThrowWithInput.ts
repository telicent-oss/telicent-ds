import { z, ZodError, ZodTypeAny } from "zod";

export function parseOrThrowWithInput<TSchema extends ZodTypeAny>(
  schema: TSchema,
  data: unknown
): z.output<TSchema> {
  try {
    return schema.parse(data);
  } catch (err) {
    if (err instanceof ZodError) {
      // attach the raw data for debugging
      (err as ZodError & { input: unknown }).input = data;
    }
    throw err;
  }
}
