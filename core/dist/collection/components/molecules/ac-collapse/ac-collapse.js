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
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Host, h } from '@stencil/core';
import { Bind } from '../../../utils/lang/bind';
import { createElementRef } from '../../../utils/stencil/create-element-ref';
import { AcFaIcon } from '../../utils/ac-fa-icon';
export class AcCollapse {
  constructor() {
    this.collapseContent = createElementRef();
    this.expanded = undefined;
  }
  async handleToggle() {
    this.expanded = !this.expanded;
    this.toggle.emit({ expanded: this.expanded });
  }
  render() {
    const icon = this.expanded ? faChevronUp : faChevronDown;
    // @TODO: Review animation util usage.
    const contentHeight = (this.expanded ? this.collapseContent.nativeElement.children[0].clientHeight : 0) + 'px';
    return (h(Host, { class: {
        'ac-collapse--expanded': this.expanded,
      } }, h("ac-card", { class: "ac-collapse__card" }, h("div", { class: "ac-collapse__header" }, h("div", { class: "ac-collapse__header-wrapper" }, h("slot", { name: "header" })), h("ac-button", { class: "ac-collapse__toggle-button", shape: "round", fill: "clear", theme: "primary", onClick: this.handleToggle, "icon-only": true }, h(AcFaIcon, { icon: icon }))), h("div", { class: "ac-collapse__content", ref: this.collapseContent, style: { height: contentHeight } }, h("slot", { name: "content" })))));
  }
  static get is() { return "ac-collapse"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-collapse.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-collapse.css"]
    };
  }
  static get properties() {
    return {
      "expanded": {
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
        "attribute": "expanded",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "toggle",
        "name": "toggle",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{ expanded: boolean }",
          "resolved": "{ expanded: boolean; }",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
}
__decorate([
  Bind
], AcCollapse.prototype, "handleToggle", null);
//# sourceMappingURL=ac-collapse.js.map
