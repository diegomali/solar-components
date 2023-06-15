import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-253b3ca9.js';
import { a as faChevronUp, b as faChevronDown } from './index.es-9ca36090.js';
import { B as Bind } from './bind-952a1624.js';
import { A as AcFaIcon } from './ac-fa-icon-8b19be0a.js';

/**
 * Creates a ElementRef function.
 */
function createElementRef() {
  const refFunction = (elt) => {
    refFunction.nativeElement = elt;
  };
  return refFunction;
}

const acCollapseCss = "ac-collapse .ac-collapse__header{display:flex;align-items:center;justify-content:space-between;min-width:100%}ac-collapse .ac-collapse__header .ac-collapse__header-wrapper{padding:0 24px}ac-collapse .ac-collapse__header .ac-collapse__toggle-button{margin:4px}ac-collapse .ac-collapse__content{overflow:hidden;transition:height ease-in-out 0.25s}";

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
const AcCollapse = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, "toggle", 7);
    this.collapseContent = createElementRef();
    this.expanded = undefined;
  }
  async handleToggle() {
    this.expanded = !this.expanded;
    this.toggle.emit({ expanded: this.expanded });
  }
  render() {
    const icon = this.expanded ? faChevronUp : faChevronDown;
    // @TODO: Review animation util usage.
    const contentHeight = (this.expanded ? this.collapseContent.nativeElement.children[0].clientHeight : 0) + 'px';
    return (h(Host, { class: {
        'ac-collapse--expanded': this.expanded,
      } }, h("ac-card", { class: "ac-collapse__card" }, h("div", { class: "ac-collapse__header" }, h("div", { class: "ac-collapse__header-wrapper" }, h("slot", { name: "header" })), h("ac-button", { class: "ac-collapse__toggle-button", shape: "round", fill: "clear", theme: "primary", onClick: this.handleToggle, "icon-only": true }, h(AcFaIcon, { icon: icon }))), h("div", { class: "ac-collapse__content", ref: this.collapseContent, style: { height: contentHeight } }, h("slot", { name: "content" })))));
  }
  get host() { return getElement(this); }
};
__decorate([
  Bind
], AcCollapse.prototype, "handleToggle", null);
AcCollapse.style = acCollapseCss;

export { AcCollapse as ac_collapse };

//# sourceMappingURL=ac-collapse.entry.js.map