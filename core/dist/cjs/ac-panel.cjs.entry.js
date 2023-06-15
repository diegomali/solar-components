'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const transitionBehavior = require('./transition-behavior-4d199749.js');
require('./animation-2589982c.js');
require('./component-behavior-ab8d7c53.js');

const acPanelCss = "ac-panel{display:block;box-sizing:border-box;flex-direction:column;width:100%;transform-origin:0 0;transition:opacity ease-in-out 0.1s, transform ease-in-out 0.1s;border:1px solid var(--color-neutral-light, #E6E6E6);border-radius:4px;background:var(--color-neutral-contrast, #FFFFFF);box-shadow:0 16px 32px rgba(0, 0, 0, 0.08)}ac-panel.transition--before-enter{transform:translateY(-10px) scaleY(0.5);opacity:0}ac-panel.transition--before-leave{transform:translateY(-10px) scaleY(0.5);opacity:0}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){ac-panel.transition--before-enter{transform:none;opacity:1}}";

const AcPanel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.closeEv = index.createEvent(this, "close", 7);
    this.transitionBehavior = new transitionBehavior.TransitionBehavior(this);
  }
  componentWillLoad() { }
  disconnectedCallback() {
    this.closeEv.emit();
  }
  render() {
    return [
      index.h("slot", { name: "item-top" }),
      index.h("slot", null),
      index.h("slot", { name: "item-bottom" })
    ];
  }
  get host() { return index.getElement(this); }
};
AcPanel.style = acPanelCss;

exports.ac_panel = AcPanel;

//# sourceMappingURL=ac-panel.cjs.entry.js.map