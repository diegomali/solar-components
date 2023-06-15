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
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Host, h } from '@stencil/core';
import { TransitionBehavior } from '../../../behaviors/transition-behavior';
import { Bind } from '../../../utils/lang/bind';
import { AcFaIcon } from '../../utils/ac-fa-icon';
import { AcNeogridShape } from '../../utils/ac-neogrid-shape';
export class AcToast {
  constructor() {
    this.transitionBehavior = new TransitionBehavior(this);
    this.type = undefined;
    this.title = undefined;
    this.message = undefined;
  }
  componentWillLoad() {
  }
  disconnectedCallback() {
    this.closeEv.emit();
  }
  async close() {
    this.host.remove();
  }
  render() {
    return (h(Host, { class: {
        [`ac-toast--${this.type}`]: this.type !== undefined,
      } }, h("header", { class: "ac-toast__header" }, h("h3", { class: "ac-toast_header-title" }, this.title), h(AcFaIcon, { class: "ac-toast__header-icon", icon: faTimes, onClick: this.close }), h(AcNeogridShape, { onClick: this.close, class: "ac-toast__header-bg" })), h("section", { class: "ac-toast__content" }, h("span", { class: "ac-toast__content-text" }, this.message))));
  }
  static get is() { return "ac-toast"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-toast.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-toast.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'alert' | 'success' | 'info' | 'warning'",
          "resolved": "\"alert\" | \"info\" | \"success\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type",
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
      "message": {
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
        "attribute": "message",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "closeEv",
        "name": "close",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "close": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "host"; }
}
__decorate([
  Bind
], AcToast.prototype, "close", null);
//# sourceMappingURL=ac-toast.js.map
