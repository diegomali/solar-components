'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const index_es = require('./index.es-323a182b.js');
const transitionBehavior = require('./transition-behavior-4d199749.js');
const bind = require('./bind-c359decd.js');
const acFaIcon = require('./ac-fa-icon-fc0da5da.js');
require('./animation-2589982c.js');
require('./component-behavior-ab8d7c53.js');

const acModalCss = "ac-modal{display:flex;position:relative;flex-direction:column;justify-content:space-between;width:50%;min-width:240px;min-height:240px;transition:transform ease-in-out 0.1s, opacity ease-in-out 0.1s;border-radius:4px;background-color:var(--color-neutral-contrast, #FFFFFF);box-shadow:0 16px 32px rgba(0, 0, 0, 0.08)}ac-modal .ac-modal__header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--color-neutral-light, #E6E6E6);color:var(--color-neutral-inverted, #111111)}ac-modal .ac-modal__header .ac-modal__title{font-size:20px;font-weight:bold}ac-modal .ac-modal__content{position:relative;height:100%;max-height:calc(100vh - 314px);padding:40px;overflow-y:auto}ac-modal .ac-modal__footer{padding:16px}ac-modal .ac-modal__footer ac-button{margin:0 4px}ac-modal.transition--before-enter,ac-modal.transition--before-leave{transform:scale(0.7);opacity:0.5}@media (max-width: 576px){ac-modal{width:100%;height:100%;border-radius:0}ac-modal .ac-modal__header{min-height:56px;padding:8px}ac-modal .ac-modal__header h1{font-size:16px}ac-modal .ac-modal__content{max-height:calc(100vh - 56px);padding:8px}}ac-modal .ac-modal__content::-webkit-scrollbar{width:8px;height:8px}ac-modal .ac-modal__content::-webkit-scrollbar-track{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.2)}ac-modal .ac-modal__content::-webkit-scrollbar-thumb{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.3)}ac-modal .ac-modal__content::-webkit-scrollbar-thumb:hover{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.4)}";

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
const AcModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.closeEv = index.createEvent(this, "close", 7);
    /**
     * The instance of the transition behavior used to animate this component.
     */
    this.transitionBehavior = new transitionBehavior.TransitionBehavior(this);
    this.title = undefined;
  }
  componentWillLoad() { }
  disconnectedCallback() {
    this.closeEv.emit();
  }
  close() {
    this.host.remove();
  }
  render() {
    return [
      index.h("header", { class: "ac-modal__header" }, this.title ?
        index.h("span", { class: "ac-modal__title" }, this.title) :
        index.h("slot", { name: "modal-title" }), index.h("ac-button", { fill: "clear", theme: "primary", shape: "round", "icon-only": true, onClick: this.close }, index.h(acFaIcon.AcFaIcon, { icon: index_es.faTimes }))),
      index.h("section", { class: "ac-modal__content" }, index.h("slot", null)),
      index.h("footer", { class: "ac-modal__footer" }, index.h("slot", { name: "modal-actions" }))
    ];
  }
  get host() { return index.getElement(this); }
};
__decorate([
  bind.Bind
], AcModal.prototype, "close", null);
AcModal.style = acModalCss;

exports.ac_modal = AcModal;

//# sourceMappingURL=ac-modal.cjs.entry.js.map