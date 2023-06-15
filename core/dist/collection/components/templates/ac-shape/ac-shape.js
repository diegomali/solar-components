import { h } from '@stencil/core';
import { AcNeogridShape } from '../../utils/ac-neogrid-shape';
/**
 * Accera's Shape Page webcomponent.
 */
export class Acshape {
  render() {
    return [
      h("slot", { name: "background" }),
      h(AcNeogridShape, { class: "ac-shape__background" }),
      h("div", { class: "ac-shape__wrapper" }, h("div", { class: "ac-shape__container" }, h("div", { class: "ac-shape__header" }, h("slot", { name: "header" })), h("div", { class: "ac-shape__content" }, h("slot", { name: "content" })), h("div", { class: "ac-shape__footer" }, h("slot", { name: "footer" }))))
    ];
  }
  static get is() { return "ac-shape"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-shape.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-shape.css"]
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=ac-shape.js.map
