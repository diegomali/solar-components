import { VNode } from '../../stencil-public-runtime';
import { HTMLStencilElement } from '../../stencil-public-runtime';
import { FieldsOf } from '../../utils/lang/types';
import { ComponentBase, ComponentBehavior } from '../../utils/stencil/component-behavior';
import { FrameworkDelegate } from './delegates/framework-delegate';
/**
 * Used to implement a Controller Component logic.
 * A controller component is a singleton that can make operations in a context of all the layout,
 * breaking the atomic design.
 * Use it to create modals, toasts, floating panels etc.
 * This was based on the abstraction from Ionic Team.
 */
export declare class ControllerBehavior<C, E extends HTMLStencilElement> extends ComponentBehavior<ControllerComponent<C, E>> {
  /**
   * The element that it is bounded.
   */
  root: HTMLElement;
  /**
   * Bound the controller to the provided bound or to the parentElement.
   */
  attach(): void;
  /**
   * Clear the controller before unload.
   */
  detach(): Promise<any> | void;
  /**
   * Create a new element by the Controller's managed target and append it to the bound parent.
   * @param options The properties based on the target component.
   * @param customDelegate A custom DOM api used to attach the component.
   */
  create(options: ControllerComponentOptions<C>, customDelegate?: FrameworkDelegate): Promise<E & HTMLStencilControlledElement<C, E>>;
}
/**
 * Represents a Controller Component that will manage to create a new target component.
 */
export interface ControllerComponent<C, E extends HTMLStencilElement> extends ComponentBase {
  /**
   * The instance of this behaviour.
   */
  controllerBehavior: ControllerBehavior<C, E>;
  /**
   * The tag of the component that will be managed.
   */
  target: string;
  /**
   * An optional property used to refer the parent element that the component will be attached to.
   * @Prop
   */
  bound: string;
  /**
   * Set properties to the managed component.
   * @Method
   */
  create(props: ControllerComponentOptions<C>): Promise<E & HTMLStencilControlledElement<C, E>>;
  /**
   * Clear properties of the managed component.
   * @Method
   */
  dismiss(data?: any): Promise<void>;
  willDismissComponent?(element: E & HTMLStencilControlledElement<C, E>, data?: any): Promise<boolean>;
}
/**
 * Represents the custom props that can be passed to a controlled component.
 */
export type ControllerComponentOptions<C> = FieldsOf<C> & {
  component?: any;
  componentProps?: any;
  wrapper?: any;
  render?: (data: any) => VNode;
  [key: string]: any;
};
export interface ControlledElementFields {
  onDidDismiss?: <T>() => Promise<T>;
  onWillDismiss?: <T>() => Promise<T>;
  dismiss?: (data: any) => Promise<void>;
  present?: () => Promise<void>;
}
/**
 * Represents a Component that was created by a Controller.
 */
export type HTMLStencilControlledElement<C, E extends HTMLStencilElement> = E & ControlledElementFields & {
  _resolveDismiss: (data: any) => void;
  _resolveWillDismiss: (data: any) => void;
  controller: ControllerComponent<C, E>;
};
