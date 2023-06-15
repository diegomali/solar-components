'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const bind = require('./bind-c359decd.js');

const acInputBaseCss = "ac-input-base{display:flex;min-height:44px;max-height:44px;overflow:hidden;border:2px solid var(--color-neutral-light, #E6E6E6);border-radius:4px;background-color:var(--color-neutral-contrast, #FFFFFF)}ac-input-base .ac-input__input-container{display:flex;position:relative;width:100%}ac-input-base .ac-input__input-container .ac-input__label{position:absolute;top:12px;left:16px;transition:font-size ease-in-out 0.1s, top ease-in-out 0.1s;color:var(--color-neutral-darker, #646464);font-size:14px;line-height:1;white-space:nowrap;pointer-events:none;user-select:none}ac-input-base .ac-input__input-container input.ac-input__native{box-sizing:border-box;width:100%;padding:20px 16px 8px;border:none;background-color:transparent;color:var(--color-neutral-inverted, #111111);font-size:14px;line-height:1}ac-input-base .ac-input__input-container input.ac-input__native::placeholder{color:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.6)}ac-input-base .ac-input__input-container input.ac-input__native:focus{outline:none}ac-input-base .ac-input__item-start,ac-input-base .ac-input__item-end{display:flex !important;align-items:center !important;justify-content:center !important}ac-input-base .ac-input__item-start>ac-input-base,ac-input-base .ac-input__item-end>ac-input-base{border:0;border-top:2px}ac-input-base .ac-input__item-start>i,ac-input-base .ac-input__item-start>svg{margin:0 0 0 16px}ac-input-base .ac-input__item-end>ac-button .ac-button__native{border:0;border-left:2px solid var(--color-neutral-light, #E6E6E6);border-radius:0}ac-input-base.ac-input-base--no-label input.ac-input__native{padding:8px 16px 8px}ac-input-base.ac-input-base--focus .ac-input__label,ac-input-base.ac-input-base--filled .ac-input__label{top:4px;font-size:12px}ac-input-base.ac-input-base--small{min-height:36px;max-height:36px}ac-input-base.ac-input-base--small .ac-input__input-container input.ac-input__native{padding:8px 16px 8px}ac-input-base.ac-input-base--error{border-color:var(--color-alert-normal, #F0000A);background-color:white}ac-input-base.ac-input-base--error .ac-input__label{color:var(--color-alert-normal, #F0000A)}ac-input-base.ac-input-base--error .ac-input__item-end>ac-button .ac-button__native{border-color:var(--color-alert-normal, #F0000A)}ac-input-base.ac-input-base--disabled{background-color:var(--color-neutral-lighter, #F5F5F5)}ac-input-base.ac-input-base--disabled input.ac-input__native{color:var(--color-neutral-darker, #646464);cursor:not-allowed}ac-input-base.ac-input-base--disabled .ac-input__label{color:var(--color-neutral-normal, #C8C8C8)}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){ac-input-base .ac-input__item-start,ac-input-base .ac-input__item-end{max-width:44px}}ac-input-base.ac-input-base--primary.ac-input-base--focus{border-color:var(--color-primary-normal, #00466F)}ac-input-base.ac-input-base--primary.ac-input-base--focus .ac-input__label{color:var(--color-primary-normal, #00466F)}ac-input-base.ac-input-base--primary.ac-input-base--focus .ac-input__item-end>ac-button .ac-button__native{border-color:var(--color-primary-normal, #00466F)}ac-input-base.ac-input-base--info.ac-input-base--focus{border-color:var(--color-info-normal, #00B4F0)}ac-input-base.ac-input-base--info.ac-input-base--focus .ac-input__label{color:var(--color-info-normal, #00B4F0)}ac-input-base.ac-input-base--info.ac-input-base--focus .ac-input__item-end>ac-button .ac-button__native{border-color:var(--color-info-normal, #00B4F0)}ac-input-base.ac-input-base--success.ac-input-base--focus{border-color:var(--color-success-normal, #14C86E)}ac-input-base.ac-input-base--success.ac-input-base--focus .ac-input__label{color:var(--color-success-normal, #14C86E)}ac-input-base.ac-input-base--success.ac-input-base--focus .ac-input__item-end>ac-button .ac-button__native{border-color:var(--color-success-normal, #14C86E)}ac-input-base.ac-input-base--warning.ac-input-base--focus{border-color:var(--color-warning-normal, #f9c05d)}ac-input-base.ac-input-base--warning.ac-input-base--focus .ac-input__label{color:var(--color-warning-normal, #f9c05d)}ac-input-base.ac-input-base--warning.ac-input-base--focus .ac-input__item-end>ac-button .ac-button__native{border-color:var(--color-warning-normal, #f9c05d)}";

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
const AcInputBase = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { class: {
        [`ac-input-base--${this.theme}`]: !!this.theme,
        [`ac-input-base--${this.size}`]: !!this.size,
        'ac-input-base--filled': !!this.value && this.value !== '',
        'ac-input-base--no-label': !this.label,
        'ac-input-base--disabled': this.disabled,
        'ac-input-base--error': this.error,
        'ac-input-base--focus': this.hasFocus,
      } }, index.h("div", { class: "ac-input__item-start" }, index.h("slot", { name: "item-start" })), index.h("span", { class: "ac-input__input-container" }, index.h("label", { class: "ac-input__label" }, index.h("slot", { name: "input-label" }), this.label), index.h("input", { ref: input => this.nativeInput = input, class: "ac-input__native", name: this.name, value: this.value, type: this.type || 'text', pattern: this.pattern, readonly: this.readonly, disabled: this.disabled, required: this.required, max: this.max, min: this.min, maxlength: this.maxlength, minlength: this.minlength, autofocus: this.autofocus, autocomplete: this.autocomplete, autocapitalize: this.autocapitalize, placeholder: this.placeholder, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, step: this.type === 'number' ? this.step || '0.00000000000001' : undefined })), index.h("div", { class: "ac-input__item-end" }, index.h("slot", { name: "item-end" }))));
  }
  get host() { return index.getElement(this); }
};
__decorate([
  bind.Bind
], AcInputBase.prototype, "handleFocus", null);
__decorate([
  bind.Bind
], AcInputBase.prototype, "handleBlur", null);
__decorate([
  bind.Bind
], AcInputBase.prototype, "handleChange", null);
AcInputBase.style = acInputBaseCss;

exports.ac_input_base = AcInputBase;

//# sourceMappingURL=ac-input-base.cjs.entry.js.map