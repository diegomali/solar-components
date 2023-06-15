import { ControllerComponent, ControllerComponentOptions } from '../../../../behaviors/controller-behavior/controller-behavior';
import { AcPopper } from '../../../portals/ac-popper/ac-popper';
import { AcPanel } from '../ac-panel';
/**
 * A controller that creates modal on the screen.
 */
export declare class AcPanelController implements ControllerComponent<AcPanel, HTMLAcPanelElement> {
  /**
   * The instance of the controller behavior that setup the modals on the screen.
   */
  controllerBehavior: any;
  target: string;
  host: HTMLElement;
  bound: string;
  /**
   * Setup a new modal on the screen.
   */
  create(props: ControllerComponentOptions<AcPanel & AcPopper>): Promise<any>;
  /**
   * Clear all modals that are displayed.
   */
  dismiss(elt?: HTMLAcPanelElement): Promise<void>;
  disconnectedCallback(): void;
}
