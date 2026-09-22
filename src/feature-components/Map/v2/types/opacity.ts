import { z } from "zod";

/**
 * Opacity from 0 to 1. `Layer.setOpacity` checks only `typeof opacity === "number"`, so NaN and Infinity are rejected here.
 */
export const OpacitySchema = z.number().finite().min(0).max(1);

export type Opacity = z.infer<typeof OpacitySchema>;
