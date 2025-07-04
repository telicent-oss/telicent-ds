declare function get(): string | number | undefined;
declare function remove(): void;
declare function set(val: string | number): void;
export declare const user: {
    get: typeof get;
    set: typeof set;
    remove: typeof remove;
};
export {};
