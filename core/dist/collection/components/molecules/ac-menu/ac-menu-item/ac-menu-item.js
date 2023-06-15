var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Host, h } from '@stencil/core';
import { Bind } from '../../../../utils/lang/bind';
import { AcFaIcon } from '../../../utils/ac-fa-icon';
export class AcMenu {
  constructor() {
    this.iconOnly = undefined;
    this.active = undefined;
    this.disabled = undefined;
    this.hidden = undefined;
    this.submenu = undefined;
    this.collapsed = undefined;
    this.href = undefined;
  }
  handleClick() {
    if (this.submenu) {
      this.collapsed = !this.collapsed;
    }
  }
  render() {
    return (h(Host, { class: {
        'ac-menu-item--active': this.active,
        'ac-menu-item--icon-only': this.iconOnly,
        'ac-menu-item--collapsed': this.collapsed,
        'ac-menu-item--hidden': this.hidden,
      } }, h("a", { class: "ac-menu-item__native", href: this.href, onClick: this.handleClick }, h("span", { class: "ac-menu-item__icon-start" }, h("slot", { name: "icon-start" })), h("span", { class: "ac-menu-item__text" }, h("slot", null)), this.submenu && h(AcFaIcon, { icon: faCaretDown, class: "ac-menu-item__submenu-icon", size: 12 })), h("div", { class: "ac-menu-item__submenu" }, h("slot", { name: "submenu" }))));
  }
  static get is() { return "ac-menu-item"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-menu-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-menu-item.css"]
    };
  }
  static get properties() {
    return {
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
          "text": ""
        },
        "attribute": "icon-only",
        "reflect": false
      },
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
          "text": ""
        },
        "attribute": "active",
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "disabled",
        "reflect": false
      },
      "hidden": {
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
        "attribute": "hidden",
        "reflect": false
      },
      "submenu": {
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
        "attribute": "submenu",
        "reflect": false
      },
      "collapsed": {
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
        "attribute": "collapsed",
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
      }
    };
  }
}
__decorate([
  Bind
], AcMenu.prototype, "handleClick", null);
//# sourceMappingURL=ac-menu-item.js.map
