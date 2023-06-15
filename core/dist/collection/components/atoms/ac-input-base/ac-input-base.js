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
import { Bind } from '../../../utils/lang/bind';
/**
 * Accera's full-featured Input web-component.
 */
export class AcInputBase {
  constructor() {
    this.name = undefined;
    this.label = undefined;
    this.error = undefined;
    this.theme = 'primary';
    this.size = undefined;
    this.value = undefined;
    this.type = undefined;
    this.pattern = undefined;
    this.readonly = undefined;
    this.disabled = undefined;
    this.required = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.autofocus = undefined;
    this.autocomplete = undefined;
    this.autocapitalize = undefined;
    this.placeholder = undefined;
    this.step = undefined;
    this.hasFocus = undefined;
  }
  async getNativeInput() {
    return this.nativeInput;
  }
  /**
   * Set focus state in the native input.
   */
  async setFocus() {
    this.nativeInput.focus();
  }
  handleFocus() {
    // @TODO: Check why events handled by stencil dont propagate itself. So, create a decorator that wrapper this line.
    this.host.dispatchEvent(new Event('focus'));
    this.hasFocus = true;
  }
  handleBlur() {
    this.hasFocus = false;
  }
  handleChange() {
    this.value = this.nativeInput.value;
  }
  render() {
    return (h(Host, { class: {
        [`ac-input-base--${this.theme}`]: !!this.theme,
        [`ac-input-base--${this.size}`]: !!this.size,
        'ac-input-base--filled': !!this.value && this.value !== '',
        'ac-input-base--no-label': !this.label,
        'ac-input-base--disabled': this.disabled,
        'ac-input-base--error': this.error,
        'ac-input-base--focus': this.hasFocus,
      } }, h("div", { class: "ac-input__item-start" }, h("slot", { name: "item-start" })), h("span", { class: "ac-input__input-container" }, h("label", { class: "ac-input__label" }, h("slot", { name: "input-label" }), this.label), h("input", { ref: input => this.nativeInput = input, class: "ac-input__native", name: this.name, value: this.value, type: this.type || 'text', pattern: this.pattern, readonly: this.readonly, disabled: this.disabled, required: this.required, max: this.max, min: this.min, maxlength: this.maxlength, minlength: this.minlength, autofocus: this.autofocus, autocomplete: this.autocomplete, autocapitalize: this.autocapitalize, placeholder: this.placeholder, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, step: this.type === 'number' ? this.step || '0.00000000000001' : undefined })), h("div", { class: "ac-input__item-end" }, h("slot", { name: "item-end" }))));
  }
  static get is() { return "ac-input-base"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-input-base.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-input-base.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "The native HTMLInputElement name attribute."
        },
        "attribute": "name",
        "reflect": false
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
          "text": "The label text of the this input group."
        },
        "attribute": "label",
        "reflect": false
      },
      "error": {
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
          "text": "Error mode."
        },
        "attribute": "error",
        "reflect": true
      },
      "theme": {
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
          "text": "The theme color defined in the color palette."
        },
        "attribute": "theme",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'large'",
          "resolved": "\"large\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The input's size."
        },
        "attribute": "size",
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
      "readonly": {
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
          "text": "Enable readonly."
        },
        "attribute": "readonly",
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
          "text": "The HTMLInputElement disabled attribute."
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
      "hasFocus": {}
    };
  }
  static get methods() {
    return {
      "getNativeInput": {
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
      }
    };
  }
  static get elementRef() { return "host"; }
}
__decorate([
  Bind
], AcInputBase.prototype, "handleFocus", null);
__decorate([
  Bind
], AcInputBase.prototype, "handleBlur", null);
__decorate([
  Bind
], AcInputBase.prototype, "handleChange", null);
//# sourceMappingURL=ac-input-base.js.map
