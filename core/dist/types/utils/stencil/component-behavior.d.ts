import { ComponentInterface } from '../../stencil-public-runtime';
/**
 * Represents a Component that implements a Behavior Modification API.
 */
export interface ComponentBase extends ComponentInterface {
  /**
   * The main native nativeElement from the component.
   * @Element
   */
  host: HTMLElement;
  /**
   * The unload lifecycle hook.
   * Note that Stencil only calls disconnectedCallback if it is declared in the component.
   */
  disconnectedCallback: () => void;
  /**
   * If this behavior is applied to a native element.
   */
  native?: boolean;
}
/**
 * Represents a Component's Behavior Modification.
 */
export declare class ComponentBehavior<T extends ComponentBase> {
  /**
   * The internal component that this instance is attached.
   */
  component: T;
  /**
   * A hook called before the component load.
   */
  beforeAttach?(): Promise<any> | void;
  /**
   * A hook called after the component load.
   */
  attach?(): Promise<any> | void;
  /**
   * A hook called before the component destroy.
   */
  detach?(): Promise<any> | void;
  constructor(component: T);
}
