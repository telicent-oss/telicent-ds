import { z } from 'zod';

export declare const WipeOnMessageConfigSchema: z.ZodObject<{
    register: z.ZodObject<{
        scriptURL: z.ZodString;
        scope: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        scope: string;
        scriptURL: string;
    }, {
        scope: string;
        scriptURL: string;
    }>;
    fetchStatus: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodPromise<z.ZodObject<{
        status: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        status: number;
    }, {
        status: number;
    }>>>;
}, "strip", z.ZodTypeAny, {
    fetchStatus: (...args: unknown[]) => Promise<{
        status: number;
    }>;
    register: {
        scope: string;
        scriptURL: string;
    };
}, {
    fetchStatus: (...args: unknown[]) => Promise<{
        status: number;
    }>;
    register: {
        scope: string;
        scriptURL: string;
    };
}>;
export type WipeOnMessageConfig = z.infer<typeof WipeOnMessageConfigSchema>;
export declare const setupWipeOnMessage: (triggerWipe: () => void, checkUser: (reason: string) => Promise<void>, config: WipeOnMessageConfig) => Promise<void>;
