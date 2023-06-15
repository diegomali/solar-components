'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const index_es = require('./index.es-323a182b.js');
const asyncDataBehavior = require('./async-data-behavior-be99a3af.js');
const ensureController = require('./ensure-controller-b55d6862.js');
const focusBehavior = require('./focus-behavior-041097ad.js');
const formFieldBehavior = require('./form-field-behavior-4f6a2403.js');
const bind = require('./bind-c359decd.js');
const reactivity = require('./reactivity-29a6561d.js');
const acFaIcon = require('./ac-fa-icon-fc0da5da.js');
const isEmpty = require('./isEmpty-77c105ba.js');
require('./component-behavior-ab8d7c53.js');
require('./isNil-7855ac09.js');
require('./_curry1-b59ebfd7.js');
require('./browser-9c45fd25.js');
require('./_commonjsHelpers-537d719a.js');

const acSelectCss = "ac-select{display:flex;position:relative;flex-direction:column}ac-select>[slot=item-top],ac-select>[slot=item-bottom]{display:none !important}ac-select .ac-select__helper-text{display:block;margin-top:8px;color:var(--color-neutral-darker, #646464);font-size:12px}ac-select .ac-select__native,ac-select .ac-select__phantom-dom{display:none}ac-select.form-field--invalid .ac-select__helper-text{color:var(--color-alert-normal, #F0000A)}ul.ac-select__list::-webkit-scrollbar{width:8px;height:8px}ul.ac-select__list::-webkit-scrollbar-track{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.2)}ul.ac-select__list::-webkit-scrollbar-thumb{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.3)}ul.ac-select__list::-webkit-scrollbar-thumb:hover{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.4)}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AcSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.selectChange = index.createEvent(this, "selectChange", 7);
    this.SelectPanel = ensureController.createControllerPortal(ensureController.ensureController('ac-panel-controller'));
    /**
     * The instance of the FocusBehavior used to close the panel when the user clicks outside.
     */
    this.focusBehavior = new focusBehavior.FocusBehavior(this);
    /**
     * The instance of the FormFieldBehavior.
     */
    this.formFieldBehavior = new formFieldBehavior.FormFieldBehavior(this);
    /**
     * The instance of the AsyncDataBehavior used to control async data features.
     */
    this.asyncDataBehavior = new asyncDataBehavior.AsyncDataBehavior(this);
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
    if (!isEmpty.equals(newValue, []) && !isEmpty.equals(newValue, oldValue)) {
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
    const optionArr = formFieldBehavior.toArray(option);
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
        return (index.h("option", { selected: valueAsArray.includes(opt.value), value: opt.value }, opt.title));
      }
    });
  }
  renderOptions(options) {
    if (!options) {
      if (this.searchable) {
        return (index.h("li", { class: "ac-list__helper-item" }, this.searchHelperLabel));
      }
      return null;
    }
    if (options.length > 0) {
      return options.map(item => {
        if (item.separator) {
          return (index.h("li", { class: "ac-list__separator" }, index.h("span", { class: "ac-list__separator-title" }, item.title), index.h("span", { class: "ac-list__separator-line" })));
        }
        else {
          return (index.h("li", { class: 'ac-list__item ' + (item.selected ? 'ac-list__item--selected' : ''), onClick: () => this.handleSelect(item) }, item.title));
        }
      });
    }
    else {
      return (index.h("li", { class: "ac-list__helper-item" }, this.noResultsLabel, " ", this.filter));
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
    if (isEmpty.isEmpty(nativeInput.value)) {
      this.options = [];
    }
  }
  render() {
    const icon = this.isShowingPanel ? index_es.faChevronUp : index_es.faChevronDown;
    const SelectPanel = this.SelectPanel;
    const optionsToRender = this.filteredOptions || this.options;
    return index.h(index.Host, null, index.h("div", { class: "ac-select__phantom-dom" }, index.h("slot", null)), index.h("select", { ref: nativeSelect => this.nativeSelect = nativeSelect, name: this.name, multiple: this.multiple,
      // required={this.required} TODO: Review chrome can´t focus element some times need refactor: Critical
      disabled: this.disabled, class: "ac-select__native", "data-native": true }, this.options && this.renderNativeOptions()), index.h("ac-input-base", { ref: acInputBase => {
        this.acInputBase = acInputBase;
      }, label: this.label, type: "text", required: this.required, value: this.selectedText, onFocus: this.openPanel, onChange: this.handleChangeInput, disabled: this.disabled, readonly: !this.searchable, onKeyUp: this.searchable ? this.handleDebouncedKeyUp : null, size: this.size }, index.h("slot", { name: "item-start", slot: "item-start" }), index.h("slot", { name: "input-label", slot: "input-label" }), index.h("ac-button", { slot: "item-end", theme: this.isShowingPanel ? 'primary' : 'light', fill: "flat", disabled: this.disabled, loading: this.loading, onClick: this.togglePanel, "icon-only": true }, index.h(acFaIcon.AcFaIcon, { icon: icon, size: 12 }))), (this.error && typeof this.error === 'string') || (this.helperText && typeof this.helperText === 'string')
      ? index.h("span", { class: "ac-select__helper-text" }, this.error || this.helperText)
      : null, index.h(SelectPanel, { ref: selectPanel => this.selectPanel = selectPanel, class: "ac-select__panel", popperPivot: this.host, reset: !this.isShowingPanel }, index.h("slot", { name: "item-top", slot: "item-top" }), index.h("ul", { class: 'ac-select__list ac-list', style: { maxHeight: AcSelect.MAX_ITEMS_TO_RENDER * AcSelect.ITEM_HEIGHT + 'px' } }, this.renderOptions(optionsToRender)), index.h("slot", { name: "item-bottom", slot: "item-bottom" })));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueDidUpdate"],
    "options": ["optionsDidUpdate"],
    "isShowingPanel": ["isShowingPanelDidUpdate"],
    "error": ["errorDidUpdate"],
    "filter": ["filterDidUpdate"]
  }; }
};
/**
 * The count of max items to render in the select list, used to calculate the size of the panel.
 */
AcSelect.MAX_ITEMS_TO_RENDER = 10;
/**
 * The height of each item to render, used to calculate the size of the panel.
 */
AcSelect.ITEM_HEIGHT = 30;
__decorate([
  bind.Bind
], AcSelect.prototype, "togglePanel", null);
__decorate([
  bind.Bind
], AcSelect.prototype, "openPanel", null);
__decorate([
  bind.Bind
], AcSelect.prototype, "closePanel", null);
__decorate([
  bind.Bind
], AcSelect.prototype, "handleSelect", null);
__decorate([
  bind.Bind,
  reactivity.Debounced(200)
], AcSelect.prototype, "handleDebouncedKeyUp", null);
__decorate([
  bind.Bind
], AcSelect.prototype, "handleChangeInput", null);
AcSelect.style = acSelectCss;

exports.ac_select = AcSelect;

//# sourceMappingURL=ac-select.cjs.entry.js.map