'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const index_es = require('./index.es-323a182b.js');
const transitionBehavior = require('./transition-behavior-4d199749.js');
const bind = require('./bind-c359decd.js');
const acFaIcon = require('./ac-fa-icon-fc0da5da.js');
const acNeogridShape = require('./ac-neogrid-shape-8e9edd26.js');
require('./animation-2589982c.js');
require('./component-behavior-ab8d7c53.js');

const acToastCss = "ac-toast{display:flex;flex-direction:column;max-width:392px;max-height:88px;margin:20px;transition:transform ease-in-out 0.1s;border-radius:4px;box-shadow:0 16px 32px rgba(0, 0, 0, 0.08);color:var(--color-neutral-contrast, #FFFFFF)}ac-toast.transition--before-enter{transform:scale(0.7)}ac-toast.transition--before-leave{transform:scale(0.7)}ac-toast .ac-toast__content{padding:0 16px 16px 16px}ac-toast .ac-toast__header{display:flex;position:relative;align-items:center;justify-content:space-between;height:28px;padding-left:16px;overflow:hidden}ac-toast .ac-toast__header .ac-toast_header-title{color:var(--color-neutral-contrast, #FFFFFF)}ac-toast .ac-toast__header-bg{position:absolute;top:-6px;right:-6px;width:36px;opacity:0.3}ac-toast .ac-toast__header-icon{z-index:1;padding-right:8px;opacity:0.6}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){ac-toast.transition--before-enter{transform:none}}ac-toast.ac-toast--info{background:var(--color-info-normal, #00B4F0)}ac-toast.ac-toast--info .ac-toast__header{color:var(--color-info-contrast, #FFFFFF)}ac-toast.ac-toast--info .ac-toast__header-icon{fill:var(--color-info-contrast, #FFFFFF)}ac-toast.ac-toast--success{background:var(--color-success-normal, #14C86E)}ac-toast.ac-toast--success .ac-toast__header{color:var(--color-success-contrast, #FFFFFF)}ac-toast.ac-toast--success .ac-toast__header-icon{fill:var(--color-success-contrast, #FFFFFF)}ac-toast.ac-toast--warning{background:var(--color-warning-normal, #f9c05d)}ac-toast.ac-toast--warning .ac-toast__header{color:var(--color-warning-contrast, #FFFFFF)}ac-toast.ac-toast--warning .ac-toast__header-icon{fill:var(--color-warning-contrast, #FFFFFF)}ac-toast.ac-toast--alert{background:var(--color-alert-normal, #F0000A)}ac-toast.ac-toast--alert .ac-toast__header{color:var(--color-alert-contrast, #FFFFFF)}ac-toast.ac-toast--alert .ac-toast__header-icon{fill:var(--color-alert-contrast, #FFFFFF)}";

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
const AcToast = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.closeEv = index.createEvent(this, "close", 7);
    this.transitionBehavior = new transitionBehavior.TransitionBehavior(this);
    this.type = undefined;
    this.title = undefined;
    this.message = undefined;
  }
  componentWillLoad() {
  }
  disconnectedCallback() {
    this.closeEv.emit();
  }
  async close() {
    this.host.remove();
  }
  render() {
    return (index.h(index.Host, { class: {
        [`ac-toast--${this.type}`]: this.type !== undefined,
      } }, index.h("header", { class: "ac-toast__header" }, index.h("h3", { class: "ac-toast_header-title" }, this.title), index.h(acFaIcon.AcFaIcon, { class: "ac-toast__header-icon", icon: index_es.faTimes, onClick: this.close }), index.h(acNeogridShape.AcNeogridShape, { onClick: this.close, class: "ac-toast__header-bg" })), index.h("section", { class: "ac-toast__content" }, index.h("span", { class: "ac-toast__content-text" }, this.message))));
  }
  get host() { return index.getElement(this); }
};
__decorate([
  bind.Bind
], AcToast.prototype, "close", null);
AcToast.style = acToastCss;

exports.ac_toast = AcToast;

//# sourceMappingURL=ac-toast.cjs.entry.js.map