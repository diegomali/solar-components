import { h } from '@stencil/core';
import { TransitionBehavior } from '../../../behaviors/transition-behavior';
/**
 * Accera's Panel webcomponent used as a menu.
 */
export class AcPanel {
  constructor() {
    this.transitionBehavior = new TransitionBehavior(this);
  }
  componentWillLoad() { }
  disconnectedCallback() {
    this.closeEv.emit();
  }
  render() {
    return [
      h("slot", { name: "item-top" }),
      h("slot", null),
      h("slot", { name: "item-bottom" })
    ];
  }
  static get is() { return "ac-panel"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-panel.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-panel.css"]
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
          "text": "Dispatched when the modal closes."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=ac-panel.js.map
