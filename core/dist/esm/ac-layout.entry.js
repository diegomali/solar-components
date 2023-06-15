import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-253b3ca9.js';
import { F as FocusBehavior } from './focus-behavior-9b8b5162.js';
import { B as Bind } from './bind-952a1624.js';
import './browser-0c2448ad.js';
import './_commonjsHelpers-9943807e.js';
import './component-behavior-12d14453.js';

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
    registerInstance(this, hostRef);
    this.contentScroll = createEvent(this, "contentScroll", 7);
    this.focusBehavior = new FocusBehavior(this);
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
    return (h(Host, { class: {
        [`ac-layout--${this.collapsed}-collapsed`]: !!this.collapsed,
      } }, h("div", { class: "ac-layout__nav-left-container" }, h("slot", { name: "nav-left" })), h("div", { class: "ac-layout__content-container" }, h("slot", { name: "header" }), h("div", { ref: contentElt => this.contentElt = contentElt, class: "ac-layout__content-scroll", onScroll: this.handleContentScroll }, h("slot", { name: "content" })))));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "collapsed": ["collapsedDidUpdate"]
  }; }
};
__decorate([
  Bind
], AcLayout.prototype, "handleContentScroll", null);
AcLayout.style = acLayoutCss;

export { AcLayout as ac_layout };

//# sourceMappingURL=ac-layout.entry.js.map