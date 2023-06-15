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
import { Host, h } from '@stencil/core';
import { Bind } from '../../../utils/lang/bind';
import { AcMenuIcon } from '../../utils/ac-menu-icon';
/**
 * Accera's header web-component.
 */
export class AcHeader {
  constructor() {
    this.theme = 'primary';
    this.scrolled = undefined;
    this.hasNavdrawer = undefined;
  }
  componentDidLoad() {
    // @TODO: Use dependency injection.
    const parentLayout = this.host.parentElement.tagName === 'AC-LAYOUT' ?
      this.host.parentElement :
      this.host.parentElement.parentElement.tagName === 'AC-LAYOUT' ? this.host.parentElement.parentElement : null;
    if (parentLayout) {
      this.parentLayout = parentLayout;
      this.hasNavdrawer = !!this.parentLayout.querySelector('ac-navdrawer');
    }
  }
  handleLayoutContentScroll(ev) {
    this.scrolled = ev.detail.top > 0;
  }
  handleMenuClick() {
    this.parentLayout.collapsed = 'nav-left';
  }
  render() {
    return (h(Host, { class: {
        [`ac-header--${this.theme}`]: this.theme !== undefined,
        'ac-header--scrolled': this.scrolled
      } }, h("header", { class: "ac-header__header-container" }, this.hasNavdrawer ?
      h("ac-button", { class: "ac-header__menu-button", shape: "round", fill: "clear", "data-toggle": "mainNavdrawer", "icon-only": true, onClick: this.handleMenuClick }, h(AcMenuIcon, null))
      : h("span", null), h("div", { class: "ac-header__content" }, h("slot", null)), h("div", { class: "ac-header__actions" }, h("slot", { name: "actions" }))), h("slot", { name: "sub-header" })));
  }
  static get is() { return "ac-header"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-header.css"]
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
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "scrolled": {
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
        "attribute": "scrolled",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "hasNavdrawer": {}
    };
  }
  static get elementRef() { return "host"; }
  static get listeners() {
    return [{
        "name": "contentScroll",
        "method": "handleLayoutContentScroll",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Bind
], AcHeader.prototype, "handleMenuClick", null);
//# sourceMappingURL=ac-header.js.map
