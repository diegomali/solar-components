import { FormFieldComponent } from '../../../behaviors/form-behavior';
import { CustomValidityState, ValidatorFn } from '../../../utils/validations/validations';
export declare class AcToggle implements FormFieldComponent {
  nativeInput: HTMLInputElement;
  formFieldBehavior: any;
  host: HTMLAcToggleElement;
  label: string;
  name: string;
  error: string;
  /**
   * Set the label direction.
   */
  direction: 'left' | 'right';
  /**
   * The validity state.
   */
  validity: CustomValidityState;
  /**
   * The actual checked state.
   */
  checked: boolean;
  /**
   * Validation pipeline for this field.
   */
  validator: ValidatorFn | ValidatorFn[];
  value: string;
  disabled: boolean;
  /**
   * Mark this field as required.
   */
  required: boolean;
  private handleChange;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  getFormFieldBehavior(): Promise<any>;
  render(): any;
}
