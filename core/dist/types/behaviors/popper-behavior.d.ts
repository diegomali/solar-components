import Popper from 'popper.js';
import { ComponentBase, ComponentBehavior } from '../utils/stencil/component-behavior';
/**
 * Implements the Popper.js logic in the component, useful to build tooltips and another floating elements.
 * @link https://popper.js.org/popper-documentation.html.
 */
export declare class PopperBehavior extends ComponentBehavior<PopperComponent> {
  /**
   * Internal popper instance.
   */
  popper: Popper;
  attach(): void;
  detach(): void;
}
/**
 * Represents a component that implements the Popper logic.
 */
export interface PopperComponent extends ComponentBase {
  /**
   * The behavior instance.
   */
  popperBehavior: PopperBehavior;
  /**
   * A custom target to use instead of component's host.
   */
  popperTarget?: HTMLElement;
  /**
   * Pivot element used to place the popper.
   */
  popperPivot: HTMLElement | string;
  /**
   * Popper.js's placement.
   * @link https://popper.js.org/popper-documentation.html#Popper.placements
   */
  popperPlacement: Popper.Placement;
  /**
   * Popper.js's options.
   * @link https://popper.js.org/popper-documentation.html#Popper.placements
   */
  popperOptions: Popper.PopperOptions;
}
