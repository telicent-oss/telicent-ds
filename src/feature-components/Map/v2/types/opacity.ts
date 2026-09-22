import { z } from "zod";

/**
 * Layer opacity: a fraction from 0 to 1, the range OpenLayers documents for
 * `Layer.setOpacity`. That method checks only `typeof opacity === "number"`,
 * so this schema also rejects NaN and Infinity.
 *
 * TypeScript cannot bound `number` to a range or exclude NaN, so the schema
 * carries what the type cannot.
 */
export const OpacitySchema = z.number().finite().min(0).max(1);

export type Opacity = z.infer<typeof OpacitySchema>;
