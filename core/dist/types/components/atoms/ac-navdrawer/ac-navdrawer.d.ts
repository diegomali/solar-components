import { EventEmitter } from '../../../stencil-public-runtime';
import { TransitionComponent } from '../../../behaviors/transition-behavior';
import { AcDropOption } from '../../molecules/ac-drop-down-menu/ac-drop-option';
/**
 * Accera's Sidebar webcomponent.
 */
export declare class AcNavdrawer implements TransitionComponent {
  childMenus: HTMLAcMenuElement[];
  /**
   * The instance of the transition behavior used to animate this component.
   */
  transitionBehavior: any;
  host: HTMLAcNavdrawerElement;
  /**
   * Show or hide toggle button
   */
  showToggle: boolean;
  /**
   * Show title in the navdrawer and toggle header
   */
  title: string;
  /**
   * The color theme.
   */
  theme: string;
  /**
   * Control the mode of the navedrawer.
   */
  mode: 'push' | 'over';
  /**
   * Compact mode.
   */
  compact: boolean;
  /**
   * List of option to be show on the header.
   */
  options: AcDropOption[];
  closeEv: EventEmitter<void>;
  compactDidUpdate(): void;
  componentDidLoad(): void;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  private loadItemsFromHTML;
  private toggleMode;
  private close;
  renderHeader(): any;
  render(): any;
}
