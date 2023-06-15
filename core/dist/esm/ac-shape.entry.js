import { r as registerInstance, h, g as getElement } from './index-253b3ca9.js';
import { A as AcNeogridShape } from './ac-neogrid-shape-c20c52ff.js';

const acShapeCss = "ac-shape{display:block;position:relative;min-width:100%;min-height:100vh;overflow:hidden}ac-shape [slot=background]{position:absolute;z-index:-1;width:100%;height:100%}ac-shape .ac-shape__background{position:absolute;z-index:-1;top:-275px;left:-175px;width:1050px;height:1050px;fill:#FFFFFF}ac-shape .ac-shape__wrapper{display:flex;flex-direction:column;align-items:center;width:760px;max-width:100vw;min-height:100vh}ac-shape .ac-shape__wrapper .ac-shape__container{display:flex;flex-direction:column;align-items:initial;justify-content:space-between;min-width:298px;height:700px;padding:80px 0}@media (max-width: 576px){ac-shape .ac-shape__background{top:10%;left:-100%;width:250%}ac-shape .ac-shape__wrapper{justify-content:flex-end}ac-shape .ac-shape__wrapper .ac-shape__container{align-items:center;width:100vw;min-height:100vh;padding:16px}ac-shape .ac-shape__wrapper .ac-shape__container .ac-shape__content{min-width:298px}ac-shape .ac-shape__wrapper .ac-shape__container .ac-shape__header,ac-shape .ac-shape__wrapper .ac-shape__container .ac-shape__footer{min-width:100%}}";

const Acshape = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("slot", { name: "background" }),
      h(AcNeogridShape, { class: "ac-shape__background" }),
      h("div", { class: "ac-shape__wrapper" }, h("div", { class: "ac-shape__container" }, h("div", { class: "ac-shape__header" }, h("slot", { name: "header" })), h("div", { class: "ac-shape__content" }, h("slot", { name: "content" })), h("div", { class: "ac-shape__footer" }, h("slot", { name: "footer" }))))
    ];
  }
  get host() { return getElement(this); }
};
Acshape.style = acShapeCss;

export { Acshape as ac_shape };

//# sourceMappingURL=ac-shape.entry.js.map