'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const focusBehavior = require('./focus-behavior-041097ad.js');
const bind = require('./bind-c359decd.js');
require('./browser-9c45fd25.js');
require('./_commonjsHelpers-537d719a.js');
require('./component-behavior-ab8d7c53.js');

const acLayoutCss = "ac-layout{display:flex;background:var(--color-neutral-lighter, #F5F5F5)}ac-layout .ac-layout__nav-left-container{height:100vh;border:0}ac-layout .ac-layout__nav-left-container ac-navdrawer{border-radius:0 8px 8px 0}ac-layout .ac-layout__content-container{display:flex;flex-direction:column;width:100%;height:100vh;overflow:auto;transition:filter ease-in-out 0.1s;background:var(--color-neutral-lighter, #F5F5F5)}ac-layout .ac-layout__content-scroll{position:relative}@media (max-width: 768px){ac-layout .ac-layout__content-scroll{height:100%;max-height:100%;overflow:auto}ac-layout .ac-layout__nav-left-container{position:absolute;z-index:4;transform:translateX(-100%);transition:transform ease-in-out 0.1s}}@media (max-width: 768px){ac-layout.ac-layout--nav-left-collapsed .ac-layout__nav-left-container{position:absolute;transform:translateX(0)}ac-layout.ac-layout--nav-left-collapsed .ac-layout__content-container{filter:brightness(0.4)}ac-layout.ac-layout--nav-left-collapsed ac-navdrawer{box-shadow:16px 0px 32px rgba(0, 0, 0, 0.08)}}ac-layout .ac-layout__content-container::-webkit-scrollbar{width:8px;height:8px}ac-layout .ac-layout__content-container::-webkit-scrollbar-track{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.2)}ac-layout .ac-layout__content-container::-webkit-scrollbar-thumb{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.3)}ac-layout .ac-layout__content-container::-webkit-scrollbar-thumb:hover{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.4)}ac-layout .ac-layout__content-scroll::-webkit-scrollbar{width:8px;height:8px}ac-layout .ac-layout__content-scroll::-webkit-scrollbar-track{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.2)}ac-layout .ac-layout__content-scroll::-webkit-scrollbar-thumb{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.3)}ac-layout .ac-layout__content-scroll::-webkit-scrollbar-thumb:hover{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.4)}";

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
const AcLayout = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.contentScroll = index.createEvent(this, "contentScroll", 7);
    this.focusBehavior = new focusBehavior.FocusBehavior(this);
    this.collapsed = undefined;
  }
  collapsedDidUpdate() {
    this.hasFocus = !!this.collapsed;
  }
  componentDidLoad() {
    this.focusTarget = this.host.querySelector('.ac-layout__nav-left-container ac-navdrawer');
  }
  disconnectedCallback() {
  }
  whenBlur(element) {
    console.log(element, element.dataset);
    if (!element.dataset.navdrawer && this.collapsed) {
      this.collapsed = null;
    }
  }
  handleContentScroll() {
    this.contentScroll.emit({ top: this.contentElt.scrollTop, left: this.contentElt.scrollLeft });
  }
  render() {
    return (index.h(index.Host, { class: {
        [`ac-layout--${this.collapsed}-collapsed`]: !!this.collapsed,
      } }, index.h("div", { class: "ac-layout__nav-left-container" }, index.h("slot", { name: "nav-left" })), index.h("div", { class: "ac-layout__content-container" }, index.h("slot", { name: "header" }), index.h("div", { ref: contentElt => this.contentElt = contentElt, class: "ac-layout__content-scroll", onScroll: this.handleContentScroll }, index.h("slot", { name: "content" })))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "collapsed": ["collapsedDidUpdate"]
  }; }
};
__decorate([
  bind.Bind
], AcLayout.prototype, "handleContentScroll", null);
AcLayout.style = acLayoutCss;

exports.ac_layout = AcLayout;

//# sourceMappingURL=ac-layout.cjs.entry.js.map