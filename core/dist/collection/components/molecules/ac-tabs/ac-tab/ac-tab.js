import { Host, h } from '@stencil/core';
/**
 * Accera's tab webcomponent. Used within AcTabs.
 */
export class AcTab {
  constructor() {
    this.active = undefined;
    this.compact = undefined;
  }
  render() {
    return (h(Host, { class: {
        'ac-tab--compact': this.compact
      } }, h("slot", null)));
  }
  static get is() { return "ac-tab"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-tab.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-tab.css"]
    };
  }
  static get properties() {
    return {
      "active": {
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
          "text": "If true, mark this tab as a selected tab."
        },
        "attribute": "active",
        "reflect": true
      },
      "compact": {
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
          "text": "Set this tab in compact mode."
        },
        "attribute": "compact",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=ac-tab.js.map
