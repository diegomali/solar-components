var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import { ControllerBehavior } from '../../../../behaviors/controller-behavior/controller-behavior';
/**
 * A controller that creates modal on the screen.
 */
export class AcPanelController {
  constructor() {
    /**
     * The instance of the controller behavior that setup the modals on the screen.
     */
    this.controllerBehavior = new ControllerBehavior(this);
    this.target = 'ac-panel';
    this.bound = undefined;
  }
  /**
   * Setup a new modal on the screen.
   */
  async create(props) {
    const { popperOptions, popperPivot, popperPlacement } = props, restProps = __rest(props, ["popperOptions", "popperPivot", "popperPlacement"]);
    const wrapper = document.createElement('ac-popper');
    restProps.wrapper = wrapper;
    wrapper.style.zIndex = '9000';
    wrapper.popperPlacement = popperPlacement;
    wrapper.popperPivot = popperPivot;
    wrapper.popperOptions = Object.assign({ onCreate: (data) => {
        data.instance.popper.style.width = data.offsets.reference.width + 'px';
        data.instance.popper.style.top = data.placement === 'bottom' ? '8px' : '-8px';
        data.instance.scheduleUpdate();
      }, onUpdate: (data) => {
        data.instance.popper.style.width = data.offsets.reference.width + 'px';
        data.instance.popper.style.top = data.placement === 'bottom' ? '8px' : '-8px';
      }, modifiers: {
        preventOverflow: {
          boundariesElement: this.controllerBehavior.root,
        },
      } }, popperOptions);
    return this.controllerBehavior.create(restProps);
  }
  /**
   * Clear all modals that are displayed.
   */
  async dismiss(elt) {
    if (elt) {
      return elt.remove();
    }
  }
  disconnectedCallback() { }
  static get is() { return "ac-panel-controller"; }
  static get properties() {
    return {
      "bound": {
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
          "text": "An optional property used to refer the parent element that the component will be attached to."
        },
        "attribute": "bound",
        "reflect": false
      }
    };
  }
  static get methods() {
    return {
      "create": {
        "complexType": {
          "signature": "(props: ControllerComponentOptions<AcPanel & AcPopper>) => Promise<any>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "ControllerComponentOptions": {
              "location": "import",
              "path": "../../../../behaviors/controller-behavior/controller-behavior"
            },
            "AcPanel": {
              "location": "import",
              "path": "../ac-panel"
            },
            "AcPopper": {
              "location": "import",
              "path": "../../../portals/ac-popper/ac-popper"
            },
            "HTMLAcPopperElement": {
              "location": "global"
            }
          },
          "return": "Promise<any>"
        },
        "docs": {
          "text": "Setup a new modal on the screen.",
          "tags": [{
              "name": "Method",
              "text": undefined
            }]
        }
      },
      "dismiss": {
        "complexType": {
          "signature": "(elt?: HTMLAcPanelElement) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLAcPanelElement": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Clear all modals that are displayed.",
          "tags": [{
              "name": "Method",
              "text": undefined
            }]
        }
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=ac-panel-controller.js.map
