var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import debug from 'debug/src/browser';
import { Bind } from '../../utils/lang/bind';
import { dashToCamelCase } from '../../utils/lang/string';
import { toArray } from '../../utils/lang/to-array';
import { ComponentBehavior } from '../../utils/stencil/component-behavior';
import { FormBehavior } from './form-behavior';
const log = debug('solar:FormFieldBehavior');
/**
 * Adds form field features to a component, such as validations.
 */
export class FormFieldBehavior extends ComponentBehavior {
  /**
   * If this field is in a form, attach to it and initialize the FormLogic.
   */
  attach() {
    this.name = this.component.name;
    this.formAttached = this.component.host.closest('form');
    if (this.formAttached) {
      log('Attaching', this.name, this.formAttached);
      if (!this.formAttached.formBehavior) {
        this.formAttached.formBehavior = FormBehavior.forNative(this.formAttached);
      }
      this.formAttached.formBehavior.addField(this);
    }
    this.component.host.addEventListener('invalid', this.checkValidity);
  }
  /**
   * Removes this field from FormLogic, to ignore it validations.
   */
  detach() {
    if (this.formAttached) {
      log('Detaching', this.name, this.formAttached);
      this.formAttached.formBehavior.removeField(this);
    }
    this.component.host.removeEventListener('invalid', this.checkValidity);
  }
  /**
   * Set the field in the dirty state.
   */
  setDirty() {
    log('Set dirty', this.name, this.formAttached);
    this.component.host.classList.add('form-field--dirty');
    this.isDirty = true;
    if (this.formAttached) {
      this.formAttached.formBehavior.setUnchecked();
    }
  }
  /**
   * Set the field in the touched state.
   */
  setTouched() {
    log('Set touched', this.name);
    this.component.host.classList.add('form-field--touched');
    this.isTouched = true;
  }
  /**
   * Set the field in the valid state.
   */
  setValid() {
    log('Set valid', this.name);
    this.component.host.classList.add('form-field--valid');
    this.component.host.classList.remove('form-field--invalid');
    this.isValid = true;
  }
  /**
   * Set the field in the invalid state
   */
  setInvalid() {
    log('Set invalid', this.name);
    this.component.host.classList.add('form-field--invalid');
    this.component.host.classList.remove('form-field--valid');
    this.isValid = false;
  }
  /**
   * Cleans all the states, error and value of the field.
   */
  cleanup() {
    log('Cleaning up', this.name);
    this.component.host.classList.remove('form-field--invalid', 'form-field--valid', 'form-field--touched', 'form-field--dirty');
    this.component.value = undefined;
    this.component.error = undefined;
    this.isValid = undefined;
    this.isTouched = undefined;
    this.isDirty = undefined;
  }
  /**
   * Runs the all the validations of the field and sets the component's validity.
   */
  async checkValidity(value) {
    const valueToAssert = value || this.component.value || '';
    log('Validating', this.name, '=', valueToAssert);
    let validityState = { valid: true };
    const validators = toArray(this.component.validator);
    const nativeFormField = this.component.getNativeFormField ? await this.component.getNativeFormField() : null;
    if (nativeFormField) {
      const nativeValidity = nativeFormField.validity;
      validityState.badInput = nativeValidity.badInput;
      validityState.customError = nativeValidity.customError;
      validityState.patternMismatch = nativeValidity.patternMismatch;
      validityState.rangeOverflow = nativeValidity.rangeOverflow;
      validityState.rangeUnderflow = nativeValidity.rangeUnderflow;
      validityState.stepMismatch = nativeValidity.stepMismatch;
      validityState.tooLong = nativeValidity.tooLong;
      validityState.tooShort = nativeValidity.tooShort;
      validityState.typeMismatch = nativeValidity.typeMismatch;
      validityState.valid = nativeValidity.valid;
      validityState.valueMissing = nativeValidity.valueMissing;
    }
    // Running all validator functions
    const formBehavior = this.formAttached ? this.formAttached.formBehavior : null;
    for (const fn of validators) {
      let state;
      try {
        const exec = fn(valueToAssert, this, formBehavior);
        state = exec instanceof Promise ? await exec : exec;
      }
      catch (err) {
        log('Error in validator function', fn.name, err);
      }
      if (state) {
        // Assign the custom validity tokens.
        validityState = Object.assign(Object.assign({}, validityState), state);
        // If in the last verification it still valid
        // so we gonna check the overall state again.
        const { valid: stillValid } = validityState, validityTokens = __rest(validityState, ["valid"]);
        if (stillValid) {
          validityState.valid = !Object.values(validityTokens)
            .find(hasError => !!hasError);
        }
      }
    }
    if (validityState.valid) {
      this.component.error = null;
      this.setValid();
    }
    else {
      this.component.error = this.buildErrorMessageByValidityState(validityState) || true;
      this.setInvalid();
      this.component.host.dispatchEvent(new CustomEvent('formFieldInvalid', { detail: validityState }));
    }
    this.component.validity = validityState;
    return validityState;
  }
  /**
   * Add a validator to the validation pipeline.
   * @param validator The validation function.
   */
  addValidator(validator) {
    if (!this.component.validator) {
      this.component.validator = [];
    }
    else if (!(this.component.validator instanceof Array)) {
      this.component.validator = [this.component.validator];
    }
    this.component.validator.push(validator);
    return this;
  }
  getCustomErrorMessagesFromInlineAttrs() {
    const attrs = this.component.host.attributes;
    return Object.keys(attrs)
      .map(key => attrs[key].name)
      .filter(key => key.indexOf('-message') > -1)
      .reduce((acc, key) => {
      acc[dashToCamelCase(key)] = attrs[key].value;
      return acc;
    }, {});
  }
  getErrorMessages() {
    return this.getCustomErrorMessagesFromInlineAttrs();
  }
  buildErrorMessageByValidityState(validityState) {
    const messages = this.getErrorMessages();
    for (const token in validityState) {
      if (validityState[token] && token !== 'valid') {
        if (typeof validityState[token] === 'string') {
          return validityState[token];
        }
        else {
          return messages[token + 'Message'];
        }
      }
    }
  }
}
__decorate([
  Bind
], FormFieldBehavior.prototype, "checkValidity", null);
//# sourceMappingURL=form-field-behavior.js.map
