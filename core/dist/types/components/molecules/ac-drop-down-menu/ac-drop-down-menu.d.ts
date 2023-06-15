import { EventEmitter } from '../../../stencil-public-runtime';
import { AcDropOption } from './ac-drop-option';
export declare class AcDropDownMenu {
  /**
   * A reference to the ac-panel.
   */
  private selectPanel;
  /**
   * Internal reference to the select panel.
   */
  private SelectPanel;
  /**
   * Reference to the component element.
   */
  host: HTMLAcDropDownMenuElement;
  /**
   * List of all options.
   */
  options: AcDropOption[];
  /**
   * Value of selected option.
   */
  value: any;
  /**
   * Compact mode.
   */
  compact: boolean;
  /**
   * Event call on option change.
   */
  selectChange: EventEmitter;
  /**
   * Flag to control input focus.
   */
  hasFocus: boolean;
  /**
   * The instance of the FocusBehavior used to close the panel when the user clicks outside.
   */
  focusBehavior: any;
  /**
   * Flag that control the panel visibility.
   */
  isPanelOpen: boolean;
  isShowingPanelDidUpdate(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  /**
   * Toggle the panel view.
   */
  whenBlur(element: any): void;
  handlePanel(): void;
  handleSelect(option: AcDropOption): void;
  render(): any;
}
