import { ComponentBase, ComponentBehavior } from '../utils/stencil/component-behavior';
/**
 * Implements a Focus logic in a component, providing a control for blur clicks.
 */
export declare class FocusBehavior extends ComponentBehavior<FocusableComponent> {
  /**
   * Check if a target node branch has a data-toggle that match the host id.
   */
  static checkBypassNode(focusElt: any, target: any): boolean;
  /**
   * Filter all the clicks in the body and calls the `whenBlur` from the component if match an outside click.
   * @param ev A Click Event.
   */
  private handleBodyClick;
  /**
   * Setup the event listener to the body.
   */
  attach(): void;
  /**
   * Remove the event listener to the body.
   */
  detach(): void;
}
/**
 * Represents a component that implements the focus logic.
 */
export interface FocusableComponent extends ComponentBase {
  /**
   * The instance of the behavior applied in the component.
   */
  focusBehavior: FocusBehavior;
  /**
   * Called when the behavior detects a click outside of the component.
   */
  whenBlur: (element: HTMLElement) => void;
  /**
   * Used to control the focus state.
   */
  hasFocus: boolean;
  /**
   * The target to be checked. If it is null, the host field will be used.
   */
  focusTarget?: HTMLElement;
}
