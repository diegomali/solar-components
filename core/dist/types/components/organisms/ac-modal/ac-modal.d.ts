import { EventEmitter } from '../../../stencil-public-runtime';
import { TransitionComponent } from '../../../behaviors/transition-behavior';
/**
 * Accera's full-featured modal web-component.
 */
export declare class AcModal implements TransitionComponent {
  /**
   * The instance of the transition behavior used to animate this component.
   */
  transitionBehavior: any;
  host: HTMLAcModalElement;
  /**
   * The title that will be displayed on the modal.
   */
  title: string;
  /**
   * Dispatched when the modal closes.
   */
  closeEv: EventEmitter<void>;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  private close;
  render(): any[];
}
