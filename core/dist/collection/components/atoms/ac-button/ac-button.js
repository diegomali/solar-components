import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Host, h } from '@stencil/core';
import { AcFaIcon } from '../../utils/ac-fa-icon';
/**
 * Accera's full-featured button web-component.
 */
export class AcButton {
  constructor() {
    this.type = 'button';
    this.theme = undefined;
    this.size = undefined;
    this.fill = 'solid';
    this.expand = undefined;
    this.shape = undefined;
    this.href = undefined;
    this.target = undefined;
    this.iconOnly = undefined;
    this.loading = undefined;
    this.disabled = undefined;
  }
  render() {
    const TagType = this.href ? 'a' : 'button';
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : { href: this.href, target: this.target };
    return (
    // @ts-ignore
    h(Host, { class: {
        [`ac-button--${this.theme}`]: this.theme !== undefined,
        [`ac-button--${this.size}`]: this.size !== undefined,
        [`ac-button--${this.fill}`]: this.fill !== undefined,
        [`ac-button--${this.expand}`]: this.expand !== undefined,
        [`ac-button--${this.shape}`]: this.shape !== undefined,
        'ac-button--icon-only': this.iconOnly,
        'ac-button--disabled': this.disabled,
        'ac-button--loading': this.loading,
      } }, h(TagType, Object.assign({}, attrs, { disabled: this.disabled, class: "ac-button__native" }), this.loading && h(AcFaIcon, { icon: faSpinner, size: 14, anim: "spin", style: { width: '14px' } }), h("slot", { name: "icon-start" }), h("span", { class: "ac-button__text" }, h("slot", null)), h("slot", { name: "icon-end" }))));
  }
  static get is() { return "ac-button"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-button.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'button' | 'submit' | 'reset'",
          "resolved": "\"button\" | \"reset\" | \"submit\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The HTML5 button type.\r\nSee https://mdn.io/button"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
      },
      "theme": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The theme color defined in the color palette. The default is white."
        },
        "attribute": "theme",
        "reflect": false
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'large'",
          "resolved": "\"large\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The size of the button."
        },
        "attribute": "size",
        "reflect": false
      },
      "fill": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'clear' | 'solid' | 'flat'",
          "resolved": "\"clear\" | \"flat\" | \"solid\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Fill mode:\r\n* flat - No borders and no raising\r\n* solid - Raised button, default\r\n* clear - No background and borders"
        },
        "attribute": "fill",
        "reflect": false,
        "defaultValue": "'solid'"
      },
      "expand": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'block' | undefined",
          "resolved": "\"block\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Button width."
        },
        "attribute": "expand",
        "reflect": false
      },
      "shape": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'round' | undefined",
          "resolved": "\"round\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Button shape."
        },
        "attribute": "shape",
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "An optional link to open when click on it.\r\nTurns the button into a anchor element."
        },
        "attribute": "href",
        "reflect": false
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'_blank' | '_self' | '_parent' | '_top' | string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The HTML5 native anchor target to handle the href property."
        },
        "attribute": "target",
        "reflect": false
      },
      "iconOnly": {
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
          "text": "Icon only mode, with a square button, centered icon."
        },
        "attribute": "icon-only",
        "reflect": false
      },
      "loading": {
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
          "text": "Set the loading mode, showing a loading icon."
        },
        "attribute": "loading",
        "reflect": false
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The HTML5 native disable prop."
        },
        "attribute": "disabled",
        "reflect": true
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=ac-button.js.map
