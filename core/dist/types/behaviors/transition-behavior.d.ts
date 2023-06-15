import { ComponentBase, ComponentBehavior } from '../utils/stencil/component-behavior';
/**
 * Implements hooks to control the transitions states, such as entering and leaving.
 * Useful for CSS animations. CSS classes are provided, controlled by it state:
 * - `transition--before-enter` The state before the component enters on the screen.
 * - `transition--after-enter` The state after the component enters on the screen.
 * - `transition--before-leave` The state before the component leave the screen.
 */
export declare class TransitionBehavior extends ComponentBehavior<TransitionComponent> {
  removeIsQueued: boolean;
  /**
   * Applies a mokeypatch of componentWillLoad to add the transition hooks. Also, it dispatch the CSS transitions.
   */
  beforeAttach(): void;
  /**
   * Execute the componentWillEnter transition.
   * Also, it applies a mokeypatch of the native Element#remove function to add the transition hooks.
   */
  attach(): Promise<void>;
  detach(): void;
  /**
   * A custom remove teardown used to replace the native HTMLElement#remove, dispatching the CSS transitions.
   */
  customRemoveFn(): Promise<void>;
}
/**
 * Represents a Component that implements the Transition Behavior in it.
 */
export interface TransitionComponent extends ComponentBase {
  /**
   * The behavior instance itself applied to the component.
   */
  transitionBehavior: TransitionBehavior;
  /**
   * A hook dispatched when the component loads. Supporting async operations.
   */
  componentWillLoad: () => Promise<void> | void;
  /**
   * A hook dispatched when the component appears on the screen.
   */
  componentWillEnter?: () => Promise<any> | void;
  /**
   * A hook dispatched when the component leaves the screen.
   */
  componentWillLeave?: () => Promise<any> | void;
}
