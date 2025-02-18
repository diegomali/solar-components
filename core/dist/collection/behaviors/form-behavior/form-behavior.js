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
import debug from 'debug/src/browser';
import { Bind } from '../../utils/lang/bind';
import { serializeForm } from '../../utils/serialize-form';
import { ComponentBehavior } from '../../utils/stencil/component-behavior';
const log = debug('solar:FormBehavior');
/**
 * Extend form features.
 */
export class FormBehavior extends ComponentBehavior {
  constructor() {
    super(...arguments);
    /**
     * All field that compound this Form.
     */
    this.fields = new Map();
    /**
     * Prevent user to leave the screen.
     */
    this.preventUnsavedIsAttached = false;
  }
  /**
   * Instantiate a FormBehavior for a native Form element.
   * @param host The target Form element.
   */
  static forNative(host) {
    return new FormBehavior({
      host,
      preventUnsaved: host.dataset.hasOwnProperty('preventUnsaved'),
      disconnectedCallback: null,
      native: true
    });
  }
  /**
   * Runs all validations from formBehavior's fields.
   * If it is valid, propagates the formSubmit event to other listeners
   */
  handleSubmit(ev) {
    log('Submitting', this);
    ev.preventDefault();
    const currentValidation = !!this.isValid;
    if (!currentValidation || this.isUnchecked) {
      this.checkValidity()
        .then(errors => {
        if (Object.keys(errors).length === 0) {
          this.component.host.dispatchEvent(new CustomEvent('formSubmit'));
        }
      });
    }
  }
  /**
   * Attach a listener to 'submit' to the formBehavior,
   * preventing the form submission if it is invalid.
   */
  attach() {
    log('Initializing', this);
    this.component.host.addEventListener('submit', this.handleSubmit);
  }
  detach() {
    this.component.host.removeEventListener('submit', this.handleSubmit);
  }
  /**
   * Set the form in the valid state.
   */
  setValid() {
    log('Set valid', this);
    this.isValid = true;
    this.component.host.classList.remove('form--invalid');
    this.component.host.classList.add('form--valid');
  }
  /**
   * Set the form in the invalid state.
   */
  setInvalid() {
    log('Set invalid', this);
    this.isValid = false;
    this.component.host.classList.remove('form--valid');
    this.component.host.classList.add('form--invalid');
  }
  /**
   * Set the form in the unchecked state.
   */
  setUnchecked() {
    log('Set unchecked', this);
    this.isUnchecked = true;
    this.isValid = false;
    this.component.host.classList.remove('form--valid', 'form--invalid');
    this.component.host.classList.add('form--unchecked');
    // Prevent close the page with unsaved changes.
    if (!this.preventUnsavedIsAttached &&
      (this.component.preventUnsaved || this.component.preventUnsaved === '')) {
      log('Preventing Unsaved');
      window.addEventListener('beforeunload', e => {
        if (this.isUnchecked) {
          const confirmationMessage = this.component.preventUnsaved;
          (e || window.event).returnValue = confirmationMessage; // Gecko + IE
          return confirmationMessage; // Gecko + Webkit, Safari, Chrome etc.
        }
      });
      this.preventUnsavedIsAttached = true;
    }
  }
  /**
   * Set the form in the checked state.
   */
  setChecked() {
    log('Set checked', this);
    this.isUnchecked = false;
    this.component.host.classList.remove('form--unchecked');
  }
  /**
   * Cleans all the states, errors and values of the form.
   */
  cleanup() {
    log('Cleaning', this);
    this.pristine();
    const fieldsAsArray = Array.from(this.fields.values());
    fieldsAsArray.forEach(f => f.cleanup());
  }
  /**
   * Set the form in the pristine state, preserving values, removing the validations and unchecked.
   */
  pristine() {
    log('Set pristine', this);
    this.isValid = false;
    this.isUnchecked = false;
    this.component.host.classList.remove('form--unchecked', 'form--valid', 'form--invalid');
  }
  /**
   * Adds a field to this logic. Note that the field must have a name.
   * @param field A component's FormFieldBehavior
   */
  addField(field) {
    this.fields.set(field.name, field);
  }
  /**
   * Remove a field from this logic.
   * @param field A component's FormFieldBehavior
   */
  removeField(field) {
    this.fields.delete(field.name);
  }
  /**
   * Runs all field validations from the formBehavior.
   */
  async checkValidity() {
    log('Validating formBehavior', this);
    this.setChecked();
    const fieldsAsArray = Array.from(this.fields.values());
    const errors = {};
    await Promise.all(fieldsAsArray
      .map(f => f.checkValidity()
      .then(state => {
      if (!state.valid) {
        errors[f.name] = state;
      }
    })));
    if (Object.keys(errors).length === 0) {
      this.setValid();
    }
    else {
      this.setInvalid();
      this.component.host.dispatchEvent(new CustomEvent('formInvalid', { detail: errors }));
    }
    return errors;
  }
  serialize(options) {
    log('Serializing', this.component.host, serializeForm(this.component.host, options));
    return serializeForm(this.component.host, options);
  }
}
__decorate([
  Bind
], FormBehavior.prototype, "handleSubmit", null);
//# sourceMappingURL=form-behavior.js.map
