import { HTMLStencilElement } from '../../../stencil-public-runtime';
import { FrameworkDelegate } from './framework-delegate';
/**
 * The default framework delegate.
 */
export declare class NativeDelegate implements FrameworkDelegate {
  createComponent<E extends HTMLStencilElement>(tag: string, options: any): E;
  attachViewToDom(domRoot: HTMLElement, element: any): Promise<void>;
  detachViewFromDom(element: any, props: any): Promise<void>;
}
export declare const nativeDelegate: NativeDelegate;
