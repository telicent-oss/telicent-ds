/**
 * @param {*} message message to send to _other_ tabs/pages
 * @param {*} sourceClientId Normally would pass entire event, but using
 *    pass-by-value of single property, as events can mutate/garbage collect.
 */
declare function postMessageAll(message: any, sourceClientId: any): Promise<void>;
/**
 * Small, simple throttle fn
 */
declare function throttle(fn: any, duration: any): (...args: any[]) => void;
declare function postMessageAllThrottled(...args: any[]): void;
