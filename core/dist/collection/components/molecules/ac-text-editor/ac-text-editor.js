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
import { MEDIUM_EDITOR_CDN } from '../../../vendors-cdn';
export class AcTextEditor {
  constructor() {
    /**
     * The FormFieldBehavior instance.
     */
    this.formFieldBehavior = new FormFieldBehavior(this);
    this.validity = undefined;
    this.validator = undefined;
    this.required = undefined;
    this.disabled = undefined;
    this.name = undefined;
    this.value = '';
    this.placeholder = '';
    this.hasFocus = undefined;
  }
  componentDidLoad() {
    this.loadMedium().then(res => {
      // @ts-ignore
      this.mediumEditor = new res('.ac-text-editor__editable', {
        toolbar: {
          buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3']
        },
        placeholder: {
          text: this.placeholder
        },
        anchor: {
          placeholderText: 'Link',
        }
      });
      this.mediumEditor.subscribe('editableInput', () => {
        this.handleChange();
      });
    });
    this.mediumRef.innerHTML = this.value;
  }
  disconnectedCallback() {
  }
  loadMedium() {
    return new Promise(res => {
      const element = document.createElement('script');
      element.setAttribute('type', 'text/javascript');
      element.setAttribute('src', MEDIUM_EDITOR_CDN);
      element.onload = () => res(window.MediumEditor);
      element.onreadystatechange = () => res(window.MediumEditor);
      document.head.appendChild(element);
    });
  }
  handleFocus() {
    this.hasFocus = true;
  }
  handleBlur() {
    this.hasFocus = false;
  }
  handleChange() {
    this.value = this.mediumRef.innerHTML;
  }
  render() {
    return (h(Host, { class: {
        'ac-text-editor--focus': this.hasFocus
      } }, h("div", { ref: mediumRef => this.mediumRef = mediumRef, class: "ac-text-editor__editable", onFocus: this.handleFocus, onBlur: this.handleBlur, onChange: this.handleChange }), h("input", { name: this.name, value: this.value, type: "hidden" })));
  }
  static get is() { return "ac-text-editor"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-text-editor.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-text-editor.css"]
    };
  }
  static get properties() {
    return {
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
      "required": {
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
          "text": "The native HTMLInputElement required attribute."
        },
        "attribute": "required",
        "reflect": false
      },
      "disabled": {
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
          "text": "The disabled mode."
        },
        "attribute": "disabled",
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
          "text": "The HTML input field's name."
        },
        "attribute": "name",
        "reflect": false
      },
      "value": {
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
          "text": "The value of the internal text editor."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "The placeholder of text editor."
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get states() {
    return {
      "hasFocus": {}
    };
  }
  static get elementRef() { return "host"; }
}
__decorate([
  Bind
], AcTextEditor.prototype, "handleFocus", null);
__decorate([
  Bind
], AcTextEditor.prototype, "handleBlur", null);
__decorate([
  Bind
], AcTextEditor.prototype, "handleChange", null);
//# sourceMappingURL=ac-text-editor.js.map
