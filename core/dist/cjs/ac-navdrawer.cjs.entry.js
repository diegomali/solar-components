'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const index_es = require('./index.es-323a182b.js');
const transitionBehavior = require('./transition-behavior-4d199749.js');
const bind = require('./bind-c359decd.js');
const acFaIcon = require('./ac-fa-icon-fc0da5da.js');
const acNeogridShape = require('./ac-neogrid-shape-8e9edd26.js');
const isNil = require('./isNil-7855ac09.js');
require('./animation-2589982c.js');
require('./component-behavior-ab8d7c53.js');
require('./_curry1-b59ebfd7.js');

const acNavdrawerCss = "ac-navdrawer{display:flex;position:relative;flex-direction:column;height:100%;width:260px;transition:width ease-in-out 0.1s;background:var(--color-neutral-contrast, #FFFFFF);box-shadow:0 0 16px rgba(0, 0, 0, 0.08);color:var(--color-neutral-inverted, #111111)}ac-navdrawer .ac-navdrawer__header{display:flex;box-sizing:border-box;align-items:center;justify-content:space-between;width:100%;min-height:64px;padding:0;overflow:hidden;font-weight:bold}ac-navdrawer .ac-navdrawer__header .ac-navdrawer__drop-down-menu{margin:0 8px 0}ac-navdrawer .ac-navdrawer__header .ac-navdrawer__title{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;margin:16px 24px 0}ac-navdrawer .ac-navdrawer__header .ac-navdrawer__title .ac-navdrawer__title-content{height:24px;width:100%;font-size:16px}ac-navdrawer .ac-navdrawer__header .ac-navdrawer__title .ac-navdrawer__close-button{width:32px;height:32px}ac-navdrawer .ac-navdrawer__header .ac-navdrawer__title .ac-navdrawer__close-button .ac-button__native{min-height:100%;min-width:100%;height:100%;width:100%}ac-navdrawer .ac-navdrawer__content{display:flex;box-sizing:border-box;justify-content:center;height:100%;max-height:100%;overflow-x:hidden;overflow-y:auto}ac-navdrawer .ac-navdrawer__toggle-button{display:flex;position:absolute;z-index:2;top:28px;left:calc(100% - 4px);align-items:center;justify-content:center;cursor:pointer}ac-navdrawer .ac-navdrawer__toggle-button .ac-navdrawer__toggle-button-bg{position:absolute;width:24px;height:24px;stroke-width:50px;stroke:var(--color-neutral-lighter, #F5F5F5)}ac-navdrawer .ac-navdrawer__toggle-button .ac-navdrawer__toggle-button-icon{z-index:1}@media (max-width: 768px){ac-navdrawer .ac-navdrawer__toggle-button{display:none}}ac-navdrawer.ac-navdrawer--over{transition:transform ease-in-out 0.1s}ac-navdrawer.ac-navdrawer--over .ac-navdrawer__header{align-items:baseline}ac-navdrawer.ac-navdrawer--over .ac-navdrawer__drop-down-menu{margin-top:8px !important}ac-navdrawer.transition--before-enter,ac-navdrawer.transition--before-leave{transform:translate(300px)}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){ac-navdrawer .ac-navdrawer__toggle-button{left:calc(100% - 10px)}ac-navdrawer .ac-navdrawer__toggle-button-icon{position:absolute;top:6px;left:6px;height:12px}ac-navdrawer.transition--before-enter,ac-navdrawer.transition--before-leave{transform:none !important}}ac-navdrawer.ac-navdrawer--compact{width:64px;border-radius:0}ac-navdrawer.ac-navdrawer--primary{--color-theme-contrast:var(--color-primary-contrast, #FFFFFF);--color-theme-contrast-rgb:var(--color-primary-contrast-rgb,\n    255, 255, 255);background:var(--color-primary-dark, #00263c);color:var(--color-primary-contrast, #FFFFFF)}ac-navdrawer.ac-navdrawer--primary .ac-navdrawer__toggle-button .ac-navdrawer__toggle-button-bg{fill:var(--color-primary-dark, #00263c)}ac-navdrawer.ac-navdrawer--primary .ac-navdrawer__toggle-button .ac-navdrawer__toggle-button-icon{fill:var(--color-primary-contrast, #FFFFFF)}ac-navdrawer.ac-navdrawer--secondary{--color-theme-contrast:var(--color-secondary-contrast, #FFFFFF);--color-theme-contrast-rgb:var(--color-secondary-contrast-rgb,\n    255, 255, 255);background:var(--color-secondary-dark, #bd0008);color:var(--color-secondary-contrast, #FFFFFF)}ac-navdrawer.ac-navdrawer--secondary .ac-navdrawer__toggle-button .ac-navdrawer__toggle-button-bg{fill:var(--color-secondary-dark, #bd0008)}ac-navdrawer.ac-navdrawer--secondary .ac-navdrawer__toggle-button .ac-navdrawer__toggle-button-icon{fill:var(--color-secondary-contrast, #FFFFFF)}ac-navdrawer .ac-navdrawer__content::-webkit-scrollbar{width:8px;height:8px}ac-navdrawer .ac-navdrawer__content::-webkit-scrollbar-track{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.2)}ac-navdrawer .ac-navdrawer__content::-webkit-scrollbar-thumb{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.3)}ac-navdrawer .ac-navdrawer__content::-webkit-scrollbar-thumb:hover{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.4)}";

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
const AcNavdrawer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.closeEv = index.createEvent(this, "close", 7);
    /**
     * The instance of the transition behavior used to animate this component.
     */
    this.transitionBehavior = new transitionBehavior.TransitionBehavior(this);
    this.showToggle = true;
    this.title = undefined;
    this.theme = undefined;
    this.mode = 'push';
    this.compact = undefined;
    this.options = undefined;
  }
  compactDidUpdate() {
    for (const menu of this.childMenus) {
      menu.iconOnly = this.compact;
    }
  }
  componentDidLoad() {
    this.loadItemsFromHTML();
  }
  componentWillLoad() { }
  disconnectedCallback() {
    this.closeEv.emit();
  }
  loadItemsFromHTML() {
    this.childMenus = Array.from(this.host.querySelectorAll('ac-menu'));
  }
  toggleMode() {
    this.compact = !this.compact;
  }
  close() {
    this.host.remove();
  }
  renderHeader() {
    if (this.options) {
      return (index.h("ac-drop-down-menu", { compact: this.compact, options: this.options, class: "ac-navdrawer__drop-down-menu" }));
    }
    else if (!isNil.isNil(this.title)) {
      return (index.h("div", { class: "ac-navdrawer__title" }, index.h("span", { class: "ac-navdrawer__title-content" }, this.title), index.h("ac-button", { class: "ac-navdrawer__close-button", fill: "clear", theme: "primary", shape: "round", "icon-only": true, onClick: this.close }, index.h(acFaIcon.AcFaIcon, { icon: index_es.faTimes, size: 14 }))));
    }
    else {
      return index.h("slot", { name: "header" });
    }
  }
  render() {
    return (index.h(index.Host, { class: {
        [`ac-navdrawer--${this.theme}`]: !!this.theme,
        'ac-navdrawer--compact': this.compact,
        'ac-navdrawer--over': this.mode === 'over'
      } }, index.h("div", { class: "ac-navdrawer__header" }, this.renderHeader()), index.h("nav", { class: "ac-navdrawer__content" }, index.h("slot", { name: "content" })), this.showToggle && index.h("div", { class: "ac-navdrawer__toggle-button", onClick: this.toggleMode }, index.h(acNeogridShape.AcNeogridShape, { class: "ac-navdrawer__toggle-button-bg" }), index.h(acFaIcon.AcFaIcon, { class: "ac-navdrawer__toggle-button-icon", icon: this.compact ? index_es.faChevronRight : index_es.faChevronLeft, size: 12 }))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "compact": ["compactDidUpdate"]
  }; }
};
__decorate([
  bind.Bind
], AcNavdrawer.prototype, "toggleMode", null);
__decorate([
  bind.Bind
], AcNavdrawer.prototype, "close", null);
AcNavdrawer.style = acNavdrawerCss;

exports.ac_navdrawer = AcNavdrawer;

//# sourceMappingURL=ac-navdrawer.cjs.entry.js.map