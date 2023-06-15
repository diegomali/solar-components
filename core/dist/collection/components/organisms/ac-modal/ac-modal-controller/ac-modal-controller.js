import { ControllerBehavior, } from '../../../../behaviors/controller-behavior/controller-behavior';
import { ScrollManager } from '../../../../utils/scroll-manager';
/**
 * A controller that creates modal on the screen.
 */
export class AcModalController {
  constructor() {
    /**
     * The instance of the controller behavior that setup the modals on the screen.
     */
    this.controllerBehavior = new ControllerBehavior(this);
    this.target = 'ac-modal';
    /**
     * The list of modals that are displayed.
     */
    this.modalList = [];
    this.bound = undefined;
  }
  /**
   * Setup a new modal on the screen.
   */
  async create(props) {
    const wrapper = document.createElement('ac-overlay');
    props.wrapper = wrapper;
    const modal = await this.controllerBehavior.create(props);
    wrapper.addEventListener('backDropClick', () => {
      modal.remove();
    });
    modal.addEventListener('close', () => {
      wrapper.remove();
      ScrollManager.enable();
    });
    this.modalList.push(modal);
    ScrollManager.disable();
    return modal;
  }
  /**
   * Clear all modals that are displayed.
   */
  async dismiss(data) {
    const topModal = this.modalList.pop();
    return topModal.dismiss(data);
  }
  disconnectedCallback() { }
  static get is() { return "ac-modal-controller"; }
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
          "signature": "(props: ControllerComponentOptions<AcModal & AcOverlay>) => Promise<any>",
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
            "AcModal": {
              "location": "import",
              "path": "../ac-modal"
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
          "text": "Setup a new modal on the screen.",
          "tags": [{
              "name": "Method",
              "text": undefined
            }]
        }
      },
      "dismiss": {
        "complexType": {
          "signature": "(data: any) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
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
//# sourceMappingURL=ac-modal-controller.js.map
