import { EventEmitter } from '../../../stencil-public-runtime';
import { AsyncDataComponent } from '../../../behaviors/async-data-behavior';
import { FocusableComponent } from '../../../behaviors/focus-behavior';
import { FormFieldComponent } from '../../../behaviors/form-behavior';
import { AcOption } from '../../../utils/types/ac-option';
import { CustomValidityState, ValidatorFn } from '../../../utils/validations/validations';
/**
 * Accera's full-featured select webcomponent.
 */
export declare class AcSelect implements FocusableComponent, FormFieldComponent, AsyncDataComponent<SelectFetchParams, AcOption[]> {
  /**
   * The count of max items to render in the select list, used to calculate the size of the panel.
   */
  static readonly MAX_ITEMS_TO_RENDER = 10;
  /**
   * The height of each item to render, used to calculate the size of the panel.
   */
  static readonly ITEM_HEIGHT = 30;
  private SelectPanel;
  /**
   * A reference to the ac-input-base component.
   */
  acInputBase: HTMLAcInputBaseElement;
  /**
   * The native select element.
   */
  nativeSelect: HTMLSelectElement;
  /**
   * A reference to the ac-panel.
   */
  selectPanel: HTMLAcPanelElement;
  /**
   * The instance of the FocusBehavior used to close the panel when the user clicks outside.
   */
  focusBehavior: any;
  /**
   * The instance of the FormFieldBehavior.
   */
  formFieldBehavior: any;
  /**
   * The instance of the AsyncDataBehavior used to control async data features.
   */
  asyncDataBehavior: any;
  hasFocus: boolean;
  /**
   * Use to request a formFieldBehavior.checkValidity call.
   */
  requestCheckValidity: boolean;
  host: HTMLAcSelectElement;
  /**
   * The label text of the this input group.
   */
  label: string;
  /**
   * The helper text to guide the user.
   */
  helperText: string;
  /**
   * Set the loading mode, showing a loading icon.
   */
  loading: boolean;
  /**
   * Set the loading mode, showing a loading icon.
   */
  fetch: (params: any) => Promise<{
    links?: any;
    meta?: any;
    data: AcOption[];
  }>;
  /**
   * Set the field in the error state with a message.
   */
  error: string | boolean;
  /**
   * The validator functions.
   */
  validator: ValidatorFn | ValidatorFn[];
  /**
   * The validity state.
   */
  validity: CustomValidityState;
  /**
   * The options that will be displayed in the panel.
   */
  options: AcOption[];
  /**
   * The value of the internal input.
   */
  value: (string | number)[] | string | number;
  /**
   * The name of the internal input.
   */
  name: string;
  /**
   * If true, the component will handle multiple selected items.
   */
  multiple: boolean;
  /**
   * Set the disabled mode.
   */
  disabled: boolean;
  /**
   * Set the search mode.
   */
  searchable: boolean;
  /**
   * Set the custom empty result text.
   */
  noResultsLabel: string;
  /**
   * Set the custom search helper text.
   */
  searchHelperLabel: string;
  /**
   * The native required attribute.
   */
  required: boolean;
  /**
   * Select size
   */
  size: 'small' | 'large';
  /**
   * Used to toggle the panel view.
   */
  isShowingPanel: boolean;
  /**
   * The text that will be displayed on the select input based on it value.
   */
  selectedText: string;
  /**
   * The filtered options based on the filter.
   */
  filteredOptions: AcOption[];
  /**
   * The filter text used to search through the options.
   */
  filter: string;
  /**
   * Fired when the user select/deselect an option.
   */
  selectChange: EventEmitter<any>;
  valueDidUpdate(newValue: (number | string)[] | number | string, oldValue: (number | string)[] | number | string): void;
  optionsDidUpdate(newOptions: any, oldOptions: any): void;
  isShowingPanelDidUpdate(): void;
  errorDidUpdate(error: any): void;
  filterDidUpdate(): void;
  getNativeFormField(): Promise<HTMLSelectElement>;
  getSelectedOptions(): Promise<AcOption<{}>[]>;
  setValue(values: any): Promise<void>;
  setInitialOption(option: AcOption | AcOption[]): Promise<void>;
  getFormFieldBehavior(): Promise<any>;
  /**
   * Toggle the panel view.
   */
  whenBlur(element: any): void;
  whenReceiveData(metaData: any): void;
  getFetchParams(): {
    filter: string;
  };
  componentDidLoad(): void;
  disconnectedCallback(): void;
  componentDidUpdate(): void;
  /**
   * Filter the options by the actual value. Used to update the options state by an external value update.
   */
  private getOptionsByValue;
  /**
   * Generate the selectedText based on the selected options.
   */
  private formatSelectedText;
  /**
   * Load the options elements from the children HTML.
   */
  private loadOptionsFromHTML;
  private renderNativeOptions;
  private renderOptions;
  /**
   * Toggle the panel.
   */
  private togglePanel;
  /**
   * Open the panel.
   */
  private openPanel;
  /**
   * Close the panel.
   */
  private closePanel;
  /**
   * A listener that is dispatched when the user click on a select's option.
   */
  private handleSelect;
  private handleDebouncedKeyUp;
  private handleChangeInput;
  render(): any;
}
export interface SelectFetchParams {
  filter: string;
}
