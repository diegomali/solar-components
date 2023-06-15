import { EventEmitter } from '../../../stencil-public-runtime';
import { FocusableComponent } from '../../../behaviors/focus-behavior';
/**
 * Accera's layout webcomponent.
 */
export declare class AcLayout implements FocusableComponent {
  host: HTMLAcLayoutElement;
  contentElt: HTMLElement;
  focusBehavior: any;
  focusTarget: HTMLElement;
  hasFocus: boolean;
  /**
   * Collapse a nav drawer.
   */
  collapsed: 'nav-left';
  contentScroll: EventEmitter<{
    top: number;
    left: number;
  }>;
  collapsedDidUpdate(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  whenBlur(element: any): void;
  handleContentScroll(): void;
  render(): any;
}
