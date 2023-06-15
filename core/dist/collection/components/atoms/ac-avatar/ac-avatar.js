import { Host, h } from '@stencil/core';
export class AcAvatar {
  constructor() {
    this.mode = undefined;
    this.image = undefined;
    this.title = undefined;
    this.subtitle = undefined;
    this.href = undefined;
    this.target = undefined;
  }
  render() {
    return (h(Host, { class: {
        [`ac-badge--${this.mode}`]: this.mode !== undefined,
      } }, h("a", { class: "ac-avatar__native", href: this.href, target: this.target }, h("div", { class: "ac-avatar__image", style: { backgroundImage: `url(${this.image})` } }), h("div", { class: "ac-avatar__text" }, h("span", { class: "ac-avatar__title" }, this.title), h("span", { class: "ac-avatar__subtitle" }, this.subtitle)))));
  }
  static get is() { return "ac-avatar"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-avatar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-avatar.css"]
    };
  }
  static get properties() {
    return {
      "mode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'list-item' | undefined",
          "resolved": "\"list-item\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "mode",
        "reflect": false
      },
      "image": {
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
        "attribute": "image",
        "reflect": false
      },
      "title": {
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
        "attribute": "title",
        "reflect": false
      },
      "subtitle": {
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
        "attribute": "subtitle",
        "reflect": false
      },
      "href": {
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
        "attribute": "href",
        "reflect": false
      },
      "target": {
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
        "attribute": "target",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=ac-avatar.js.map
