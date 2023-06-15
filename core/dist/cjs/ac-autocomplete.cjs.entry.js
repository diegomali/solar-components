'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const asyncDataBehavior = require('./async-data-behavior-be99a3af.js');
const ensureController = require('./ensure-controller-b55d6862.js');
const bind = require('./bind-c359decd.js');
const reactivity = require('./reactivity-29a6561d.js');
const focusBehavior = require('./focus-behavior-041097ad.js');
const formFieldBehavior = require('./form-field-behavior-4f6a2403.js');
const acFaIcon = require('./ac-fa-icon-fc0da5da.js');
const index_es = require('./index.es-323a182b.js');
require('./component-behavior-ab8d7c53.js');
require('./isNil-7855ac09.js');
require('./_curry1-b59ebfd7.js');
require('./browser-9c45fd25.js');
require('./_commonjsHelpers-537d719a.js');

const acAutocompleteCss = ".ac-autocomplete{display:flex;flex:1;flex-direction:column}.ac-autocomplete .ac-autocomplete__icon{margin:8px}";

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
const AcAutocomplete = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.selectChange = index.createEvent(this, "selectChange", 7);
    this.asyncDataBehavior = new asyncDataBehavior.AsyncDataBehavior(this);
    /**
     * The instance of the FormFieldBehavior.
     */
    this.formFieldBehavior = new formFieldBehavior.FormFieldBehavior(this);
    /**
     * Use to request a formFieldBehavior.checkValidity call.
     */
    this.requestCheckValidity = false;
    this.SelectPanel = ensureController.createControllerPortal(ensureController.ensureController('ac-panel-controller'));
    /**
     * The instance of the FocusBehavior used to close the panel when the user clicks outside.
     */
    this.focusBehavior = new focusBehavior.FocusBehavior(this);
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
    return index.h(index.Host, { class: "ac-autocomplete" }, index.h("ac-input-base", { ref: acInputBase => this.acInputBase = acInputBase, class: "ac-autocomplete__input", name: this.name, disabled: this.disabled, type: "text", label: this.label, value: this.selectedText, onKeyUp: this.handleDebouncedKeyUp, size: this.size }, this.loading && index.h(acFaIcon.AcFaIcon, { slot: "item-end", class: "ac-autocomplete__icon", icon: index_es.faSpinner, size: 14, anim: "spin" })), index.h(SelectPanel, { ref: selectPanel => this.selectPanel = selectPanel, class: "ac-autocomplete__panel", popperPivot: this.host, reset: !this.isPanelOpen }, index.h("ul", { class: "ac-autocomplete__list ac-list" }, this.options.length === 0
      ? index.h("li", { class: "ac-list__item" }, this.noResultsLabel, " ", this.filter)
      : this.options.map((option, index$1) => (index.h("li", { class: "ac-list__item", key: index$1, tabIndex: index$1, value: option.value, onClick: () => this.handleSelected(option) }, option.title))))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "error": ["errorDidUpdate"],
    "isPanelOpen": ["isShowingPanelDidUpdate"]
  }; }
};
__decorate([
  bind.Bind
], AcAutocomplete.prototype, "handleSelected", null);
__decorate([
  bind.Bind,
  reactivity.Debounced(200)
], AcAutocomplete.prototype, "handleDebouncedKeyUp", null);
AcAutocomplete.style = acAutocompleteCss;

exports.ac_autocomplete = AcAutocomplete;

//# sourceMappingURL=ac-autocomplete.cjs.entry.js.map