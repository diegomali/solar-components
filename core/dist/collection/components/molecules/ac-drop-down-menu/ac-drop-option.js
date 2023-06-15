import { Host, h } from '@stencil/core';
export class AcDropOption {
  constructor() {
    this.label = undefined;
    this.value = undefined;
    this.image = undefined;
    this.imageDescription = undefined;
    this.selected = false;
  }
  render() {
    return (h(Host, { class: {
        'ac-list__item': true,
        'ac-drop-down-menu__option': true,
        'ac-drop-down-menu__option--selected': this.selected
      } }, h("span", null, this.image && h("img", { src: this.image, alt: this.imageDescription }), h("slot", { name: "image" })), h("span", { class: "ac-drop-option__label" }, this.label, h("slot", { name: "label" }))));
  }
  static get is() { return "ac-drop-option"; }
  static get originalStyleUrls() {
    return {
      "$": ["./ac-drop-option.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-drop-option.css"]
    };
  }
  static get properties() {
    return {
      "label": {
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
          "text": "Label to be display."
        },
        "attribute": "label",
        "reflect": false
      },
      "value": {
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
          "text": "Value of the option."
        },
        "attribute": "value",
        "reflect": true
      },
      "image": {
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
          "text": "Image to be display in the left."
        },
        "attribute": "image",
        "reflect": true
      },
      "imageDescription": {
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
          "text": "(Optional) Image description."
        },
        "attribute": "image-description",
        "reflect": true
      },
      "selected": {
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
          "text": "Flag that mark the selected option."
        },
        "attribute": "selected",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=ac-drop-option.js.map
