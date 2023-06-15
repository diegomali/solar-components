import { EventEmitter } from '../../../stencil-public-runtime';
import { TransitionComponent } from '../../../behaviors/transition-behavior';
/**
 * Accera's Panel webcomponent used as a menu.
 */
export declare class AcPanel implements TransitionComponent {
  transitionBehavior: any;
  host: HTMLAcPanelElement;
  /**
   * Dispatched when the modal closes.
   */
  closeEv: EventEmitter<void>;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): any[];
}
