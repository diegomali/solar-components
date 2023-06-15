import { EventEmitter } from '../../../stencil-public-runtime';
import { PortalBehavior, PortalComponent } from '../../../behaviors/portal-behavior';
import { TransitionComponent } from '../../../behaviors/transition-behavior';
/**
 * Accera's Panel webcomponent used as a menu.
 */
export declare class AcOverlay implements PortalComponent, TransitionComponent {
  portalBehavior: PortalBehavior;
  transitionBehavior: any;
  host: HTMLAcOverlayElement;
  vchildren: any;
  /**
   * The backdrop theme.
   */
  backdrop: 'dark' | 'light';
  noLayer: boolean;
  /**
   * Content position based on flex layout.
   */
  position: 'start start' | 'start center' | 'start flex-end' | 'center start' | 'center center' | 'center flex-end' | 'flex-end start' | 'flex-end center' | 'flex-end flex-end';
  disableClose: boolean;
  backDropClick: EventEmitter<void>;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  handleBackDropClick(): Promise<void>;
  render(): any;
}
