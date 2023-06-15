import { ControllerBehavior, } from '../../../../behaviors/controller-behavior/controller-behavior';
import { ScrollManager } from '../../../../utils/scroll-manager';
/**
 * A controller that creates navdrawer on the screen.
 */
export class AcModalController {
  constructor() {
    /**
     * The instance of the controller behavior that setup the modals on the screen.
     */
    this.controllerBehavior = new ControllerBehavior(this);
    this.target = 'ac-navdrawer';
    this.bound = undefined;
  }
  /**
   * Setup a new navdrawer on the screen.
   */
  async create(props) {
    const wrapper = document.createElement('ac-overlay');
    wrapper.backdrop = 'light';
    wrapper.position = props.position;
    props.wrapper = wrapper;
    props.mode = 'over';
    const navDrawer = await this.controllerBehavior.create(Object.assign(Object.assign({}, props), { showToggle: false }));
    wrapper.addEventListener('backDropClick', () => {
      navDrawer.remove();
    });
    navDrawer.addEventListener('close', () => {
      wrapper.remove();
      ScrollManager.enable();
    });
    ScrollManager.disable();
    return navDrawer;
  }
  /**
   * Clear all modals that are displayed.
   */
  async dismiss() {
    return;
  }
  disconnectedCallback() { }
  static get is() { return "ac-navdrawer-controller"; }
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
          "signature": "(props: ControllerComponentOptions<AcNavdrawer & AcOverlay>) => Promise<any>",
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
            "AcNavdrawer": {
              "location": "import",
              "path": "../ac-navdrawer"
            },
            "AcOverlay": {
              "location": "import",
              "path": "../../../portals/ac-overlay/ac-overlay"
            },
            "HTMLAcOverlayElement": {
              "location": "global"
            }
          },
          "return": "Promise<any>"
        },
        "docs": {
          "text": "Setup a new navdrawer on the screen.",
          "tags": [{
              "name": "Method",
              "text": undefined
            }]
        }
      },
      "dismiss": {
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
//# sourceMappingURL=ac-navdrawer-controller.js.map
