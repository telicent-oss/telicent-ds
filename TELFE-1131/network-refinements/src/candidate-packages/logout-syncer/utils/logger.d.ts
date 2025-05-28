declare function setActive(val?: boolean): void;
export declare const logger: {
    warn: (...args: unknown[]) => false | void | undefined;
    log: (...args: unknown[]) => false | void | undefined;
    info: (...args: unknown[]) => false | void | undefined;
    setActive: typeof setActive;
};
export {};
