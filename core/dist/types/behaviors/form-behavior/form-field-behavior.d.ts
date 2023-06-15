import { ComponentBehavior } from '../../utils/stencil/component-behavior';
import { CustomValidityState, ValidatorFn } from '../../utils/validations/validations';
import { FormFieldComponent } from './form-field-component';
/**
 * Adds form field features to a component, such as validations.
 */
export declare class FormFieldBehavior extends ComponentBehavior<FormFieldComponent> {
  /**
   * The form that this field is attached
   */
  private formAttached?;
  /**
   * The name of the field to use in the form.
   */
  name: string;
  /**
   * True if the value of this field is valid.
   * Note that needs to call `validate` to ensure it.
   */
  isValid: boolean;
  /**
   * True if the user has interacted with this field before.
   */
  isTouched: boolean;
  /**
   * True if the user has changed this field's value before.
   */
  isDirty: boolean;
  /**
   * If this field is in a form, attach to it and initialize the FormLogic.
   */
  attach(): void;
  /**
   * Removes this field from FormLogic, to ignore it validations.
   */
  detach(): void;
  /**
   * Set the field in the dirty state.
   */
  setDirty(): void;
  /**
   * Set the field in the touched state.
   */
  setTouched(): void;
  /**
   * Set the field in the valid state.
   */
  setValid(): void;
  /**
   * Set the field in the invalid state
   */
  setInvalid(): void;
  /**
   * Cleans all the states, error and value of the field.
   */
  cleanup(): void;
  /**
   * Runs the all the validations of the field and sets the component's validity.
   */
  checkValidity(value?: any): Promise<CustomValidityState>;
  /**
   * Add a validator to the validation pipeline.
   * @param validator The validation function.
   */
  addValidator(validator: ValidatorFn): this;
  getCustomErrorMessagesFromInlineAttrs(): any;
  getErrorMessages(): any;
  buildErrorMessageByValidityState(validityState: CustomValidityState): any;
}
