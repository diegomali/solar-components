'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const index_es = require('./index.es-323a182b.js');
const bind = require('./bind-c359decd.js');
const acFaIcon = require('./ac-fa-icon-fc0da5da.js');

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
    index.registerInstance(this, hostRef);
    this.toggle = index.createEvent(this, "toggle", 7);
    this.collapseContent = createElementRef();
    this.expanded = undefined;
  }
  async handleToggle() {
    this.expanded = !this.expanded;
    this.toggle.emit({ expanded: this.expanded });
  }
  render() {
    const icon = this.expanded ? index_es.faChevronUp : index_es.faChevronDown;
    // @TODO: Review animation util usage.
    const contentHeight = (this.expanded ? this.collapseContent.nativeElement.children[0].clientHeight : 0) + 'px';
    return (index.h(index.Host, { class: {
        'ac-collapse--expanded': this.expanded,
      } }, index.h("ac-card", { class: "ac-collapse__card" }, index.h("div", { class: "ac-collapse__header" }, index.h("div", { class: "ac-collapse__header-wrapper" }, index.h("slot", { name: "header" })), index.h("ac-button", { class: "ac-collapse__toggle-button", shape: "round", fill: "clear", theme: "primary", onClick: this.handleToggle, "icon-only": true }, index.h(acFaIcon.AcFaIcon, { icon: icon }))), index.h("div", { class: "ac-collapse__content", ref: this.collapseContent, style: { height: contentHeight } }, index.h("slot", { name: "content" })))));
  }
  get host() { return index.getElement(this); }
};
__decorate([
  bind.Bind
], AcCollapse.prototype, "handleToggle", null);
AcCollapse.style = acCollapseCss;

exports.ac_collapse = AcCollapse;

//# sourceMappingURL=ac-collapse.cjs.entry.js.map