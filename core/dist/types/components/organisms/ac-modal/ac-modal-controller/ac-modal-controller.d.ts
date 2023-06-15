import { ControllerComponent, ControllerComponentOptions, HTMLStencilControlledElement } from '../../../../behaviors/controller-behavior/controller-behavior';
import { AcOverlay } from '../../../portals/ac-overlay/ac-overlay';
import { AcModal } from '../ac-modal';
/**
 * A controller that creates modal on the screen.
 */
export declare class AcModalController implements ControllerComponent<AcModal, HTMLAcModalElement> {
  /**
   * The instance of the controller behavior that setup the modals on the screen.
   */
  controllerBehavior: any;
  target: string;
  /**
   * The list of modals that are displayed.
   */
  modalList: HTMLStencilControlledElement<AcModal, HTMLAcModalElement>[];
  host: HTMLElement;
  bound: string;
  /**
   * Setup a new modal on the screen.
   */
  create(props: ControllerComponentOptions<AcModal & AcOverlay>): Promise<any>;
  /**
   * Clear all modals that are displayed.
   */
  dismiss(data: any): Promise<void>;
  disconnectedCallback(): void;
}
