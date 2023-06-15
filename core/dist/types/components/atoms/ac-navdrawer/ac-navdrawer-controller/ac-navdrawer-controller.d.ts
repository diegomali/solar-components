import { ControllerComponent, ControllerComponentOptions } from '../../../../behaviors/controller-behavior/controller-behavior';
import { AcOverlay } from '../../../portals/ac-overlay/ac-overlay';
import { AcNavdrawer } from '../ac-navdrawer';
/**
 * A controller that creates navdrawer on the screen.
 */
export declare class AcModalController implements ControllerComponent<AcNavdrawer, HTMLAcNavdrawerElement> {
  /**
   * The instance of the controller behavior that setup the modals on the screen.
   */
  controllerBehavior: any;
  target: string;
  host: HTMLElement;
  bound: string;
  /**
   * Setup a new navdrawer on the screen.
   */
  create(props: ControllerComponentOptions<AcNavdrawer & AcOverlay>): Promise<any>;
  /**
   * Clear all modals that are displayed.
   */
  dismiss(): Promise<void>;
  disconnectedCallback(): void;
}
