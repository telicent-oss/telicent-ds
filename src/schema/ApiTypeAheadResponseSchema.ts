import { z } from 'zod';

const documentSchema = z.object({
    uri: z.string(),
    primaryName: z.string(),
    types: z.array(z.string()),
    literals: z.object({
      "telicent:primaryName": z.array(z.string()),
    }),
    isState: z.boolean(),
    inLocation: z.string(),
    metadata: z.object({
      documentFormat: z.string(),
      generatedBy: z.string(),
      generatorVersion: z.string(),
    })
  });
  
  const resultSchema = z.object({
    id: z.string().url(),
    score: z.number(),
    document: documentSchema,
  });
  
  // @telicent-oss/api-helper candidate
  export const ApiTypeAheadResponseSchema = z.object({
    maybeMore: z.boolean(),
    limit: z.number(),
    offset: z.number(),
    query: z.string(),
    type: z.literal("phrase"),
    results: z.array(resultSchema),
  });