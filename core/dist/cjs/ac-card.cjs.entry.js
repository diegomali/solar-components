'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');

const acCardCss = "ac-card{display:flex;border:1px solid var(--color-neutral-light, #E6E6E6);border-radius:4px;background:var(--color-neutral-contrast, #FFFFFF);box-shadow:0 8px 16px rgba(0, 0, 0, 0.08)}ac-card>[slot=icon-start]{padding-right:8px}ac-card .ac-card__wrapper{display:flex;flex-direction:column;width:100%}ac-card .ac-card__wrapper>[slot=header]{padding:24px 32px 16px}ac-card .ac-card__wrapper>[slot=content]{height:100%;padding:16px 32px 24px}ac-card .ac-card__wrapper>[slot=actions]{display:flex;justify-content:flex-end;padding:16px 32px 24px}ac-card .ac-card__wrapper>ac-tabs[slot=header]{padding:0 24px}ac-card.ac-card--compact{padding:16px}ac-card.ac-card--compact .ac-card__wrapper>[slot=header]{padding:0}ac-card.ac-card--compact .ac-card__wrapper>[slot=content]{height:100%;padding:0}ac-card.ac-card--compact .ac-card__wrapper>[slot=actions]{padding:0}ac-card.ac-card--info{--color-theme-contrast:var(--color-info-darker, #00688a);--color-theme-contrast-rgb:var(--color-info-darker-rgb,\n    0, 104, 138);border:1px solid var(--color-info-light, #24c8ff);background:var(--color-info-lighter, #57d5ff);color:var(--color-info-darker, #00688a)}ac-card.ac-card--success{--color-theme-contrast:var(--color-success-darker, #0b6b3b);--color-theme-contrast-rgb:var(--color-success-darker-rgb,\n    11, 107, 59);border:1px solid var(--color-success-light, #26e988);background:var(--color-success-lighter, #54eea1);color:var(--color-success-darker, #0b6b3b)}ac-card.ac-card--warning{--color-theme-contrast:var(--color-warning-darker, #e79609);--color-theme-contrast-rgb:var(--color-warning-darker-rgb,\n    231, 150, 9);border:1px solid var(--color-warning-light, #fbd38e);background:var(--color-warning-lighter, #fde6bf);color:var(--color-warning-darker, #e79609)}ac-card.ac-card--alert{--color-theme-contrast:var(--color-alert-darker, #8a0006);--color-theme-contrast-rgb:var(--color-alert-darker-rgb,\n    138, 0, 6);border:1px solid var(--color-alert-light, #ff242d);background:var(--color-alert-lighter, #ff575e);color:var(--color-alert-darker, #8a0006)}";

const AcCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.theme = undefined;
    this.compact = undefined;
  }
  render() {
    return (index.h(index.Host, { class: {
        [`ac-card--${this.theme}`]: this.theme !== undefined,
        'ac-card--compact': !!this.compact,
      } }, index.h("slot", { name: "icon-start" }), index.h("div", { class: "ac-card__wrapper" }, index.h("slot", { name: "header" }), index.h("slot", { name: "image" }), index.h("slot", { name: "content" }), index.h("slot", { name: "actions" }), index.h("slot", null))));
  }
};
AcCard.style = acCardCss;

exports.ac_card = AcCard;

//# sourceMappingURL=ac-card.cjs.entry.js.map