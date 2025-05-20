declare function get(): string | null;
declare function remove(): void;
declare function set(val: number): void;
export declare const autoLoggedOut: {
    sessionStorage: {
        get: typeof get;
        set: typeof set;
        remove: typeof remove;
    };
};
export {};
