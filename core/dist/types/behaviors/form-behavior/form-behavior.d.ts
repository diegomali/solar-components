import { SerializeFormOptions } from '../../utils/serialize-form';
import { ComponentBehavior } from '../../utils/stencil/component-behavior';
import { CustomValidityState } from '../../utils/validations/validations';
import { FormFieldBehavior } from './form-field-behavior';
/**
 * Extend form features.
 */
export declare class FormBehavior extends ComponentBehavior<any> {
  /**
   * Instantiate a FormBehavior for a native Form element.
   * @param host The target Form element.
   */
  static forNative(host: HTMLElement): FormBehavior;
  /**
   * All field that compound this Form.
   */
  private fields;
  /**
   * Prevent user to leave the screen.
   */
  private preventUnsavedIsAttached;
  /**
   * True if this form is valid.
   */
  isValid: boolean;
  /**
   * True if the user has changed any field from the form.
   */
  isUnchecked: boolean;
  /**
   * Runs all validations from formBehavior's fields.
   * If it is valid, propagates the formSubmit event to other listeners
   */
  private handleSubmit;
  /**
   * Attach a listener to 'submit' to the formBehavior,
   * preventing the form submission if it is invalid.
   */
  attach(): void;
  detach(): void;
  /**
   * Set the form in the valid state.
   */
  setValid(): void;
  /**
   * Set the form in the invalid state.
   */
  setInvalid(): void;
  /**
   * Set the form in the unchecked state.
   */
  setUnchecked(): void;
  /**
   * Set the form in the checked state.
   */
  setChecked(): void;
  /**
   * Cleans all the states, errors and values of the form.
   */
  cleanup(): void;
  /**
   * Set the form in the pristine state, preserving values, removing the validations and unchecked.
   */
  pristine(): void;
  /**
   * Adds a field to this logic. Note that the field must have a name.
   * @param field A component's FormFieldBehavior
   */
  addField(field: FormFieldBehavior): void;
  /**
   * Remove a field from this logic.
   * @param field A component's FormFieldBehavior
   */
  removeField(field: FormFieldBehavior): void;
  /**
   * Runs all field validations from the formBehavior.
   */
  checkValidity(): Promise<FormValidationErrors>;
  serialize(options?: SerializeFormOptions): {};
}
export interface FormValidationErrors {
  [key: string]: {
    errors: CustomValidityState;
  };
}
