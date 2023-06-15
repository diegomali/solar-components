import { r as registerInstance, c as createEvent, h, g as getElement } from './index-253b3ca9.js';
import { T as TransitionBehavior } from './transition-behavior-4856978d.js';
import './animation-ab8aa382.js';
import './component-behavior-12d14453.js';

const acPanelCss = "ac-panel{display:block;box-sizing:border-box;flex-direction:column;width:100%;transform-origin:0 0;transition:opacity ease-in-out 0.1s, transform ease-in-out 0.1s;border:1px solid var(--color-neutral-light, #E6E6E6);border-radius:4px;background:var(--color-neutral-contrast, #FFFFFF);box-shadow:0 16px 32px rgba(0, 0, 0, 0.08)}ac-panel.transition--before-enter{transform:translateY(-10px) scaleY(0.5);opacity:0}ac-panel.transition--before-leave{transform:translateY(-10px) scaleY(0.5);opacity:0}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){ac-panel.transition--before-enter{transform:none;opacity:1}}";

const AcPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeEv = createEvent(this, "close", 7);
    this.transitionBehavior = new TransitionBehavior(this);
  }
  componentWillLoad() { }
  disconnectedCallback() {
    this.closeEv.emit();
  }
  render() {
    return [
      h("slot", { name: "item-top" }),
      h("slot", null),
      h("slot", { name: "item-bottom" })
    ];
  }
  get host() { return getElement(this); }
};
AcPanel.style = acPanelCss;

export { AcPanel as ac_panel };

//# sourceMappingURL=ac-panel.entry.js.map