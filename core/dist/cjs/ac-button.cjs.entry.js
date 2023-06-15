'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const index_es = require('./index.es-323a182b.js');
const acFaIcon = require('./ac-fa-icon-fc0da5da.js');

const acButtonCss = "ac-button{position:relative;display:inline-block;-webkit-appearance:none}ac-button .ac-button__native{display:inline-flex;box-sizing:border-box;align-items:center;min-width:100px;height:44px;padding:8px 8px;transition:box-shadow ease-in-out 0.25s, outline ease-in-out 0.25s, background-color ease-in-out 0.25s, color ease-in-out 0.25s;border-radius:4px;outline:none;font-family:inherit;font-size:14px;font-weight:bold;line-height:1;text-align:center;text-decoration:none;cursor:pointer;user-select:none;-webkit-appearance:none}ac-button .ac-button__native>[slot=icon-start]{margin-left:8px}ac-button .ac-button__native>[slot=icon-end]{margin-right:8px}ac-button .ac-button__native .ac-button__text{padding:0 8px;white-space:nowrap;margin:auto}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){ac-button.ac-button--icon-only .ac-button__text{width:100%}}ac-button.ac-button--small .ac-button__native{min-width:36px;height:36px;padding:8px 8px;font-size:12px}ac-button.ac-button--small .ac-button__native .ac-button__text{padding:0 4px}ac-button.ac-button--large .ac-button__native{min-width:50px;height:50px}ac-button.ac-button--solid .ac-button__native{border:1px solid rgba(0, 0, 0, 0.12);background:var(--color-theme-normal, #FFFFFF);box-shadow:0 4px 8px rgba(0, 0, 0, 0.08), inset 0 -2px 0 rgba(0, 0, 0, 0.12);fill:var(--color-theme-contrast, #111111);color:var(--color-primary-normal, #00466F)}ac-button.ac-button--solid .ac-button__native:hover{border:1px solid rgba(var(--color-primary-normal-rgb, 0, 70, 111), 0.12);background:rgba(var(--color-primary-normal-rgb, 0, 70, 111), 0.2);box-shadow:0 0 0 transparent, inset 0 -2px 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--solid .ac-button__native:focus{box-shadow:0 0 0 4px rgba(var(--color-primary-normal-rgb, 0, 70, 111), 0.08), inset 0 -2px 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--solid .ac-button__native:active{transition:box-shadow ease-in-out 0.05s;box-shadow:0 0 0 8px rgba(var(--color-primary-normal-rgb, 0, 70, 111), 0.08), inset 0 0 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--clear .ac-button__native{border:0;background:transparent;box-shadow:none !important;fill:var(--color-theme-contrast, #111111);color:var(--color-theme-contrast, #111111)}ac-button.ac-button--flat .ac-button__native{border:0;box-shadow:none !important}ac-button.ac-button--block{width:100%}ac-button.ac-button--block .ac-button__native{justify-content:center;width:100%}ac-button.ac-button--round .ac-button__native{border-radius:100px}ac-button.ac-button--icon-only .ac-button__native{display:flex;align-items:center;justify-content:center;width:100%;min-width:44px;padding:0}ac-button.ac-button--disabled{pointer-events:none}ac-button.ac-button--disabled .ac-button__native{background:var(--color-neutral-light, #E6E6E6) !important;fill:var(--color-neutral-normal, #C8C8C8) !important;color:var(--color-neutral-normal, #C8C8C8) !important;cursor:not-allowed;pointer-events:all}ac-button.ac-button--disabled .ac-button__native>*{pointer-events:none}ac-button.ac-button--loading .ac-button__native{opacity:0.5;pointer-events:none}ac-button.ac-button--loading [slot=icon-start]{display:none}ac-button.ac-button--loading.ac-button--icon-only .ac-button__text{display:none}ac-button.ac-button--primary .ac-button__native{background-color:var(--color-primary-normal, #00466F);fill:var(--color-primary-contrast, #FFFFFF);color:var(--color-primary-contrast, #FFFFFF)}ac-button.ac-button--primary .ac-button__native:hover{background-color:var(--color-primary-dark, #00263c)}ac-button.ac-button--primary .ac-button__native:focus{box-shadow:0 0 0 4px rgba(var(--color-primary-normal-rgb, 0, 70, 111), 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--primary .ac-button__native:active{box-shadow:0 0 0 8px rgba(var(--color-primary-normal-rgb, 0, 70, 111), 0.2), inset 0 0 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--primary.ac-button--clear .ac-button__native{background:transparent;fill:var(--color-primary-normal, #00466F);color:var(--color-primary-normal, #00466F)}ac-button.ac-button--primary.ac-button--clear .ac-button__native:hover,ac-button.ac-button--primary.ac-button--clear .ac-button__native:focus{background-color:rgba(var(--color-primary-normal-rgb, 0, 70, 111), 0.2)}ac-button.ac-button--primary.ac-button--clear .ac-button__native:active{background-color:rgba(var(--color-primary-dark-rgb, 0, 38, 60), 0.4)}ac-button.ac-button--secondary .ac-button__native{background-color:var(--color-secondary-normal, #F0000A);fill:var(--color-secondary-contrast, #FFFFFF);color:var(--color-secondary-contrast, #FFFFFF)}ac-button.ac-button--secondary .ac-button__native:hover{background-color:var(--color-secondary-dark, #bd0008)}ac-button.ac-button--secondary .ac-button__native:focus{box-shadow:0 0 0 4px rgba(var(--color-secondary-normal-rgb, 240, 0, 10), 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--secondary .ac-button__native:active{box-shadow:0 0 0 8px rgba(var(--color-secondary-normal-rgb, 240, 0, 10), 0.2), inset 0 0 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--secondary.ac-button--clear .ac-button__native{background:transparent;fill:var(--color-secondary-normal, #F0000A);color:var(--color-secondary-normal, #F0000A)}ac-button.ac-button--secondary.ac-button--clear .ac-button__native:hover,ac-button.ac-button--secondary.ac-button--clear .ac-button__native:focus{background-color:rgba(var(--color-secondary-normal-rgb, 240, 0, 10), 0.2)}ac-button.ac-button--secondary.ac-button--clear .ac-button__native:active{background-color:rgba(var(--color-secondary-dark-rgb, 189, 0, 8), 0.4)}ac-button.ac-button--info .ac-button__native{background-color:var(--color-info-normal, #00B4F0);fill:var(--color-info-contrast, #FFFFFF);color:var(--color-info-contrast, #FFFFFF)}ac-button.ac-button--info .ac-button__native:hover{background-color:var(--color-info-dark, #008ebd)}ac-button.ac-button--info .ac-button__native:focus{box-shadow:0 0 0 4px rgba(var(--color-info-normal-rgb, 0, 180, 240), 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--info .ac-button__native:active{box-shadow:0 0 0 8px rgba(var(--color-info-normal-rgb, 0, 180, 240), 0.2), inset 0 0 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--info.ac-button--clear .ac-button__native{background:transparent;fill:var(--color-info-normal, #00B4F0);color:var(--color-info-normal, #00B4F0)}ac-button.ac-button--info.ac-button--clear .ac-button__native:hover,ac-button.ac-button--info.ac-button--clear .ac-button__native:focus{background-color:rgba(var(--color-info-normal-rgb, 0, 180, 240), 0.2)}ac-button.ac-button--info.ac-button--clear .ac-button__native:active{background-color:rgba(var(--color-info-dark-rgb, 0, 142, 189), 0.4)}ac-button.ac-button--success .ac-button__native{background-color:var(--color-success-normal, #14C86E);fill:var(--color-success-contrast, #FFFFFF);color:var(--color-success-contrast, #FFFFFF)}ac-button.ac-button--success .ac-button__native:hover{background-color:var(--color-success-dark, #0f9a55)}ac-button.ac-button--success .ac-button__native:focus{box-shadow:0 0 0 4px rgba(var(--color-success-normal-rgb, 20, 200, 110), 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--success .ac-button__native:active{box-shadow:0 0 0 8px rgba(var(--color-success-normal-rgb, 20, 200, 110), 0.2), inset 0 0 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--success.ac-button--clear .ac-button__native{background:transparent;fill:var(--color-success-normal, #14C86E);color:var(--color-success-normal, #14C86E)}ac-button.ac-button--success.ac-button--clear .ac-button__native:hover,ac-button.ac-button--success.ac-button--clear .ac-button__native:focus{background-color:rgba(var(--color-success-normal-rgb, 20, 200, 110), 0.2)}ac-button.ac-button--success.ac-button--clear .ac-button__native:active{background-color:rgba(var(--color-success-dark-rgb, 15, 154, 85), 0.4)}ac-button.ac-button--warning .ac-button__native{background-color:var(--color-warning-normal, #f9c05d);fill:var(--color-warning-contrast, #FFFFFF);color:var(--color-warning-contrast, #FFFFFF)}ac-button.ac-button--warning .ac-button__native:hover{background-color:var(--color-warning-dark, #f7ad2c)}ac-button.ac-button--warning .ac-button__native:focus{box-shadow:0 0 0 4px rgba(var(--color-warning-normal-rgb, 249, 192, 93), 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--warning .ac-button__native:active{box-shadow:0 0 0 8px rgba(var(--color-warning-normal-rgb, 249, 192, 93), 0.2), inset 0 0 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--warning.ac-button--clear .ac-button__native{background:transparent;fill:var(--color-warning-normal, #f9c05d);color:var(--color-warning-normal, #f9c05d)}ac-button.ac-button--warning.ac-button--clear .ac-button__native:hover,ac-button.ac-button--warning.ac-button--clear .ac-button__native:focus{background-color:rgba(var(--color-warning-normal-rgb, 249, 192, 93), 0.2)}ac-button.ac-button--warning.ac-button--clear .ac-button__native:active{background-color:rgba(var(--color-warning-dark-rgb, 247, 173, 44), 0.4)}ac-button.ac-button--alert .ac-button__native{background-color:var(--color-alert-normal, #F0000A);fill:var(--color-alert-contrast, #FFFFFF);color:var(--color-alert-contrast, #FFFFFF)}ac-button.ac-button--alert .ac-button__native:hover{background-color:var(--color-alert-dark, #bd0008)}ac-button.ac-button--alert .ac-button__native:focus{box-shadow:0 0 0 4px rgba(var(--color-alert-normal-rgb, 240, 0, 10), 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--alert .ac-button__native:active{box-shadow:0 0 0 8px rgba(var(--color-alert-normal-rgb, 240, 0, 10), 0.2), inset 0 0 0 rgba(0, 0, 0, 0.12)}ac-button.ac-button--alert.ac-button--clear .ac-button__native{background:transparent;fill:var(--color-alert-normal, #F0000A);color:var(--color-alert-normal, #F0000A)}ac-button.ac-button--alert.ac-button--clear .ac-button__native:hover,ac-button.ac-button--alert.ac-button--clear .ac-button__native:focus{background-color:rgba(var(--color-alert-normal-rgb, 240, 0, 10), 0.2)}ac-button.ac-button--alert.ac-button--clear .ac-button__native:active{background-color:rgba(var(--color-alert-dark-rgb, 189, 0, 8), 0.4)}";

const AcButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.type = 'button';
    this.theme = undefined;
    this.size = undefined;
    this.fill = 'solid';
    this.expand = undefined;
    this.shape = undefined;
    this.href = undefined;
    this.target = undefined;
    this.iconOnly = undefined;
    this.loading = undefined;
    this.disabled = undefined;
  }
  render() {
    const TagType = this.href ? 'a' : 'button';
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : { href: this.href, target: this.target };
    return (
    // @ts-ignore
    index.h(index.Host, { class: {
        [`ac-button--${this.theme}`]: this.theme !== undefined,
        [`ac-button--${this.size}`]: this.size !== undefined,
        [`ac-button--${this.fill}`]: this.fill !== undefined,
        [`ac-button--${this.expand}`]: this.expand !== undefined,
        [`ac-button--${this.shape}`]: this.shape !== undefined,
        'ac-button--icon-only': this.iconOnly,
        'ac-button--disabled': this.disabled,
        'ac-button--loading': this.loading,
      } }, index.h(TagType, Object.assign({}, attrs, { disabled: this.disabled, class: "ac-button__native" }), this.loading && index.h(acFaIcon.AcFaIcon, { icon: index_es.faSpinner, size: 14, anim: "spin", style: { width: '14px' } }), index.h("slot", { name: "icon-start" }), index.h("span", { class: "ac-button__text" }, index.h("slot", null)), index.h("slot", { name: "icon-end" }))));
  }
  get host() { return index.getElement(this); }
};
AcButton.style = acButtonCss;

exports.ac_button = AcButton;

//# sourceMappingURL=ac-button.cjs.entry.js.map