import { Host, h } from '@stencil/core';
export class AcProgress {
  constructor() {
    this.theme = 'primary';
    this.percent = undefined;
  }
  render() {
    return (h(Host, { class: {
        [`ac-progress--${this.theme}`]: !!this.theme
      } }, h("div", { class: "ac-progress__meter", style: {
        width: this.percent + '%',
      } })));
  }
  static get is() { return "ac-progress"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-progress.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-progress.css"]
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
          "text": "Set the theme color."
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
          "text": "Set the bar's percentage."
        },
        "attribute": "percent",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=ac-progress.js.map
