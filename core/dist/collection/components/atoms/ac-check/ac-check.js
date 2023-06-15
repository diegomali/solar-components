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
import { Host, h } from '@stencil/core';
import { FormFieldBehavior } from '../../../behaviors/form-behavior';
import { Bind } from '../../../utils/lang/bind';
/**
 * Accera's full-featured checkbox web-component.
 */
export class AcCheck {
  constructor() {
    this.formFieldBehavior = new FormFieldBehavior(this);
    this.label = undefined;
    this.helperText = undefined;
    this.name = undefined;
    this.value = undefined;
    this.direction = 'right';
    this.error = undefined;
    this.validity = undefined;
    this.checked = undefined;
    this.validator = undefined;
    this.type = 'checkbox';
    this.disabled = undefined;
    this.required = undefined;
  }
  componentDidLoad() {
  }
  disconnectedCallback() {
  }
  componentWillLoad() {
  }
  checkedDidUpdate() {
    if (this.checked && this.type === 'radio') {
      Array.from(document.querySelectorAll(`ac-check[name="${this.name}"]`))
        .forEach(e => {
        if (e.value !== this.value && e.checked) {
          e.checked = false;
        }
      });
    }
  }
  async getNativeFormField() {
    return this.nativeInput;
  }
  async getFormFieldBehavior() {
    return this.formFieldBehavior;
  }
  handleChange() {
    this.checked = this.nativeInput.checked;
    this.formFieldBehavior.setDirty();
    this.formFieldBehavior.checkValidity();
  }
  render() {
    return (h(Host, { class: {
        [`ac-check--label-${this.direction}`]: this.direction !== undefined,
        [`ac-check--${this.type}`]: this.type !== undefined,
        'ac-check--disabled': this.disabled,
        'ac-check--error': !!this.error,
      } }, h("label", { class: "ac-check__container" }, h("input", { ref: nativeInput => this.nativeInput = nativeInput, class: "ac-check__native", type: this.type, name: this.name, value: this.value, onChange: this.handleChange, disabled: this.disabled, checked: this.checked }), h("div", { class: "ac-check__custom" }), this.label && h("div", { class: "ac-check__label" }, this.label)
      || h("div", { class: "ac-check__label" }, h("slot", { name: "label" }))), (this.error && typeof this.error === 'string') || (this.helperText && typeof this.helperText === 'string')
      && h("label", { class: "ac-check__helper-text" }, this.error || this.helperText)));
  }
  static get is() { return "ac-check"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-check.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-check.css"]
    };
  }
  static get properties() {
    return {
      "formFieldBehavior": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The FormFieldBehavior instance."
        },
        "attribute": "form-field-behavior",
        "reflect": false,
        "defaultValue": "new FormFieldBehavior(this)"
      },
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
          "text": "The textual label of this field."
        },
        "attribute": "label",
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
          "text": "The HTML field name."
        },
        "attribute": "name",
        "reflect": false
      },
      "value": {
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
          "text": "The HTML field value."
        },
        "attribute": "value",
        "reflect": false
      },
      "direction": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'left' | 'right'",
          "resolved": "\"left\" | \"right\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the label direction."
        },
        "attribute": "direction",
        "reflect": false,
        "defaultValue": "'right'"
      },
      "error": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Error state and message of this field."
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
          "text": "The validity state."
        }
      },
      "checked": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The actual checked state."
        },
        "attribute": "checked",
        "reflect": true
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
          "text": "Validation pipeline for this field."
        }
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'radio' | 'checkbox'",
          "resolved": "\"checkbox\" | \"radio\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The type of this field."
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'checkbox'"
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
          "text": "The native disabled mode."
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
          "text": "Mark this field as required."
        },
        "attribute": "required",
        "reflect": true
      }
    };
  }
  static get methods() {
    return {
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
        "propName": "checked",
        "methodName": "checkedDidUpdate"
      }];
  }
}
__decorate([
  Bind
], AcCheck.prototype, "handleChange", null);
//# sourceMappingURL=ac-check.js.map
