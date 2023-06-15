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
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Host, h } from '@stencil/core';
import { equals, isEmpty } from 'ramda';
import { AsyncDataBehavior } from '../../../behaviors/async-data-behavior';
import { createControllerPortal } from '../../../behaviors/controller-behavior/create-controller-portal';
import { FocusBehavior } from '../../../behaviors/focus-behavior';
import { FormFieldBehavior } from '../../../behaviors/form-behavior';
import { Bind } from '../../../utils/lang/bind';
import { Debounced } from '../../../utils/lang/reactivity';
import { toArray } from '../../../utils/lang/to-array';
import { ensureController } from '../../../utils/stencil/ensure-controller';
import { AcFaIcon } from '../../utils/ac-fa-icon';
/**
 * Accera's full-featured select webcomponent.
 */
class AcSelect {
  constructor() {
    this.SelectPanel = createControllerPortal(ensureController('ac-panel-controller'));
    /**
     * The instance of the FocusBehavior used to close the panel when the user clicks outside.
     */
    this.focusBehavior = new FocusBehavior(this);
    /**
     * The instance of the FormFieldBehavior.
     */
    this.formFieldBehavior = new FormFieldBehavior(this);
    /**
     * The instance of the AsyncDataBehavior used to control async data features.
     */
    this.asyncDataBehavior = new AsyncDataBehavior(this);
    this.label = undefined;
    this.helperText = undefined;
    this.loading = undefined;
    this.fetch = undefined;
    this.error = undefined;
    this.validator = undefined;
    this.validity = undefined;
    this.options = undefined;
    this.value = undefined;
    this.name = undefined;
    this.multiple = undefined;
    this.disabled = undefined;
    this.searchable = undefined;
    this.noResultsLabel = 'No results for';
    this.searchHelperLabel = 'Use the field to search';
    this.required = undefined;
    this.size = undefined;
    this.isShowingPanel = undefined;
    this.selectedText = undefined;
    this.filteredOptions = undefined;
    this.filter = undefined;
  }
  valueDidUpdate(newValue, oldValue) {
    if (!equals(newValue, []) && !equals(newValue, oldValue)) {
      // Build the formatted text when the value change.
      this.formatSelectedText();
    }
  }
  optionsDidUpdate(newOptions, oldOptions) {
    if (newOptions) {
      const selectedOptions = newOptions.filter(o => o.selected); // Get all selected
      if (selectedOptions.length > 0) {
        const value = selectedOptions.map(o => o.value);
        this.value = this.multiple ? value : value[0]; // Array to a single value for Single select
      }
      else {
        // @TODO: Use defaultValue/initialValue property.
        this.value = !oldOptions ? this.value : null;
      }
    }
    // Forcing update the value whatever it takes.
    this.formatSelectedText();
  }
  isShowingPanelDidUpdate() {
    if (this.options.length === 0) {
      this.selectedText = null;
    }
    this.hasFocus = this.isShowingPanel;
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
  filterDidUpdate() {
    if (this.filter) {
      if (this.fetch) {
        this.asyncDataBehavior.executeFetch();
      }
      else {
        this.filteredOptions = this.options.filter(o => o.title
          .toLowerCase()
          .indexOf(this.filter.toLowerCase()) > -1);
      }
    }
    else {
      this.filteredOptions = null;
    }
  }
  async getNativeFormField() {
    return this.nativeSelect;
  }
  async getSelectedOptions() {
    return this.getOptionsByValue(this.value);
  }
  async setValue(values) {
    this.value = values;
    this.requestCheckValidity = true;
    this.formFieldBehavior.setDirty();
    if (values instanceof Array) {
      this.options.forEach(o => {
        o.selected = values.includes(o.value);
      });
    }
    else {
      this.options.forEach(o => {
        o.selected = values === o.value;
      });
    }
    this.options = [...this.options];
  }
  async setInitialOption(option) {
    // Wrapping multi select.
    const optionArr = toArray(option);
    this.options = optionArr.map(o => (Object.assign(Object.assign({}, o), { selected: true })));
  }
  async getFormFieldBehavior() {
    return this.formFieldBehavior;
  }
  /**
   * Toggle the panel view.
   */
  whenBlur(element) {
    // If the target element is'nt a child of the panel.
    if (!this.selectPanel.contains(element)) {
      if (this.isShowingPanel) {
        this.togglePanel();
      }
      this.formFieldBehavior.setTouched();
    }
  }
  whenReceiveData(metaData) {
    this.filteredOptions = metaData.data;
    this.options = metaData.data;
  }
  getFetchParams() {
    return { filter: this.filter };
  }
  componentDidLoad() {
    if (!this.options) {
      this.loadOptionsFromHTML();
    }
    else {
      this.optionsDidUpdate(this.options, null);
    }
  }
  disconnectedCallback() {
    this.closePanel();
  }
  componentDidUpdate() {
    // Forcing clear the value
    this.nativeSelect.value = this.value ? this.nativeSelect.value : '';
    if (this.requestCheckValidity) {
      this.formFieldBehavior.checkValidity(this.value);
      this.requestCheckValidity = false;
      this.selectChange.emit(this.value);
    }
  }
  /**
   * Filter the options by the actual value. Used to update the options state by an external value update.
   */
  getOptionsByValue(values) {
    const options = [];
    if (this.options && values) {
      if (values instanceof Array) {
        this.options.forEach(o => {
          if (values.includes(o.value)) {
            options.push(o);
          }
        });
      }
      else {
        this.options.forEach(o => {
          if (values === o.value) {
            options.push(o);
          }
        });
      }
    }
    return options;
  }
  /**
   * Generate the selectedText based on the selected options.
   */
  formatSelectedText() {
    const selectedOptions = this.getOptionsByValue(this.value);
    if (this.options) {
      const count = selectedOptions.length;
      const total = this.options.filter(o => !o.separator).length;
      if (count > 0 && count < 3) {
        this.selectedText = selectedOptions.map(item => item.title).join(', ');
      }
      else if (count > 2 && count < total) {
        this.selectedText = `${count} ${this.label}`;
      }
      else if (count === total && count !== 0) {
        this.selectedText = `Todos (${count})`;
      }
    }
  }
  /**
   * Load the options elements from the children HTML.
   */
  loadOptionsFromHTML() {
    const childOptions = this.host.querySelectorAll('option, optgroup');
    const mappedOptions = Array.prototype.map.call(childOptions, o => ({
      title: o.tagName === 'OPTGROUP' ? o.label : o.text,
      value: o.value,
      selected: o.hasAttribute('selected') && o.selected,
      separator: o.tagName === 'OPTGROUP',
      group: o.parentElement.tagName === 'OPTGROUP' ? o.parentElement.label : null
    }));
    // Prevent initializing with empty array
    // @LESSON: Do not use ternary operator because it will cause a component rerender.
    if (mappedOptions.length > 0) {
      this.options = mappedOptions;
    }
  }
  renderNativeOptions() {
    const valueAsArray = this.value ?
      this.value instanceof Array ? this.value : [this.value]
      : [];
    return this.options.map(opt => {
      if (!opt.separator) {
        return (h("option", { selected: valueAsArray.includes(opt.value), value: opt.value }, opt.title));
      }
    });
  }
  renderOptions(options) {
    if (!options) {
      if (this.searchable) {
        return (h("li", { class: "ac-list__helper-item" }, this.searchHelperLabel));
      }
      return null;
    }
    if (options.length > 0) {
      return options.map(item => {
        if (item.separator) {
          return (h("li", { class: "ac-list__separator" }, h("span", { class: "ac-list__separator-title" }, item.title), h("span", { class: "ac-list__separator-line" })));
        }
        else {
          return (h("li", { class: 'ac-list__item ' + (item.selected ? 'ac-list__item--selected' : ''), onClick: () => this.handleSelect(item) }, item.title));
        }
      });
    }
    else {
      return (h("li", { class: "ac-list__helper-item" }, this.noResultsLabel, " ", this.filter));
    }
  }
  /**
   * Toggle the panel.
   */
  togglePanel() {
    if (!this.loading && !this.isShowingPanel) {
      this.acInputBase.setFocus();
    }
    else {
      this.closePanel();
    }
  }
  /**
   * Open the panel.
   */
  openPanel() {
    this.isShowingPanel = true;
  }
  /**
   * Close the panel.
   */
  closePanel() {
    this.isShowingPanel = false;
  }
  /**
   * A listener that is dispatched when the user click on a select's option.
   */
  handleSelect(item) {
    const selectedIndex = this.options.findIndex(o => o.value === item.value);
    if (this.multiple) {
      this.options[selectedIndex].selected = !item.selected; // Check the current selected
    }
    else {
      if (!item.selected) {
        this.options.forEach((o, index) => {
          o.selected = index === selectedIndex; // Check only the new selected item
        });
      }
    }
    this.options = [...this.options]; // Dispatch options update
    this.isShowingPanel = this.multiple; // Close only if it's a single select
    this.requestCheckValidity = true;
    this.formFieldBehavior.setDirty();
    this.filter = null;
  }
  async handleDebouncedKeyUp() {
    const nativeInput = await this.acInputBase.getNativeInput();
    this.filter = nativeInput.value;
  }
  async handleChangeInput() {
    const nativeInput = await this.acInputBase.getNativeInput();
    if (isEmpty(nativeInput.value)) {
      this.options = [];
    }
  }
  render() {
    const icon = this.isShowingPanel ? faChevronUp : faChevronDown;
    const SelectPanel = this.SelectPanel;
    const optionsToRender = this.filteredOptions || this.options;
    return h(Host, null, h("div", { class: "ac-select__phantom-dom" }, h("slot", null)), h("select", { ref: nativeSelect => this.nativeSelect = nativeSelect, name: this.name, multiple: this.multiple,
      // required={this.required} TODO: Review chrome can´t focus element some times need refactor: Critical
      disabled: this.disabled, class: "ac-select__native", "data-native": true }, this.options && this.renderNativeOptions()), h("ac-input-base", { ref: acInputBase => {
        this.acInputBase = acInputBase;
      }, label: this.label, type: "text", required: this.required, value: this.selectedText, onFocus: this.openPanel, onChange: this.handleChangeInput, disabled: this.disabled, readonly: !this.searchable, onKeyUp: this.searchable ? this.handleDebouncedKeyUp : null, size: this.size }, h("slot", { name: "item-start", slot: "item-start" }), h("slot", { name: "input-label", slot: "input-label" }), h("ac-button", { slot: "item-end", theme: this.isShowingPanel ? 'primary' : 'light', fill: "flat", disabled: this.disabled, loading: this.loading, onClick: this.togglePanel, "icon-only": true }, h(AcFaIcon, { icon: icon, size: 12 }))), (this.error && typeof this.error === 'string') || (this.helperText && typeof this.helperText === 'string')
      ? h("span", { class: "ac-select__helper-text" }, this.error || this.helperText)
      : null, h(SelectPanel, { ref: selectPanel => this.selectPanel = selectPanel, class: "ac-select__panel", popperPivot: this.host, reset: !this.isShowingPanel }, h("slot", { name: "item-top", slot: "item-top" }), h("ul", { class: 'ac-select__list ac-list', style: { maxHeight: AcSelect.MAX_ITEMS_TO_RENDER * AcSelect.ITEM_HEIGHT + 'px' } }, this.renderOptions(optionsToRender)), h("slot", { name: "item-bottom", slot: "item-bottom" })));
  }
  static get is() { return "ac-select"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-select.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-select.css"]
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
      "fetch": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "(params: any) => Promise<{ links?: any, meta?: any, data: AcOption[] }>",
          "resolved": "(params: any) => Promise<{ links?: any; meta?: any; data: AcOption<{}>[]; }>",
          "references": {
            "Promise": {
              "location": "global"
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
          "text": "Set the loading mode, showing a loading icon."
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
        }
      },
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "(string | number)[] | string | number",
          "resolved": "(string | number)[] | number | string",
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
      "multiple": {
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
          "text": "If true, the component will handle multiple selected items."
        },
        "attribute": "multiple",
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
      "searchable": {
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
          "text": "Set the search mode."
        },
        "attribute": "searchable",
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
      "searchHelperLabel": {
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
          "text": "Set the custom search helper text."
        },
        "attribute": "search-helper-label",
        "reflect": true,
        "defaultValue": "'Use the field to search'"
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
      }
    };
  }
  static get states() {
    return {
      "isShowingPanel": {},
      "selectedText": {},
      "filteredOptions": {},
      "filter": {}
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
          "text": "Fired when the user select/deselect an option."
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
      "getNativeFormField": {
        "complexType": {
          "signature": "() => Promise<HTMLSelectElement>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLSelectElement": {
              "location": "global"
            }
          },
          "return": "Promise<HTMLSelectElement>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "getSelectedOptions": {
        "complexType": {
          "signature": "() => Promise<AcOption<{}>[]>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "AcOption": {
              "location": "import",
              "path": "../../../utils/types/ac-option"
            }
          },
          "return": "Promise<AcOption<{}>[]>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "setValue": {
        "complexType": {
          "signature": "(values: any) => Promise<void>",
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
          "text": "",
          "tags": []
        }
      },
      "setInitialOption": {
        "complexType": {
          "signature": "(option: AcOption | AcOption[]) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "AcOption": {
              "location": "import",
              "path": "../../../utils/types/ac-option"
            }
          },
          "return": "Promise<void>"
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
        "propName": "value",
        "methodName": "valueDidUpdate"
      }, {
        "propName": "options",
        "methodName": "optionsDidUpdate"
      }, {
        "propName": "isShowingPanel",
        "methodName": "isShowingPanelDidUpdate"
      }, {
        "propName": "error",
        "methodName": "errorDidUpdate"
      }, {
        "propName": "filter",
        "methodName": "filterDidUpdate"
      }];
  }
  static get stencilHasStaticMembersWithInit() { return true; }
}
/**
 * The count of max items to render in the select list, used to calculate the size of the panel.
 */
AcSelect.MAX_ITEMS_TO_RENDER = 10;
/**
 * The height of each item to render, used to calculate the size of the panel.
 */
AcSelect.ITEM_HEIGHT = 30;
__decorate([
  Bind
], AcSelect.prototype, "togglePanel", null);
__decorate([
  Bind
], AcSelect.prototype, "openPanel", null);
__decorate([
  Bind
], AcSelect.prototype, "closePanel", null);
__decorate([
  Bind
], AcSelect.prototype, "handleSelect", null);
__decorate([
  Bind,
  Debounced(200)
], AcSelect.prototype, "handleDebouncedKeyUp", null);
__decorate([
  Bind
], AcSelect.prototype, "handleChangeInput", null);
export { AcSelect };
//# sourceMappingURL=ac-select.js.map
