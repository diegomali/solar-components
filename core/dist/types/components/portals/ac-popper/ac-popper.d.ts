import { Placement, PopperOptions } from 'popper.js';
import { PopperComponent } from '../../../behaviors/popper-behavior';
import { PortalBehavior, PortalComponent } from '../../../behaviors/portal-behavior';
import { TransitionComponent } from '../../../behaviors/transition-behavior';
export declare class AcPopper implements PortalComponent, TransitionComponent, PopperComponent {
  portalBehavior: PortalBehavior;
  transitionBehavior: any;
  popperBehavior: any;
  host: any;
  vchildren: any;
  popperPivot: string | HTMLElement;
  popperPlacement: Placement;
  popperOptions: PopperOptions;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): any[];
}
