'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const acNeogridShape = require('./ac-neogrid-shape-8e9edd26.js');

const acShapeCss = "ac-shape{display:block;position:relative;min-width:100%;min-height:100vh;overflow:hidden}ac-shape [slot=background]{position:absolute;z-index:-1;width:100%;height:100%}ac-shape .ac-shape__background{position:absolute;z-index:-1;top:-275px;left:-175px;width:1050px;height:1050px;fill:#FFFFFF}ac-shape .ac-shape__wrapper{display:flex;flex-direction:column;align-items:center;width:760px;max-width:100vw;min-height:100vh}ac-shape .ac-shape__wrapper .ac-shape__container{display:flex;flex-direction:column;align-items:initial;justify-content:space-between;min-width:298px;height:700px;padding:80px 0}@media (max-width: 576px){ac-shape .ac-shape__background{top:10%;left:-100%;width:250%}ac-shape .ac-shape__wrapper{justify-content:flex-end}ac-shape .ac-shape__wrapper .ac-shape__container{align-items:center;width:100vw;min-height:100vh;padding:16px}ac-shape .ac-shape__wrapper .ac-shape__container .ac-shape__content{min-width:298px}ac-shape .ac-shape__wrapper .ac-shape__container .ac-shape__header,ac-shape .ac-shape__wrapper .ac-shape__container .ac-shape__footer{min-width:100%}}";

const Acshape = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("slot", { name: "background" }),
      index.h(acNeogridShape.AcNeogridShape, { class: "ac-shape__background" }),
      index.h("div", { class: "ac-shape__wrapper" }, index.h("div", { class: "ac-shape__container" }, index.h("div", { class: "ac-shape__header" }, index.h("slot", { name: "header" })), index.h("div", { class: "ac-shape__content" }, index.h("slot", { name: "content" })), index.h("div", { class: "ac-shape__footer" }, index.h("slot", { name: "footer" }))))
    ];
  }
  get host() { return index.getElement(this); }
};
Acshape.style = acShapeCss;

exports.ac_shape = Acshape;

//# sourceMappingURL=ac-shape.cjs.entry.js.map