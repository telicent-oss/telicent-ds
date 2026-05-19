import { z } from "zod";

export const ENCODE_SEARCH_PARAMS_MODES_Schema = z.union([
  z.literal("as base64"),
  z.literal("as uri component"),
]);

export type ENCODE_SEARCH_PARAMS_MODES_Type = z.infer<
  typeof ENCODE_SEARCH_PARAMS_MODES_Schema
>;
