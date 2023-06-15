'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const acNeogridShape = require('./ac-neogrid-shape-8e9edd26.js');

const acLoginCss = "ac-login{display:block;position:relative;min-width:100%;min-height:100vh;overflow:hidden}ac-login .ac-login__background-image{position:absolute;z-index:-1;width:100%;height:100%;background-repeat:no-repeat;background-size:cover}ac-login .ac-login__background{position:absolute;z-index:-1;top:-275px;left:-175px;width:1050px;height:1050px;fill:#FFFFFF}ac-login .ac-login__wrapper{display:flex;flex-direction:column;align-items:center;width:760px;max-width:100vw;min-height:100vh}ac-login .ac-login__wrapper .ac-login__container{display:flex;flex-direction:column;align-items:initial;justify-content:space-between;min-width:298px;height:700px;padding:80px 0}@media (max-width: 576px){ac-login .ac-login__background{top:10%;left:-100%;width:250%;height:250%}ac-login .ac-login__wrapper{justify-content:flex-end}ac-login .ac-login__wrapper .ac-login__container{align-items:center;width:100vw;min-height:100vh;padding:16px}ac-login .ac-login__wrapper .ac-login__container .ac-login__content{min-width:298px}ac-login .ac-login__wrapper .ac-login__container .ac-login__header,ac-login .ac-login__wrapper .ac-login__container .ac-login__footer{min-width:100%}}";

const AcLayout = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.backgroundImageSrc = undefined;
  }
  render() {
    const backgroundImageStyle = {
      backgroundImage: `url(${this.backgroundImageSrc})`
    };
    return [
      index.h("div", { class: "ac-login__background-image", style: backgroundImageStyle }),
      index.h(acNeogridShape.AcNeogridShape, { class: "ac-login__background" }),
      index.h("div", { class: "ac-login__wrapper" }, index.h("div", { class: "ac-login__container" }, index.h("div", { class: "ac-login__header" }, index.h("slot", { name: "header" })), index.h("div", { class: "ac-login__content" }, index.h("slot", { name: "content" })), index.h("div", { class: "ac-login__footer" }, index.h("slot", { name: "footer" }))))
    ];
  }
  get host() { return index.getElement(this); }
};
AcLayout.style = acLoginCss;

exports.ac_login = AcLayout;

//# sourceMappingURL=ac-login.cjs.entry.js.map