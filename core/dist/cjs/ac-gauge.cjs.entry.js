'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const acNeogridShape = require('./ac-neogrid-shape-8e9edd26.js');

const acGaugeCss = "ac-gauge{display:inline-flex;position:relative;align-items:center;justify-content:center}ac-gauge .ac-gauge__meter{position:absolute;left:0;transform:rotate(180deg);transition:stroke-dashoffset ease-in-out 0.25s;stroke-dasharray:272%}ac-gauge .ac-gauge__meter path{transition:fill ease-in-out 0.25s, stroke ease-in-out 0.25s;stroke-width:100px;fill:none;stroke-miterlimit:10}ac-gauge .ac-gauge__bg path{transition:fill ease-in-out 0.25s, stroke ease-in-out 0.25s;stroke-width:100px;stroke-miterlimit:10}ac-gauge .ac-gauge__inner{position:absolute}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){ac-gauge{display:flex;flex-direction:column}ac-gauge .ac-gauge__meter{top:0}ac-gauge .ac-gauge__inner{top:40%;left:40%}}ac-gauge.ac-gauge--void .ac-gauge__meter path{stroke:var(--color-neutral-light, #E6E6E6) !important}ac-gauge.ac-gauge--void .ac-gauge__bg path{stroke:var(--color-neutral-light, #E6E6E6) !important;fill:var(--color-neutral-lighter, #F5F5F5) !important}ac-gauge.ac-gauge--void .ac-gauge__inner{color:var(--color-neutral-darker, #646464) !important}ac-gauge.ac-gauge--primary .ac-gauge__meter path{stroke:var(--color-primary-dark, #00263c)}ac-gauge.ac-gauge--primary .ac-gauge__bg path{stroke:var(--color-primary-light, #0066a2);fill:var(--color-primary-lighter, #0086d5)}ac-gauge.ac-gauge--primary .ac-gauge__inner{color:var(--color-primary-dark, #00263c);font-size:23px}ac-gauge.ac-gauge--secondary .ac-gauge__meter path{stroke:var(--color-secondary-dark, #bd0008)}ac-gauge.ac-gauge--secondary .ac-gauge__bg path{stroke:var(--color-secondary-light, #ff242d);fill:var(--color-secondary-lighter, #ff575e)}ac-gauge.ac-gauge--secondary .ac-gauge__inner{color:var(--color-secondary-dark, #bd0008);font-size:23px}";

const AcGauge = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.theme = 'primary';
    this.percent = undefined;
    this.size = undefined;
  }
  render() {
    const offset = 272 - (this.percent / 100) * 272;
    return (index.h(index.Host, { class: {
        [`ac-gauge--${this.theme}`]: this.theme !== undefined,
        'ac-gauge--void': !this.percent || this.percent === 0
      } }, index.h(acNeogridShape.AcNeogridShape, { class: "ac-gauge__meter", style: {
        strokeDashoffset: offset + '%',
        width: `${this.size ? this.size : 100}px`,
      } }), index.h(acNeogridShape.AcNeogridShape, { class: "ac-gauge__bg", style: { width: `${this.size ? this.size : 100}px` } }), index.h("div", { class: "ac-gauge__inner" }, index.h("slot", { name: "icon" }))));
  }
};
AcGauge.style = acGaugeCss;

exports.ac_gauge = AcGauge;

//# sourceMappingURL=ac-gauge.cjs.entry.js.map