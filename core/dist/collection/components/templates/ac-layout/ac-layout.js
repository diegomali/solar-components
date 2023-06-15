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
import { FocusBehavior } from '../../../behaviors/focus-behavior';
import { Bind } from '../../../utils/lang/bind';
/**
 * Accera's layout webcomponent.
 */
export class AcLayout {
  constructor() {
    this.focusBehavior = new FocusBehavior(this);
    this.collapsed = undefined;
  }
  collapsedDidUpdate() {
    this.hasFocus = !!this.collapsed;
  }
  componentDidLoad() {
    this.focusTarget = this.host.querySelector('.ac-layout__nav-left-container ac-navdrawer');
  }
  disconnectedCallback() {
  }
  whenBlur(element) {
    console.log(element, element.dataset);
    if (!element.dataset.navdrawer && this.collapsed) {
      this.collapsed = null;
    }
  }
  handleContentScroll() {
    this.contentScroll.emit({ top: this.contentElt.scrollTop, left: this.contentElt.scrollLeft });
  }
  render() {
    return (h(Host, { class: {
        [`ac-layout--${this.collapsed}-collapsed`]: !!this.collapsed,
      } }, h("div", { class: "ac-layout__nav-left-container" }, h("slot", { name: "nav-left" })), h("div", { class: "ac-layout__content-container" }, h("slot", { name: "header" }), h("div", { ref: contentElt => this.contentElt = contentElt, class: "ac-layout__content-scroll", onScroll: this.handleContentScroll }, h("slot", { name: "content" })))));
  }
  static get is() { return "ac-layout"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-layout.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-layout.css"]
    };
  }
  static get properties() {
    return {
      "collapsed": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "'nav-left'",
          "resolved": "\"nav-left\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Collapse a nav drawer."
        },
        "attribute": "collapsed",
        "reflect": true
      }
    };
  }
  static get events() {
    return [{
        "method": "contentScroll",
        "name": "contentScroll",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{ top: number, left: number }",
          "resolved": "{ top: number; left: number; }",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "collapsed",
        "methodName": "collapsedDidUpdate"
      }];
  }
  static get listeners() {
    return [{
        "name": "resize",
        "method": "handleContentScroll",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}
__decorate([
  Bind
], AcLayout.prototype, "handleContentScroll", null);
//# sourceMappingURL=ac-layout.js.map
