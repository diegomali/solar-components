import { PortalBehavior } from '../../../behaviors/portal-behavior';
import { TransitionBehavior } from '../../../behaviors/transition-behavior';
export class AcPortal {
  constructor() {
    this.portalBehavior = new PortalBehavior(this);
    this.transitionBehavior = new TransitionBehavior(this);
    this.vchildren = undefined;
  }
  componentWillLoad() { }
  disconnectedCallback() { }
  static get is() { return "ac-portal"; }
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
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=ac-portal.js.map
