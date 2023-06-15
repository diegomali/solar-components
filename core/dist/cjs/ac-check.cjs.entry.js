'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const formFieldBehavior = require('./form-field-behavior-4f6a2403.js');
const bind = require('./bind-c359decd.js');
require('./browser-9c45fd25.js');
require('./_commonjsHelpers-537d719a.js');
require('./component-behavior-ab8d7c53.js');

const acCheckCss = "ac-check{display:inline-block}ac-check .ac-check__container{display:flex;align-items:center}ac-check .ac-check__container .ac-check__label{margin:0;padding:0 0 0 8px;color:var(--color-neutral-darker, #646464);font-size:16px;line-height:1;cursor:pointer;user-select:none}ac-check .ac-check__native{display:none}ac-check .ac-check__custom{position:relative;box-sizing:border-box;width:20px;height:20px;margin:0;padding:0;border:2px solid var(--color-neutral-light, #E6E6E6);outline:none;background:var(--color-neutral-contrast, #FFFFFF);cursor:pointer}ac-check .ac-check__helper-text{display:block;margin-top:8px;padding-left:28px;color:var(--color-neutral-darker, #646464);font-size:12px;user-select:none}ac-check.ac-check--checkbox .ac-check__custom{border-radius:4px}ac-check.ac-check--checkbox .ac-check__custom:before{content:\"\";position:absolute;z-index:1;top:3px;left:3px;box-sizing:initial;width:8px;transition:all ease-in-out 0.1s;border:2px solid transparent;border-top-style:none;border-right-style:none}ac-check.ac-check--radio .ac-check__custom{border-radius:100%}ac-check.ac-check--radio .ac-check__custom:before{content:\"\";position:absolute;top:4px;left:4px;box-sizing:initial;width:8px;height:8px;transform:scale(2);transition:transform ease-in-out 0.1s;border-radius:100%;background-color:transparent}ac-check .ac-check__native:checked+.ac-check__custom{border-color:var(--color-primary-normal, #00466F);background:var(--color-primary-normal, #00466F)}ac-check .ac-check__native:checked+.ac-check__custom+.ac-check__label{color:var(--color-primary-normal, #00466F)}ac-check.ac-check--checkbox .ac-check__native:checked+.ac-check__custom:before{height:5px;transform:rotate(-45deg);border-color:var(--color-neutral-contrast, #FFFFFF)}ac-check.ac-check--radio .ac-check__native:checked+.ac-check__custom:before{transform:scale(1);background-color:var(--color-neutral-contrast, #FFFFFF)}ac-check.ac-check--disabled{cursor:not-allowed}ac-check.ac-check--disabled .ac-check__container{pointer-events:none}ac-check.ac-check--disabled .ac-check__label{color:var(--color-neutral-normal, #C8C8C8)}ac-check.ac-check--disabled .ac-check__custom{border-color:var(--color-neutral-light, #E6E6E6);background:var(--color-neutral-lighter, #F5F5F5)}ac-check.ac-check--disabled .ac-check__native:checked+.ac-check__custom{border-color:var(--color-neutral-normal, #C8C8C8);background:var(--color-neutral-normal, #C8C8C8)}ac-check.ac-check--disabled .ac-check__native:checked+.ac-check__custom+.ac-check__label{color:var(--color-neutral-dark, #A0A0A0)}ac-check.ac-check--error .ac-check__label{color:var(--color-alert-normal, #F0000A)}ac-check.ac-check--error .ac-check__custom{border-color:var(--color-alert-normal, #F0000A)}ac-check.ac-check--error .ac-check__helper-text{color:var(--color-alert-normal, #F0000A)}ac-check.ac-check--error .ac-check__native:checked+.ac-check__custom{border-color:var(--color-alert-normal, #F0000A);background:var(--color-alert-normal, #F0000A)}ac-check.ac-check--error .ac-check__native:checked+.ac-check__custom+.ac-check__label{color:var(--color-alert-normal, #F0000A)}ac-check.ac-check--label-left .ac-check__container{flex-direction:row-reverse}ac-check.ac-check--label-left .ac-check__label{padding-right:8px}ac-check.ac-check--label-left .ac-check__helper-text{padding-right:24px;padding-left:0;text-align:right}";

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
const AcCheck = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.formFieldBehavior = new formFieldBehavior.FormFieldBehavior(this);
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
    return (index.h(index.Host, { class: {
        [`ac-check--label-${this.direction}`]: this.direction !== undefined,
        [`ac-check--${this.type}`]: this.type !== undefined,
        'ac-check--disabled': this.disabled,
        'ac-check--error': !!this.error,
      } }, index.h("label", { class: "ac-check__container" }, index.h("input", { ref: nativeInput => this.nativeInput = nativeInput, class: "ac-check__native", type: this.type, name: this.name, value: this.value, onChange: this.handleChange, disabled: this.disabled, checked: this.checked }), index.h("div", { class: "ac-check__custom" }), this.label && index.h("div", { class: "ac-check__label" }, this.label)
      || index.h("div", { class: "ac-check__label" }, index.h("slot", { name: "label" }))), (this.error && typeof this.error === 'string') || (this.helperText && typeof this.helperText === 'string')
      && index.h("label", { class: "ac-check__helper-text" }, this.error || this.helperText)));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "checked": ["checkedDidUpdate"]
  }; }
};
__decorate([
  bind.Bind
], AcCheck.prototype, "handleChange", null);
AcCheck.style = acCheckCss;

exports.ac_check = AcCheck;

//# sourceMappingURL=ac-check.cjs.entry.js.map