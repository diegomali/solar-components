'use strict';

const browser = require('./browser-9c45fd25.js');
const bind = require('./bind-c359decd.js');
const componentBehavior = require('./component-behavior-ab8d7c53.js');

const dashToCamelCase = str => str.replace(/-([a-z])/g, g => g[1].toUpperCase());

function toArray(value) {
  return value ?
    value instanceof Array ? value : [value]
    : [];
}

/**
 * Used to assign into a object field, accessing it by it Form Data Path,
 * commonly used in PHP's form data parsing engine.
 * @param target The target Object that will be assigned.
 * @param path The Form Data Path to assign the value. Ex: `user[name]`.
 * @param value The value of the field.
 */
function assignByFormDataPath(target, path, value) {
  const pathTokens = path.split(/\[/).map(p => p.replace(/\]/, ''));
  let i;
  let actualTarget = target;
  let lastTarget = null;
  for (i = 0; i < pathTokens.length; i++) {
    if (/^(\s*|\d+)$/.test(pathTokens[i])) {
      if (!(lastTarget[pathTokens[i - 1]] instanceof Array)) {
        lastTarget[pathTokens[i - 1]] = [];
      }
      const tempActual = actualTarget;
      actualTarget = lastTarget[pathTokens[i - 1]];
      lastTarget = tempActual;
      continue;
    }
    if (Array.isArray(actualTarget)) {
      actualTarget.push(actualTarget[pathTokens[i]] || {});
    }
    else {
      actualTarget[pathTokens[i]] = actualTarget[pathTokens[i]] || {};
    }
    lastTarget = actualTarget;
    actualTarget = actualTarget[pathTokens[i]];
  }
  if (actualTarget instanceof Array) {
    actualTarget.push(value);
  }
  else {
    lastTarget[pathTokens[i - 1]] = value;
  }
  return target;
}

/**
 * Serialize a Form element to JSON.
 * @param form The target form element.
 * @param options A set of custom options.
 */
function serializeForm(form, options = {}) {
  const obj = {};
  Array.prototype.slice.call(form.querySelectorAll('[name]' + (options.ignoreDisabled ? ':not([disabled])' : '')))
    .forEach(field => {
    if (field.name && ['file', 'reset', 'button'].indexOf(field.type) === -1 && field.tagName.indexOf('-') === -1) {
      switch (field.type) {
        case 'select-multiple':
          const options = [];
          Array.prototype.slice.call(field.options).forEach(option => {
            if (option.selected) {
              options.push(option.value);
            }
          });
          assignByFormDataPath(obj, field.name, options);
          break;
        case 'checkbox':
          if (field.checked) {
            assignByFormDataPath(obj, field.name, true);
          }
        case 'radio':
          if (field.checked) {
            assignByFormDataPath(obj, field.name, field.value);
          }
          break;
        default:
          if (field.value) {
            assignByFormDataPath(obj, field.name, field.value);
          }
          break;
      }
    }
  });
  return obj;
}

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const log$1 = browser.browser('solar:FormBehavior');
/**
 * Extend form features.
 */
class FormBehavior extends componentBehavior.ComponentBehavior {
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
    log$1('Submitting', this);
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
    log$1('Initializing', this);
    this.component.host.addEventListener('submit', this.handleSubmit);
  }
  detach() {
    this.component.host.removeEventListener('submit', this.handleSubmit);
  }
  /**
   * Set the form in the valid state.
   */
  setValid() {
    log$1('Set valid', this);
    this.isValid = true;
    this.component.host.classList.remove('form--invalid');
    this.component.host.classList.add('form--valid');
  }
  /**
   * Set the form in the invalid state.
   */
  setInvalid() {
    log$1('Set invalid', this);
    this.isValid = false;
    this.component.host.classList.remove('form--valid');
    this.component.host.classList.add('form--invalid');
  }
  /**
   * Set the form in the unchecked state.
   */
  setUnchecked() {
    log$1('Set unchecked', this);
    this.isUnchecked = true;
    this.isValid = false;
    this.component.host.classList.remove('form--valid', 'form--invalid');
    this.component.host.classList.add('form--unchecked');
    // Prevent close the page with unsaved changes.
    if (!this.preventUnsavedIsAttached &&
      (this.component.preventUnsaved || this.component.preventUnsaved === '')) {
      log$1('Preventing Unsaved');
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
    log$1('Set checked', this);
    this.isUnchecked = false;
    this.component.host.classList.remove('form--unchecked');
  }
  /**
   * Cleans all the states, errors and values of the form.
   */
  cleanup() {
    log$1('Cleaning', this);
    this.pristine();
    const fieldsAsArray = Array.from(this.fields.values());
    fieldsAsArray.forEach(f => f.cleanup());
  }
  /**
   * Set the form in the pristine state, preserving values, removing the validations and unchecked.
   */
  pristine() {
    log$1('Set pristine', this);
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
    log$1('Validating formBehavior', this);
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
    log$1('Serializing', this.component.host, serializeForm(this.component.host, options));
    return serializeForm(this.component.host, options);
  }
}
__decorate$1([
  bind.Bind
], FormBehavior.prototype, "handleSubmit", null);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const log = browser.browser('solar:FormFieldBehavior');
/**
 * Adds form field features to a component, such as validations.
 */
class FormFieldBehavior extends componentBehavior.ComponentBehavior {
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
  bind.Bind
], FormFieldBehavior.prototype, "checkValidity", null);

exports.FormFieldBehavior = FormFieldBehavior;
exports.toArray = toArray;

//# sourceMappingURL=form-field-behavior-4f6a2403.js.map