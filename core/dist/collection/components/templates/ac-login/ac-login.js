import { h } from '@stencil/core';
import { AcNeogridShape } from "../../utils/ac-neogrid-shape";
/**
 * Accera's Login Page webcomponent.
 */
export class AcLayout {
  constructor() {
    this.backgroundImageSrc = undefined;
  }
  render() {
    const backgroundImageStyle = {
      backgroundImage: `url(${this.backgroundImageSrc})`
    };
    return [
      h("div", { class: "ac-login__background-image", style: backgroundImageStyle }),
      h(AcNeogridShape, { class: "ac-login__background" }),
      h("div", { class: "ac-login__wrapper" }, h("div", { class: "ac-login__container" }, h("div", { class: "ac-login__header" }, h("slot", { name: "header" })), h("div", { class: "ac-login__content" }, h("slot", { name: "content" })), h("div", { class: "ac-login__footer" }, h("slot", { name: "footer" }))))
    ];
  }
  static get is() { return "ac-login"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-login.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-login.css"]
    };
  }
  static get properties() {
    return {
      "backgroundImageSrc": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "background-image-src",
        "reflect": false
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=ac-login.js.map
