import { FormFieldComponent } from '../../../behaviors/form-behavior';
import { CustomValidityState, ValidatorFn } from '../../../utils/validations/validations';
/**
 * Accera's full-featured Input Field web-component.
 */
export declare class AcInput implements FormFieldComponent {
  private acInputBase;
  host: HTMLAcInputElement;
  /**
   * The FormFieldBehavior instance.
   */
  formFieldBehavior: any;
  /**
   * The label text of the this input group.
   */
  label: string;
  /**
   * The type of the internal input.
   */
  type: string;
  /**
   * The helper text to guide the user.
   */
  helperText: string;
  /**
   * Request check validation on each input key event.
   */
  validateOnKeyup: boolean;
  /**
   * The value of the internal input.
   */
  value: any;
  /**
   * Set the component in the error state with a message.
   */
  error: string | boolean;
  /**
   * Get the last validity state from the checkValidity.
   */
  validity: CustomValidityState;
  /**
   * The validations that this field need.
   * This validations are checked on:
   * - Blur event
   * - Form submit event
   * - Each keyUp event ONLY IF the validateOnKeyup property is present.
   */
  validator: ValidatorFn | ValidatorFn[];
  /**
   * The mask of the input.
   */
  mask: string;
  /**
   * The HTML input field's name.
   */
  name: string;
  /**
   * The disabled mode.
   */
  disabled: boolean;
  /**
   * The native HTMLInputElement required attribute.
   */
  required: boolean;
  /**
   * The native HTMLInputElement pattern attribute.
   */
  pattern: string;
  /**
   * The native HTMLInputElement max attribute.
   */
  max: number;
  /**
   * The native HTMLInputElement maxlength attribute.
   */
  maxlength: number;
  /**
   * The native HTMLInputElement min attribute.
   */
  min: number;
  /**
   * The native HTMLInputElement min attribute.
   */
  minlength: number;
  /**
   * The native HTMLInputElement autofocus attribute.
   */
  autofocus: boolean;
  /**
   * The native HTMLInputElement autocomplete attribute.
   */
  autocomplete: string;
  /**
   * The native HTMLInputElement autocapitalize attribute.
   */
  autocapitalize: string;
  /**
   * The native HTMLInputElement placeholder attribute.
   */
  placeholder: string;
  /**
   * The native HTMLInputElement step attribute.
   */
  step: number;
  /**
   * Used to toggle the password view.
   */
  isShowingPassword: boolean;
  /**
   * Set the error state based on the error prop.
   * @param error An error message.
   */
  errorDidUpdate(error: any): void;
  /**
   * Applies transformations when the value update.
   */
  valueDidUpdate(): void;
  /**
   * Applies transformations when the mask update.
   */
  maskDidUpdate(): Promise<void>;
  handleKeyup(): Promise<void>;
  /**
   * Update the value and run validations as if the user change it manually.
   * When to use each:
   * input.value will only update the value, useful to set the initial value of the input.
   * input.setValue is useful to use values that are automatically set by an user's action, setting the unchecked state
   * to the form.
   */
  setValue(value: any): Promise<void>;
  /**
   * Get the unmasked value.
   */
  getRawValue(type?: string): Promise<any>;
  /**
   * Set focus state in the native input.
   */
  setFocus(): Promise<void>;
  getNativeFormField(): Promise<HTMLInputElement>;
  getFormFieldBehavior(): Promise<any>;
  componentDidLoad(): Promise<void>;
  disconnectedCallback(): void;
  /**
   * Toggle the password view.
   */
  private togglePassword;
  /**
   * Used as a listener to the change event. Dispatch form field validations.
   */
  private handleChange;
  /**
   * Used as a listener to the blur event. Dispatch form field validations.
   */
  private handleBlur;
  render(): any[];
}
