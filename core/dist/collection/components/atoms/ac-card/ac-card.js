import { Host, h } from '@stencil/core';
/**
 * Accera's full-featured FontAwesome SVG Icon web-component.
 */
export class AcCard {
  constructor() {
    this.theme = undefined;
    this.compact = undefined;
  }
  render() {
    return (h(Host, { class: {
        [`ac-card--${this.theme}`]: this.theme !== undefined,
        'ac-card--compact': !!this.compact,
      } }, h("slot", { name: "icon-start" }), h("div", { class: "ac-card__wrapper" }, h("slot", { name: "header" }), h("slot", { name: "image" }), h("slot", { name: "content" }), h("slot", { name: "actions" }), h("slot", null))));
  }
  static get is() { return "ac-card"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-card.css"]
    };
  }
  static get properties() {
    return {
      "theme": {
        "type": "string",
        "mutable": true,
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
        "reflect": true
      },
      "compact": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "compact",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=ac-card.js.map
