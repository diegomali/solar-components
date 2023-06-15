import { r as registerInstance, h, H as Host, g as getElement } from './index-253b3ca9.js';
import { F as FormFieldBehavior } from './form-field-behavior-a15dc06a.js';
import { B as Bind } from './bind-952a1624.js';
import './browser-0c2448ad.js';
import './_commonjsHelpers-9943807e.js';
import './component-behavior-12d14453.js';

const acToggleCss = "ac-toggle{display:inline-block}ac-toggle .ac-toggle__container{display:flex;align-items:center}ac-toggle .ac-toggle__container .ac-toggle__label{margin:0;padding:0 0 0 8px;color:var(--color-neutral-darker, #646464);font-size:16px;line-height:1;cursor:pointer;user-select:none}ac-toggle .ac-toggle__native{display:none}ac-toggle .ac-toggle__custom{display:flex;position:relative;align-items:center;min-width:40px;max-width:40px;height:20px;transition:ease-in-out 0.05s;border-radius:10px;background-color:var(--color-neutral-light, #E6E6E6);cursor:pointer}ac-toggle .ac-toggle__custom:before{content:\"\";position:absolute;width:12px;height:12px;margin:0 4px;transition:ease-in-out 0.05s;border-radius:100%;background-color:var(--color-neutral-contrast, #FFFFFF)}ac-toggle .ac-toggle__native:checked+.ac-toggle__custom{background-color:var(--color-primary-normal, #00466F)}ac-toggle .ac-toggle__native:checked+.ac-toggle__custom:before{transform:translateX(20px)}ac-toggle .ac-toggle__native:checked+.ac-toggle__custom+.ac-toggle__label{color:var(--color-primary-normal, #00466F)}ac-toggle.ac-toggle--disabled{cursor:not-allowed}ac-toggle.ac-toggle--disabled .ac-toggle__container{pointer-events:none}ac-toggle.ac-toggle--disabled .ac-toggle__label{color:var(--color-neutral-normal, #C8C8C8)}ac-toggle.ac-toggle--disabled .ac-toggle__custom{border-color:var(--color-neutral-light, #E6E6E6);background:var(--color-neutral-lighter, #F5F5F5)}ac-toggle.ac-toggle--disabled .ac-toggle__native:checked+.ac-toggle__custom{border-color:var(--color-neutral-normal, #C8C8C8);background:var(--color-neutral-normal, #C8C8C8)}ac-toggle.ac-toggle--disabled .ac-toggle__native:checked+.ac-toggle__custom+.ac-toggle__label{color:var(--color-neutral-dark, #A0A0A0)}ac-toggle.ac-toggle--label-left .ac-toggle__container{flex-direction:row-reverse}ac-toggle.ac-toggle--label-left .ac-toggle__label{padding-right:8px}ac-toggle.ac-toggle--label-left .ac-toggle__helper-text{padding-right:24px;padding-left:0;text-align:right}";

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
const AcToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get host() { return getElement(this); }
};
__decorate([
  Bind
], AcToggle.prototype, "handleChange", null);
AcToggle.style = acToggleCss;

export { AcToggle as ac_toggle };

//# sourceMappingURL=ac-toggle.entry.js.map