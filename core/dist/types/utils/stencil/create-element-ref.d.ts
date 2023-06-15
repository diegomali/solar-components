type NativeRefFunction = (elm?: HTMLElement) => void;
/**
 * Represents a reference function that contains a nativeElement instance.
 * @link https://stenciljs.com/docs/templating-jsx#getting-a-reference-to-a-dom-element
 */
export interface ElementRef<T> extends NativeRefFunction {
  nativeElement?: T;
}
/**
 * Creates a ElementRef function.
 */
export declare function createElementRef<T extends HTMLElement>(): ElementRef<T>;
export {};
