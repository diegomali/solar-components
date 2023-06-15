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
export class AcToggle {
  constructor() {
    this.formFieldBehavior = new FormFieldBehavior(this);
    this.label = undefined;
    this.name = undefined;
    this.error = undefined;
    this.direction = 'right';
    this.validity = undefined;
    this.checked = false;
    this.validator = undefined;
    this.value = undefined;
    this.disabled = undefined;
    this.required = undefined;
  }
  handleChange() {
    this.checked = !this.checked;
  }
  componentDidLoad() {
  }
  disconnectedCallback() {
  }
  componentWillLoad() {
  }
  async getFormFieldBehavior() {
    return this.formFieldBehavior;
  }
  render() {
    return (h(Host, { class: {
        [`ac-toggle--label-${this.direction}`]: this.direction !== undefined,
        'ac-toggle--disabled': this.disabled
      } }, h("label", { class: "ac-toggle__container" }, h("input", { ref: nativeInput => this.nativeInput = nativeInput, class: "ac-toggle__native", type: "checkbox", name: this.name, value: this.value, disabled: this.disabled, onChange: this.handleChange, checked: this.checked }), h("div", { class: "ac-toggle__custom" }), this.label && h("div", { class: "ac-toggle__label" }, this.label))));
  }
  static get is() { return "ac-toggle"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-toggle.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-toggle.css"]
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
          "text": ""
        },
        "attribute": "label",
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
          "text": "The form field name."
        },
        "attribute": "name",
        "reflect": false
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
          "text": "The actual error message."
        },
        "attribute": "error",
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
        "reflect": true,
        "defaultValue": "false"
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
          "text": "The field value of the component."
        },
        "attribute": "value",
        "reflect": false
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
          "text": "If this field is in the disabled state."
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
}
__decorate([
  Bind
], AcToggle.prototype, "handleChange", null);
//# sourceMappingURL=ac-toggle.js.map
