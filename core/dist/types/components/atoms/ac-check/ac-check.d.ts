import { FormFieldComponent } from '../../../behaviors/form-behavior';
import { CustomValidityState, ValidatorFn } from '../../../utils/validations/validations';
/**
 * Accera's full-featured checkbox web-component.
 */
export declare class AcCheck implements FormFieldComponent {
  nativeInput: HTMLInputElement;
  host: HTMLAcCheckElement;
  /**
   * The FormFieldBehavior instance.
   */
  formFieldBehavior: any;
  /**
   * The textual label of this field.
   */
  label: string;
  /**
   * The helper text to guide the user.
   */
  helperText: string;
  /**
   * The HTML field name.
   */
  name: string;
  /**
   * The HTML field value.
   */
  value: string;
  /**
   * Set the label direction.
   */
  direction: 'left' | 'right';
  /**
   * Error state and message of this field.
   */
  error: string;
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
  /**
   * The type of this field.
   */
  type: 'radio' | 'checkbox';
  /**
   * The native disabled mode.
   */
  disabled: boolean;
  /**
   * Mark this field as required.
   */
  required: boolean;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  checkedDidUpdate(): void;
  getNativeFormField(): Promise<HTMLInputElement>;
  getFormFieldBehavior(): Promise<any>;
  private handleChange;
  render(): any;
}
