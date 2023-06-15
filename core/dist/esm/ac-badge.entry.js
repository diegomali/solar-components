import { r as registerInstance, h, H as Host } from './index-253b3ca9.js';

const acBadgeCss = "ac-badge{display:flex;align-items:center;justify-content:center;min-width:16px;height:16px;border-radius:100px;font-size:10px;font-weight:bold}ac-badge.ac-badge--floating{position:absolute;z-index:2;right:0;bottom:0}ac-badge.ac-badge--success{background-color:rgba(var(--color-success-normal-rgb, 20, 200, 110), 0.2)}ac-badge.ac-badge--success .ac-badge__native{color:var(--color-success-normal, #14C86E)}ac-badge.ac-badge--warning{background-color:rgba(var(--color-warning-normal-rgb, 249, 192, 93), 0.2)}ac-badge.ac-badge--warning .ac-badge__native{color:var(--color-warning-normal, #f9c05d)}ac-badge.ac-badge--alert{background-color:rgba(var(--color-alert-normal-rgb, 240, 0, 10), 0.2)}ac-badge.ac-badge--alert .ac-badge__native{color:var(--color-alert-normal, #F0000A)}ac-badge.ac-badge--info{background-color:rgba(var(--color-info-normal-rgb, 0, 180, 240), 0.2)}ac-badge.ac-badge--info .ac-badge__native{color:var(--color-info-normal, #00B4F0)}";

const AcBadge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.theme = undefined;
    this.floating = undefined;
  }
  render() {
    return (h(Host, { class: {
        [`ac-badge--${this.theme}`]: this.theme !== undefined,
        'ac-badge--floating': this.floating,
      } }, h("a", { class: "ac-badge__native" }, h("slot", null))));
  }
};
AcBadge.style = acBadgeCss;

export { AcBadge as ac_badge };

//# sourceMappingURL=ac-badge.entry.js.map