'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const bind = require('./bind-c359decd.js');

const AcMenuIcon = props => (index.h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "20", height: "15", viewBox: "0 0 20 15" }, props),
  index.h("g", { transform: "translate(-16 -15)" },
    index.h("rect", { width: "16", height: "3", rx: "1.5", transform: "translate(16 15)" }),
    index.h("rect", { width: "20", height: "3", rx: "1.5", transform: "translate(16 21)" }),
    index.h("rect", { width: "12", height: "3", rx: "1.5", transform: "translate(16 27)" }))));

const acHeaderCss = "ac-header{display:block;position:relative;z-index:1;box-sizing:border-box;align-items:center;width:100%;transition:background ease-in-out 0.25s, box-shadow ease-in-out 0.25s}ac-header .ac-header__header-container{display:flex;align-items:center;justify-content:space-between;width:100%}ac-header .ac-header__header-container .ac-header__menu-button{display:none}@media (max-width: 768px){ac-header .ac-header__header-container .ac-header__menu-button{display:block}}ac-header .ac-header__header-container .ac-header__content{display:flex;align-items:center;width:100%;min-height:64px;padding:0 40px}ac-header .ac-header__header-container .ac-header__actions{padding-right:40px}@media (max-width: 768px){ac-header .ac-header__header-container{min-height:52px}ac-header .ac-header__header-container .ac-header__content{position:absolute;z-index:-1;justify-content:center;padding:0 16px}ac-header .ac-header__header-container .ac-header__actions{padding-right:16px}}ac-header>ac-tabs[slot=sub-header]{border-width:0}@media (min-width: 768px){ac-header>ac-tabs[slot=sub-header]{padding:0 24px;border-width:1px}}ac-header.ac-header--scrolled{box-shadow:0 4px 8px rgba(0, 0, 0, 0.08)}@media (max-width: 768px){ac-header.ac-header--primary{--color-theme-contrast:var(--color-primary-contrast, #FFFFFF);--color-theme-contrast-rgb:var(--color-primary-contrast-rgb,\n      255, 255, 255);background:var(--color-primary-normal, #00466F);color:var(--color-primary-contrast, #FFFFFF)}}@media (max-width: 768px){ac-header.ac-header--secondary{--color-theme-contrast:var(--color-secondary-contrast, #FFFFFF);--color-theme-contrast-rgb:var(--color-secondary-contrast-rgb,\n      255, 255, 255);background:var(--color-secondary-normal, #F0000A);color:var(--color-secondary-contrast, #FFFFFF)}}";

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
const AcHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.theme = 'primary';
    this.scrolled = undefined;
    this.hasNavdrawer = undefined;
  }
  componentDidLoad() {
    // @TODO: Use dependency injection.
    const parentLayout = this.host.parentElement.tagName === 'AC-LAYOUT' ?
      this.host.parentElement :
      this.host.parentElement.parentElement.tagName === 'AC-LAYOUT' ? this.host.parentElement.parentElement : null;
    if (parentLayout) {
      this.parentLayout = parentLayout;
      this.hasNavdrawer = !!this.parentLayout.querySelector('ac-navdrawer');
    }
  }
  handleLayoutContentScroll(ev) {
    this.scrolled = ev.detail.top > 0;
  }
  handleMenuClick() {
    this.parentLayout.collapsed = 'nav-left';
  }
  render() {
    return (index.h(index.Host, { class: {
        [`ac-header--${this.theme}`]: this.theme !== undefined,
        'ac-header--scrolled': this.scrolled
      } }, index.h("header", { class: "ac-header__header-container" }, this.hasNavdrawer ?
      index.h("ac-button", { class: "ac-header__menu-button", shape: "round", fill: "clear", "data-toggle": "mainNavdrawer", "icon-only": true, onClick: this.handleMenuClick }, index.h(AcMenuIcon, null))
      : index.h("span", null), index.h("div", { class: "ac-header__content" }, index.h("slot", null)), index.h("div", { class: "ac-header__actions" }, index.h("slot", { name: "actions" }))), index.h("slot", { name: "sub-header" })));
  }
  get host() { return index.getElement(this); }
};
__decorate([
  bind.Bind
], AcHeader.prototype, "handleMenuClick", null);
AcHeader.style = acHeaderCss;

exports.ac_header = AcHeader;

//# sourceMappingURL=ac-header.cjs.entry.js.map