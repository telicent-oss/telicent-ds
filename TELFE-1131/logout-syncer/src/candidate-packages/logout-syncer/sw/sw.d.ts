declare function postMessageAll(message: any): Promise<void>;
/**
 * Small, simple throttle fn
 */
declare function throttle(fn: any, duration: any): (...args: any[]) => void;
declare function postMessageAllThrottled(...args: any[]): void;
