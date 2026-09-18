import { z } from "zod";

/**
 * Layer opacity as OpenLayers defines it: a finite fraction from 0 to 1.
 *
 * TypeScript cannot exclude NaN from `number` or bound it to a range, so the
 * schema carries what the type cannot.
 */
export const OpacitySchema = z.number().finite().min(0).max(1);

export type Opacity = z.infer<typeof OpacitySchema>;
