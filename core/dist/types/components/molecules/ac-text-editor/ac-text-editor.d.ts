import { FormFieldComponent } from '../../../behaviors/form-behavior';
import { CustomValidityState, ValidatorFn } from '../../../utils/validations/validations';
export declare class AcTextEditor implements FormFieldComponent {
  private mediumEditor;
  private mediumRef;
  host: HTMLAcTextEditorElement;
  /**
   * The FormFieldBehavior instance.
   */
  formFieldBehavior: any;
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
   * The native HTMLInputElement required attribute.
   */
  required: boolean;
  /**
   * The disabled mode.
   */
  disabled: boolean;
  /**
   * The HTML input field's name.
   */
  name: string;
  /**
   * The value of the internal text editor.
   */
  value: string;
  /**
   * The placeholder of text editor.
   */
  placeholder: string;
  hasFocus: boolean;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private loadMedium;
  handleFocus(): void;
  handleBlur(): void;
  handleChange(): void;
  render(): any;
}
