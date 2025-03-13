import { z } from 'zod';

export declare const ApiTypeAheadResponseSchema: z.ZodObject<{
    maybeMore: z.ZodBoolean;
    limit: z.ZodNumber;
    offset: z.ZodNumber;
    query: z.ZodString;
    type: z.ZodLiteral<"phrase">;
    results: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        score: z.ZodNumber;
        document: z.ZodObject<{
            uri: z.ZodString;
            primaryName: z.ZodString;
            types: z.ZodArray<z.ZodString, "many">;
            literals: z.ZodObject<{
                "telicent:primaryName": z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                "telicent:primaryName": string[];
            }, {
                "telicent:primaryName": string[];
            }>;
            isState: z.ZodBoolean;
            inLocation: z.ZodString;
            metadata: z.ZodObject<{
                documentFormat: z.ZodString;
                generatedBy: z.ZodString;
                generatorVersion: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                documentFormat: string;
                generatedBy: string;
                generatorVersion: string;
            }, {
                documentFormat: string;
                generatedBy: string;
                generatorVersion: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            metadata: {
                documentFormat: string;
                generatedBy: string;
                generatorVersion: string;
            };
            uri: string;
            primaryName: string;
            types: string[];
            literals: {
                "telicent:primaryName": string[];
            };
            isState: boolean;
            inLocation: string;
        }, {
            metadata: {
                documentFormat: string;
                generatedBy: string;
                generatorVersion: string;
            };
            uri: string;
            primaryName: string;
            types: string[];
            literals: {
                "telicent:primaryName": string[];
            };
            isState: boolean;
            inLocation: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        document: {
            metadata: {
                documentFormat: string;
                generatedBy: string;
                generatorVersion: string;
            };
            uri: string;
            primaryName: string;
            types: string[];
            literals: {
                "telicent:primaryName": string[];
            };
            isState: boolean;
            inLocation: string;
        };
        score: number;
    }, {
        id: string;
        document: {
            metadata: {
                documentFormat: string;
                generatedBy: string;
                generatorVersion: string;
            };
            uri: string;
            primaryName: string;
            types: string[];
            literals: {
                "telicent:primaryName": string[];
            };
            isState: boolean;
            inLocation: string;
        };
        score: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    results: {
        id: string;
        document: {
            metadata: {
                documentFormat: string;
                generatedBy: string;
                generatorVersion: string;
            };
            uri: string;
            primaryName: string;
            types: string[];
            literals: {
                "telicent:primaryName": string[];
            };
            isState: boolean;
            inLocation: string;
        };
        score: number;
    }[];
    type: "phrase";
    offset: number;
    query: string;
    maybeMore: boolean;
    limit: number;
}, {
    results: {
        id: string;
        document: {
            metadata: {
                documentFormat: string;
                generatedBy: string;
                generatorVersion: string;
            };
            uri: string;
            primaryName: string;
            types: string[];
            literals: {
                "telicent:primaryName": string[];
            };
            isState: boolean;
            inLocation: string;
        };
        score: number;
    }[];
    type: "phrase";
    offset: number;
    query: string;
    maybeMore: boolean;
    limit: number;
}>;
