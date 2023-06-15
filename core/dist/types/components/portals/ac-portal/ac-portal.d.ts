import { PortalBehavior, PortalComponent } from '../../../behaviors/portal-behavior';
import { TransitionComponent } from '../../../behaviors/transition-behavior';
export declare class AcPortal implements PortalComponent, TransitionComponent {
  portalBehavior: PortalBehavior;
  transitionBehavior: any;
  host: any;
  vchildren: any;
  componentWillLoad(): void;
  disconnectedCallback(): void;
}
