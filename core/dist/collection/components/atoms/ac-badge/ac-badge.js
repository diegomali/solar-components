import { Host, h } from '@stencil/core';
export class AcBadge {
  constructor() {
    this.theme = undefined;
    this.floating = undefined;
  }
  render() {
    return (h(Host, { class: {
        [`ac-badge--${this.theme}`]: this.theme !== undefined,
        'ac-badge--floating': this.floating,
      } }, h("a", { class: "ac-badge__native" }, h("slot", null))));
  }
  static get is() { return "ac-badge"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-badge.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-badge.css"]
    };
  }
  static get properties() {
    return {
      "theme": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'alert' | 'warning' | 'success' | 'info'",
          "resolved": "\"alert\" | \"info\" | \"success\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "theme",
        "reflect": false
      },
      "floating": {
        "type": "boolean",
        "mutable": false,
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
        "attribute": "floating",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=ac-badge.js.map
