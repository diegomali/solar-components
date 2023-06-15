import { Host, h } from '@stencil/core';
import { AcNeogridShape } from '../../utils/ac-neogrid-shape';
export class AcGauge {
  constructor() {
    this.theme = 'primary';
    this.percent = undefined;
    this.size = undefined;
  }
  render() {
    const offset = 272 - (this.percent / 100) * 272;
    return (h(Host, { class: {
        [`ac-gauge--${this.theme}`]: this.theme !== undefined,
        'ac-gauge--void': !this.percent || this.percent === 0
      } }, h(AcNeogridShape, { class: "ac-gauge__meter", style: {
        strokeDashoffset: offset + '%',
        width: `${this.size ? this.size : 100}px`,
      } }), h(AcNeogridShape, { class: "ac-gauge__bg", style: { width: `${this.size ? this.size : 100}px` } }), h("div", { class: "ac-gauge__inner" }, h("slot", { name: "icon" }))));
  }
  static get is() { return "ac-gauge"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-gauge.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-gauge.css"]
    };
  }
  static get properties() {
    return {
      "theme": {
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
        "attribute": "theme",
        "reflect": true,
        "defaultValue": "'primary'"
      },
      "percent": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "percent",
        "reflect": true
      },
      "size": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=ac-gauge.js.map
