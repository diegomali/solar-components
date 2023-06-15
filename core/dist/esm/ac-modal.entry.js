import { r as registerInstance, c as createEvent, h, g as getElement } from './index-253b3ca9.js';
import { h as faTimes } from './index.es-9ca36090.js';
import { T as TransitionBehavior } from './transition-behavior-4856978d.js';
import { B as Bind } from './bind-952a1624.js';
import { A as AcFaIcon } from './ac-fa-icon-8b19be0a.js';
import './animation-ab8aa382.js';
import './component-behavior-12d14453.js';

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
    registerInstance(this, hostRef);
    this.closeEv = createEvent(this, "close", 7);
    /**
     * The instance of the transition behavior used to animate this component.
     */
    this.transitionBehavior = new TransitionBehavior(this);
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
      h("header", { class: "ac-modal__header" }, this.title ?
        h("span", { class: "ac-modal__title" }, this.title) :
        h("slot", { name: "modal-title" }), h("ac-button", { fill: "clear", theme: "primary", shape: "round", "icon-only": true, onClick: this.close }, h(AcFaIcon, { icon: faTimes }))),
      h("section", { class: "ac-modal__content" }, h("slot", null)),
      h("footer", { class: "ac-modal__footer" }, h("slot", { name: "modal-actions" }))
    ];
  }
  get host() { return getElement(this); }
};
__decorate([
  Bind
], AcModal.prototype, "close", null);
AcModal.style = acModalCss;

export { AcModal as ac_modal };

//# sourceMappingURL=ac-modal.entry.js.map