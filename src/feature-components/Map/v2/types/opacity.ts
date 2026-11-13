import { z } from "zod";

export const OpacitySchema = z.number().finite().min(0).max(1);

export type Opacity = z.infer<typeof OpacitySchema>;
