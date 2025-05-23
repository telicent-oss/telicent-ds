import { z } from "zod";

// Simulating React.ReactElement validation
export const reactElementSchema = z.object({
  type: z.union([z.string(), z.function(), z.symbol(), z.object({}).passthrough()]), // Type can be a string or a function (JSXElementConstructor)
  props: z.record(z.any()), // Props is an object with any keys
  key: z.union([z.string(), z.number(), z.null()]).optional(), // Key is either string, number, or null
});

// z.object({}).passthrough() ← allow component types that are objects (e.g. styled, memo, forwardRef
