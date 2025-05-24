declare function get(): string | undefined;
declare function remove(): void;
declare function set(val: number): void;
export declare const autoLoggedOut: {
    get: typeof get;
    set: typeof set;
    remove: typeof remove;
};
export {};
