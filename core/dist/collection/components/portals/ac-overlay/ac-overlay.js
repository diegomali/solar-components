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
import { PortalBehavior } from '../../../behaviors/portal-behavior';
import { TransitionBehavior } from '../../../behaviors/transition-behavior';
import { Bind } from '../../../utils/lang/bind';
/**
 * Accera's Panel webcomponent used as a menu.
 */
export class AcOverlay {
  constructor() {
    this.portalBehavior = new PortalBehavior(this);
    this.transitionBehavior = new TransitionBehavior(this);
    this.vchildren = undefined;
    this.backdrop = 'dark';
    this.noLayer = undefined;
    this.position = 'center center';
    this.disableClose = undefined;
  }
  componentWillLoad() {
  }
  disconnectedCallback() {
  }
  async handleBackDropClick() {
    this.backDropClick.emit();
  }
  render() {
    return (h(Host, { class: {
        [`ac-overlay--backdrop-${this.backdrop}`]: !!this.backdrop,
        'ac-overlay--no-layer': this.noLayer,
      }, style: {
        justifyContent: this.position.split(' ')[0],
        alignItems: this.position.split(' ')[1],
      } }, !this.noLayer && h("div", { class: "ac-overlay--layer", onClick: this.handleBackDropClick }), h("slot", null)));
  }
  static get is() { return "ac-overlay"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-overlay.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-overlay.css"]
    };
  }
  static get properties() {
    return {
      "vchildren": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Used to pass the custom children to the portal."
        },
        "attribute": "vchildren",
        "reflect": false
      },
      "backdrop": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'dark' | 'light'",
          "resolved": "\"dark\" | \"light\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The backdrop theme."
        },
        "attribute": "backdrop",
        "reflect": false,
        "defaultValue": "'dark'"
      },
      "noLayer": {
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
        "attribute": "no-layer",
        "reflect": false
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'start start' | 'start center' | 'start flex-end' |\r\n    'center start' | 'center center' | 'center flex-end' |\r\n    'flex-end start' | 'flex-end center' | 'flex-end flex-end'",
          "resolved": "\"center center\" | \"center flex-end\" | \"center start\" | \"flex-end center\" | \"flex-end flex-end\" | \"flex-end start\" | \"start center\" | \"start flex-end\" | \"start start\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Content position based on flex layout."
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'center center'"
      },
      "disableClose": {
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
        "attribute": "disable-close",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "backDropClick",
        "name": "backDropClick",
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
      "handleBackDropClick": {
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
], AcOverlay.prototype, "handleBackDropClick", null);
//# sourceMappingURL=ac-overlay.js.map
