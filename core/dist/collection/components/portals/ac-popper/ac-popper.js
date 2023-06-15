import { h } from '@stencil/core';
import { PopperBehavior } from '../../../behaviors/popper-behavior';
import { PortalBehavior } from '../../../behaviors/portal-behavior';
import { TransitionBehavior } from '../../../behaviors/transition-behavior';
export class AcPopper {
  constructor() {
    this.portalBehavior = new PortalBehavior(this);
    this.transitionBehavior = new TransitionBehavior(this);
    this.popperBehavior = new PopperBehavior(this);
    this.vchildren = undefined;
    this.popperPivot = undefined;
    this.popperPlacement = undefined;
    this.popperOptions = undefined;
  }
  componentWillLoad() { }
  disconnectedCallback() { }
  render() {
    return [
      h("slot", null)
    ];
  }
  static get is() { return "ac-popper"; }
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
      "popperPivot": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | HTMLElement",
          "resolved": "HTMLElement | string",
          "references": {
            "HTMLElement": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Pivot element used to place the popper."
        },
        "attribute": "popper-pivot",
        "reflect": false
      },
      "popperPlacement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Placement",
          "resolved": "\"auto\" | \"auto-end\" | \"auto-start\" | \"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
          "references": {
            "Placement": {
              "location": "import",
              "path": "popper.js"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Popper.js's placement."
        },
        "attribute": "popper-placement",
        "reflect": false
      },
      "popperOptions": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "PopperOptions",
          "resolved": "PopperOptions",
          "references": {
            "PopperOptions": {
              "location": "import",
              "path": "popper.js"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Popper.js's options."
        }
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=ac-popper.js.map
