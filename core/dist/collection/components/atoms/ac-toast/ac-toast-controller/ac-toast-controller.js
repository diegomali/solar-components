import { ControllerBehavior, } from '../../../../behaviors/controller-behavior/controller-behavior';
export class AcToastController {
  constructor() {
    this.controllerBehavior = new ControllerBehavior(this);
    this.target = 'ac-toast';
    this.toastList = [];
    this.bound = undefined;
  }
  async create(props) {
    const wrapper = document.createElement('ac-overlay');
    wrapper.noLayer = true;
    wrapper.position = 'flex-end flex-end';
    props.wrapper = wrapper;
    const toast = await this.controllerBehavior.create(props);
    toast.addEventListener('close', () => {
      wrapper.remove();
    });
    this.toastList.push(toast);
    setTimeout(() => {
      wrapper.remove();
    }, props.time || 3000);
    return toast;
  }
  async dismiss(data) {
    const topToast = this.toastList.pop();
    return topToast.dismiss(data);
  }
  disconnectedCallback() {
  }
  static get is() { return "ac-toast-controller"; }
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
          "signature": "(props: ControllerComponentOptions<AcToast>) => Promise<any>",
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
            "AcToast": {
              "location": "import",
              "path": "../ac-toast"
            }
          },
          "return": "Promise<any>"
        },
        "docs": {
          "text": "Set properties to the managed component.",
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
          "text": "Clear properties of the managed component.",
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
//# sourceMappingURL=ac-toast-controller.js.map
