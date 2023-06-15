import { EventEmitter } from '../../../stencil-public-runtime';
import { AsyncDataBehavior, AsyncDataComponent, AsyncMetadata } from '../../../behaviors/async-data-behavior';
import { AcOption } from '../../../utils/types/ac-option';
import { FormFieldComponent, FormFieldBehavior } from '../../../behaviors/form-behavior';
import { ValidatorFn, CustomValidityState } from '../../../utils/validations/validations';
export declare class AcAutocomplete implements AsyncDataComponent<AutocompleteFetchParams, AcOption[]>, FormFieldComponent {
  /**
   * A reference to the component element.
   */
  host: HTMLElement;
  /**
   * A reference to the ac-input-base component.
   */
  acInputBase: HTMLAcInputBaseElement;
  /**
   * The name of the internal input.
   */
  name: string;
  /**
   * Set the disabled mode.
   */
  disabled: boolean;
  /**
   * The native required attribute.
   */
  required: boolean;
  /**
   * Set the custom empty result text.
   */
  noResultsLabel: string;
  /**
   * Action to be call when the user start typing.
   */
  fetch: (params: {
    filter: string;
  }) => Promise<AsyncMetadata<AcOption[]>>;
  /**
   * Set the loading mode, showing a loading icon.
   */
  loading: boolean;
  /**
   * The options that will be displayed in the panel.
   */
  options: AcOption[];
  /**
 * The validator functions.
 */
  validator: ValidatorFn | ValidatorFn[];
  /**
   * Set the field in the error state with a message.
   */
  error: string | boolean;
  /**
   * Select size
   */
  size: 'small' | 'large';
  /**
   * The label text of the input.
   */
  label: string;
  /**
   * The value of the input.
   */
  value: any;
  /**
   * The text that will be displayed on the select input based on it value.
   */
  selectedText: string;
  /**
   * The filter text used to search through the options.
   */
  filter: string;
  /**
   * Flag that control the panel visibility.
   */
  isPanelOpen: boolean;
  asyncDataBehavior: AsyncDataBehavior<AutocompleteFetchParams, AcOption[]>;
  /**
   * The instance of the FormFieldBehavior.
   */
  formFieldBehavior: FormFieldBehavior;
  /**
   * Flag to control input focus.
   */
  hasFocus: boolean;
  /**
   * Use to request a formFieldBehavior.checkValidity call.
   */
  requestCheckValidity: boolean;
  /**
   * The validity state.
   */
  validity: CustomValidityState;
  /**
 * Fired when the user select an option.
 */
  selectChange: EventEmitter<any>;
  private SelectPanel;
  /**
   * A reference to the ac-panel.
   */
  private selectPanel;
  /**
   * The instance of the FocusBehavior used to close the panel when the user clicks outside.
   */
  focusBehavior: any;
  errorDidUpdate(error: any): void;
  getFormFieldBehavior(): Promise<FormFieldBehavior>;
  handleSelected(option: AcOption): void;
  private handleDebouncedKeyUp;
  getFetchParams(): {
    filter: string;
  };
  isShowingPanelDidUpdate(): void;
  whenReceiveData(metaData: AsyncMetadata<AcOption[]>): void;
  componentDidUpdate(): void;
  /**
   * Toggle the panel view.
   */
  whenBlur(element: any): void;
  disconnectedCallback(): void;
  render(): any;
}
interface AutocompleteFetchParams {
  filter: string;
}
export {};
