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
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { h } from '@stencil/core';
import vanillaMasker from 'vanilla-masker';
import { FormFieldBehavior } from '../../../behaviors/form-behavior';
import { Bind } from '../../../utils/lang/bind';
import { AcFaIcon } from '../../utils/ac-fa-icon';
/**
 * Accera's full-featured Input Field web-component.
 */
export class AcInput {
  constructor() {
    /**
     * The FormFieldBehavior instance.
     */
    this.formFieldBehavior = new FormFieldBehavior(this);
    this.label = undefined;
    this.type = undefined;
    this.helperText = undefined;
    this.validateOnKeyup = undefined;
    this.value = undefined;
    this.error = undefined;
    this.validity = undefined;
    this.validator = undefined;
    this.mask = undefined;
    this.name = undefined;
    this.disabled = undefined;
    this.required = undefined;
    this.pattern = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.autofocus = undefined;
    this.autocomplete = undefined;
    this.autocapitalize = undefined;
    this.placeholder = undefined;
    this.step = undefined;
    this.isShowingPassword = undefined;
  }
  /**
   * Set the error state based on the error prop.
   * @param error An error message.
   */
  errorDidUpdate(error) {
    if (error) {
      if (error === 'true') {
        this.error = true;
      }
      this.acInputBase.error = true;
      this.formFieldBehavior.setInvalid();
    }
    else {
      this.acInputBase.error = false;
      this.formFieldBehavior.setValid();
    }
  }
  /**
   * Applies transformations when the value update.
   */
  valueDidUpdate() {
    // Masking when value update programmatically
    if (this.value && this.mask) {
      this.value = vanillaMasker.toPattern(this.value, this.mask);
    }
  }
  /**
   * Applies transformations when the mask update.
   */
  async maskDidUpdate() {
    // Masking when value update programmatically
    if (this.value) {
      this.value = this.mask ? vanillaMasker.toPattern(this.value, this.mask) : await this.getRawValue(this.type);
    }
  }
  async handleKeyup() {
    if (this.validateOnKeyup) {
      this.formFieldBehavior.checkValidity((await this.getNativeFormField()).value);
    }
  }
  /**
   * Update the value and run validations as if the user change it manually.
   * When to use each:
   * input.value will only update the value, useful to set the initial value of the input.
   * input.setValue is useful to use values that are automatically set by an user's action, setting the unchecked state
   * to the form.
   */
  async setValue(value) {
    this.value = value;
    // @TODO: Review how to set the dirty state in the form for programmatically value changes.
    this.formFieldBehavior.setDirty();
    this.formFieldBehavior.checkValidity();
  }
  /**
   * Get the unmasked value.
   */
  async getRawValue(type = 'text') {
    const value = (await this.acInputBase.getNativeInput()).value || this.value;
    if (!value) {
      return null;
    }
    if (type === 'text') {
      return value.toString().replace(/[^a-z0-9 ]+/ig, '');
    }
    else {
      return vanillaMasker.toNumber(value);
    }
  }
  /**
   * Set focus state in the native input.
   */
  async setFocus() {
    return this.acInputBase.setFocus();
  }
  async getNativeFormField() {
    return this.acInputBase.getNativeInput();
  }
  async getFormFieldBehavior() {
    return this.formFieldBehavior;
  }
  async componentDidLoad() {
    this.errorDidUpdate(this.error);
    if (this.mask) {
      vanillaMasker(await this.acInputBase.getNativeInput()).maskPattern(this.mask);
      // Masking the initial value
      if (this.value) {
        this.value = vanillaMasker.toPattern(this.value, this.mask);
      }
    }
  }
  disconnectedCallback() { }
  /**
   * Toggle the password view.
   */
  togglePassword() {
    this.isShowingPassword = !this.isShowingPassword;
  }
  /**
   * Used as a listener to the change event. Dispatch form field validations.
   */
  handleChange() {
    this.value = this.acInputBase.value;
    this.formFieldBehavior.setDirty();
    this.formFieldBehavior.checkValidity();
  }
  /**
   * Used as a listener to the blur event. Dispatch form field validations.
   */
  handleBlur() {
    this.formFieldBehavior.setTouched();
  }
  render() {
    const icon = this.isShowingPassword ? faEyeSlash : faEye;
    return [
      h("ac-input-base", { ref: acInputBase => {
          this.acInputBase = acInputBase;
        }, label: this.label, name: this.name, type: this.isShowingPassword ? 'text' : this.type, pattern: this.pattern, value: this.value, disabled: this.disabled, required: this.required, max: this.max, min: this.min, maxlength: this.maxlength, minlength: this.minlength, step: this.step, autofocus: this.autofocus, autocomplete: this.autocomplete, autocapitalize: this.autocapitalize, onChange: this.handleChange, onBlur: this.handleBlur, placeholder: this.placeholder }, h("slot", { name: "item-start", slot: "item-start" }), h("slot", { name: "input-label", slot: "input-label" }), this.type === 'password'
        ? h("ac-button", { slot: "item-end", onClick: this.togglePassword, "icon-only": true, fill: "flat" }, h(AcFaIcon, { icon: icon, size: 14 }))
        : h("slot", { name: "item-end", slot: "item-end" })),
      // Only present message if it is a string. Preventing unnecessary margin effect.
      (this.error && typeof this.error === 'string') || (this.helperText && typeof this.helperText === 'string')
        ? h("span", { class: "ac-input__helper-text" }, this.error || this.helperText)
        : null
    ];
  }
  static get is() { return "ac-input"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-input.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-input.css"]
    };
  }
  static get properties() {
    return {
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The label text of the this input group."
        },
        "attribute": "label",
        "reflect": false
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The type of the internal input."
        },
        "attribute": "type",
        "reflect": false
      },
      "helperText": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The helper text to guide the user."
        },
        "attribute": "helper-text",
        "reflect": false
      },
      "validateOnKeyup": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Request check validation on each input key event."
        },
        "attribute": "validate-on-keyup",
        "reflect": false
      },
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The value of the internal input."
        },
        "attribute": "value",
        "reflect": false
      },
      "error": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "string | boolean",
          "resolved": "boolean | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the component in the error state with a message."
        },
        "attribute": "error",
        "reflect": false
      },
      "validity": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "CustomValidityState",
          "resolved": "{ [x: string]: boolean | { message?: string; }; }",
          "references": {
            "CustomValidityState": {
              "location": "import",
              "path": "../../../utils/validations/validations"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Get the last validity state from the checkValidity."
        }
      },
      "validator": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "ValidatorFn | ValidatorFn[]",
          "resolved": "((value: any, field: FormFieldBehavior, form: FormBehavior) => CustomValidityState | Promise<CustomValidityState>) | ValidatorFn[]",
          "references": {
            "ValidatorFn": {
              "location": "import",
              "path": "../../../utils/validations/validations"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The validations that this field need.\r\nThis validations are checked on:\r\n- Blur event\r\n- Form submit event\r\n- Each keyUp event ONLY IF the validateOnKeyup property is present."
        }
      },
      "mask": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The mask of the input."
        },
        "attribute": "mask",
        "reflect": true
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The HTML input field's name."
        },
        "attribute": "name",
        "reflect": true
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The disabled mode."
        },
        "attribute": "disabled",
        "reflect": true
      },
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The native HTMLInputElement required attribute."
        },
        "attribute": "required",
        "reflect": true
      },
      "pattern": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The native HTMLInputElement pattern attribute."
        },
        "attribute": "pattern",
        "reflect": true
      },
      "max": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The native HTMLInputElement max attribute."
        },
        "attribute": "max",
        "reflect": true
      },
      "maxlength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The native HTMLInputElement maxlength attribute."
        },
        "attribute": "maxlength",
        "reflect": true
      },
      "min": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The native HTMLInputElement min attribute."
        },
        "attribute": "min",
        "reflect": true
      },
      "minlength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The native HTMLInputElement min attribute."
        },
        "attribute": "minlength",
        "reflect": true
      },
      "autofocus": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The native HTMLInputElement autofocus attribute."
        },
        "attribute": "autofocus",
        "reflect": true
      },
      "autocomplete": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The native HTMLInputElement autocomplete attribute."
        },
        "attribute": "autocomplete",
        "reflect": true
      },
      "autocapitalize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The native HTMLInputElement autocapitalize attribute."
        },
        "attribute": "autocapitalize",
        "reflect": true
      },
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The native HTMLInputElement placeholder attribute."
        },
        "attribute": "placeholder",
        "reflect": true
      },
      "step": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The native HTMLInputElement step attribute."
        },
        "attribute": "step",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "isShowingPassword": {}
    };
  }
  static get methods() {
    return {
      "setValue": {
        "complexType": {
          "signature": "(value: any) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Update the value and run validations as if the user change it manually.\r\nWhen to use each:\r\ninput.value will only update the value, useful to set the initial value of the input.\r\ninput.setValue is useful to use values that are automatically set by an user's action, setting the unchecked state\r\nto the form.",
          "tags": []
        }
      },
      "getRawValue": {
        "complexType": {
          "signature": "(type?: string) => Promise<any>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<any>"
        },
        "docs": {
          "text": "Get the unmasked value.",
          "tags": []
        }
      },
      "setFocus": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Set focus state in the native input.",
          "tags": []
        }
      },
      "getNativeFormField": {
        "complexType": {
          "signature": "() => Promise<HTMLInputElement>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLInputElement": {
              "location": "global"
            }
          },
          "return": "Promise<HTMLInputElement>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "getFormFieldBehavior": {
        "complexType": {
          "signature": "() => Promise<any>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<any>"
        },
        "docs": {
          "text": "Used to provide access to the FormField instance.",
          "tags": [{
              "name": "Method",
              "text": undefined
            }]
        }
      }
    };
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "error",
        "methodName": "errorDidUpdate"
      }, {
        "propName": "value",
        "methodName": "valueDidUpdate"
      }, {
        "propName": "mask",
        "methodName": "maskDidUpdate"
      }];
  }
  static get listeners() {
    return [{
        "name": "keyup",
        "method": "handleKeyup",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Bind
], AcInput.prototype, "togglePassword", null);
__decorate([
  Bind
], AcInput.prototype, "handleChange", null);
__decorate([
  Bind
], AcInput.prototype, "handleBlur", null);
//# sourceMappingURL=ac-input.js.map
