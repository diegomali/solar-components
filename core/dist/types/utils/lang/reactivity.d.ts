/**
 * A method decorator used to debounce calls.
 * @param delay The amount of time in milliseconds to debounce.
 */
export declare function Debounced(delay: any): MethodDecorator;
/**
 * Used to debounce a target function calls.
 * @param func The target function to debounce.
 * @param delay The amount of time in milliseconds to debounce.
 */
export declare function debounce(func: any, delay: any): (...args: any[]) => void;
