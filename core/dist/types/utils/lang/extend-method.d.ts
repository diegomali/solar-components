/**
 * Extend a method functionality, applying monkeypatch method.
 * @link https://www.audero.it/blog/2016/12/05/monkey-patching-javascript/
 * @param target The target object.
 * @param method The name of the method that will be extended.
 * @param extend The method's patch.
 */
export declare function extendMethod(target: any, method: string, extend: (original: Function, args?: any[]) => any): void;
