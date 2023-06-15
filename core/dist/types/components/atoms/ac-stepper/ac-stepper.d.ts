import { ComponentInterface, EventEmitter } from '../../../stencil-public-runtime';
/**
 * Accera's full-featured stepper web-component.
 */
export declare class AcStepper implements ComponentInterface {
  /**
   * The count of steps to be displayed.
   * TODO: It mighty support an array of steps in the future.
   */
  steps: number;
  /**
   * The number of concluded steps.
   */
  done: number;
  /**
   * Dispatched when the steps state changes.
   */
  stepperChange: EventEmitter<{
    index: number;
  }>;
  /**
   * Increments the count of concluded steps.
   */
  next(): Promise<void>;
  /**
   * Decrement the count of concluded steps.
   */
  previous(): Promise<void>;
  render(): any[];
}
