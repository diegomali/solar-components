import { ControllerComponent, ControllerComponentOptions, HTMLStencilControlledElement } from '../../../../behaviors/controller-behavior/controller-behavior';
import { AcToast } from '../ac-toast';
export declare class AcToastController implements ControllerComponent<AcToast, HTMLAcToastElement> {
  controllerBehavior: any;
  target: string;
  toastList: HTMLStencilControlledElement<AcToast, HTMLAcToastElement>[];
  host: HTMLElement;
  bound: string;
  create(props: ControllerComponentOptions<AcToast>): Promise<any>;
  dismiss(data: any): Promise<void>;
  disconnectedCallback(): void;
}
