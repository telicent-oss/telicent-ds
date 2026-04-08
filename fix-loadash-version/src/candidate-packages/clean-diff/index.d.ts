export declare function cleanDiff<T>(before: T, after: T): string;
export declare function cleanSerializedDiff<T>(before: T, after: T): string;
export declare const cleanHtml: (el: Element | Document | DocumentFragment) => string;
export declare const cleanHtmlDiff: (before: Element | Document | DocumentFragment, after: Element | Document | DocumentFragment) => string;
