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
import { h, Host } from '@stencil/core';
import { AsyncDataBehavior } from '../../../behaviors/async-data-behavior';
import { createControllerPortal } from '../../../behaviors/controller-behavior/create-controller-portal';
import { ensureController } from '../../../utils/stencil/ensure-controller';
import { Bind } from '../../../utils/lang/bind';
import { Debounced } from '../../../utils/lang/reactivity';
import { FocusBehavior } from '../../../behaviors/focus-behavior';
import { FormFieldBehavior } from '../../../behaviors/form-behavior';
import { AcFaIcon } from '../../utils/ac-fa-icon';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
export class AcAutocomplete {
  constructor() {
    this.asyncDataBehavior = new AsyncDataBehavior(this);
    /**
     * The instance of the FormFieldBehavior.
     */
    this.formFieldBehavior = new FormFieldBehavior(this);
    /**
     * Use to request a formFieldBehavior.checkValidity call.
     */
    this.requestCheckValidity = false;
    this.SelectPanel = createControllerPortal(ensureController('ac-panel-controller'));
    /**
     * The instance of the FocusBehavior used to close the panel when the user clicks outside.
     */
    this.focusBehavior = new FocusBehavior(this);
    this.name = undefined;
    this.disabled = undefined;
    this.required = undefined;
    this.noResultsLabel = 'No results for';
    this.fetch = undefined;
    this.loading = undefined;
    this.options = [];
    this.validator = undefined;
    this.error = undefined;
    this.size = undefined;
    this.label = undefined;
    this.value = undefined;
    this.selectedText = undefined;
    this.filter = undefined;
    this.isPanelOpen = false;
    this.validity = undefined;
  }
  errorDidUpdate(error) {
    if (error) {
      this.acInputBase.error = true;
      this.formFieldBehavior.setInvalid();
    }
    else {
      this.acInputBase.error = false;
      this.formFieldBehavior.setValid();
    }
  }
  async getFormFieldBehavior() {
    return this.formFieldBehavior;
  }
  handleSelected(option) {
    this.selectedText = option.title;
    this.value = option.value;
    this.requestCheckValidity = true;
    this.formFieldBehavior.setDirty();
    this.filter = null;
    this.isPanelOpen = false;
  }
  async handleDebouncedKeyUp(event) {
    const { target: { value } } = event;
    this.filter = value;
    this.asyncDataBehavior.executeFetch();
  }
  getFetchParams() {
    return { filter: this.filter };
  }
  isShowingPanelDidUpdate() {
    this.hasFocus = this.isPanelOpen;
  }
  whenReceiveData(metaData) {
    this.options = metaData.data;
    this.isPanelOpen = true;
  }
  componentDidUpdate() {
    if (this.requestCheckValidity) {
      this.formFieldBehavior.checkValidity(this.value);
      this.requestCheckValidity = false;
      this.selectChange.emit(this.value);
    }
  }
  /**
   * Toggle the panel view.
   */
  whenBlur(element) {
    // If the target element is'nt a child of the panel.
    if (!this.selectPanel.contains(element)) {
      if (this.isPanelOpen) {
        this.isPanelOpen = !this.isPanelOpen;
      }
      if (this.requestCheckValidity === false && this.isPanelOpen === false) {
        if (!this.options.some(x => x.title.toString().toUpperCase().includes(this.acInputBase.value.toUpperCase()))) {
          this.acInputBase.value = '';
        }
      }
      this.formFieldBehavior.setTouched();
    }
  }
  disconnectedCallback() {
    this.isPanelOpen = false;
  }
  render() {
    const SelectPanel = this.SelectPanel;
    return h(Host, { class: "ac-autocomplete" }, h("ac-input-base", { ref: acInputBase => this.acInputBase = acInputBase, class: "ac-autocomplete__input", name: this.name, disabled: this.disabled, type: "text", label: this.label, value: this.selectedText, onKeyUp: this.handleDebouncedKeyUp, size: this.size }, this.loading && h(AcFaIcon, { slot: "item-end", class: "ac-autocomplete__icon", icon: faSpinner, size: 14, anim: "spin" })), h(SelectPanel, { ref: selectPanel => this.selectPanel = selectPanel, class: "ac-autocomplete__panel", popperPivot: this.host, reset: !this.isPanelOpen }, h("ul", { class: "ac-autocomplete__list ac-list" }, this.options.length === 0
      ? h("li", { class: "ac-list__item" }, this.noResultsLabel, " ", this.filter)
      : this.options.map((option, index) => (h("li", { class: "ac-list__item", key: index, tabIndex: index, value: option.value, onClick: () => this.handleSelected(option) }, option.title))))));
  }
  static get is() { return "ac-autocomplete"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-autocomplete.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-autocomplete.css"]
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
          "text": "The name of the internal input."
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
          "text": "Set the disabled mode."
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
          "text": "The native required attribute."
        },
        "attribute": "required",
        "reflect": true
      },
      "noResultsLabel": {
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
          "text": "Set the custom empty result text."
        },
        "attribute": "no-results-label",
        "reflect": true,
        "defaultValue": "'No results for'"
      },
      "fetch": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "(params: { filter: string }) => Promise<AsyncMetadata<AcOption[]>>",
          "resolved": "(params: { filter: string; }) => Promise<AsyncMetadata<AcOption<{}>[]>>",
          "references": {
            "Promise": {
              "location": "global"
            },
            "AsyncMetadata": {
              "location": "import",
              "path": "../../../behaviors/async-data-behavior"
            },
            "AcOption": {
              "location": "import",
              "path": "../../../utils/types/ac-option"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Action to be call when the user start typing."
        }
      },
      "loading": {
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
          "text": "Set the loading mode, showing a loading icon."
        },
        "attribute": "loading",
        "reflect": false
      },
      "options": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "AcOption[]",
          "resolved": "AcOption<{}>[]",
          "references": {
            "AcOption": {
              "location": "import",
              "path": "../../../utils/types/ac-option"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The options that will be displayed in the panel."
        },
        "defaultValue": "[]"
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
          "text": "The validator functions."
        }
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
          "text": "Set the field in the error state with a message."
        },
        "attribute": "error",
        "reflect": false
      },
      "size": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "'small' | 'large'",
          "resolved": "\"large\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Select size"
        },
        "attribute": "size",
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
          "text": "The label text of the input."
        },
        "attribute": "label",
        "reflect": false
      },
      "value": {
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
          "text": "The value of the input."
        },
        "attribute": "value",
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
      }
    };
  }
  static get states() {
    return {
      "selectedText": {},
      "filter": {},
      "isPanelOpen": {}
    };
  }
  static get events() {
    return [{
        "method": "selectChange",
        "name": "selectChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when the user select an option."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "getFormFieldBehavior": {
        "complexType": {
          "signature": "() => Promise<FormFieldBehavior>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "FormFieldBehavior": {
              "location": "import",
              "path": "../../../behaviors/form-behavior"
            }
          },
          "return": "Promise<FormFieldBehavior>"
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
        "propName": "isPanelOpen",
        "methodName": "isShowingPanelDidUpdate"
      }];
  }
}
__decorate([
  Bind
], AcAutocomplete.prototype, "handleSelected", null);
__decorate([
  Bind,
  Debounced(200)
], AcAutocomplete.prototype, "handleDebouncedKeyUp", null);
//# sourceMappingURL=ac-autocomplete.js.map
