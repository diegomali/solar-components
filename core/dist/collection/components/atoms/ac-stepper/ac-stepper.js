import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { h } from '@stencil/core';
import { count } from '../../../utils/lang/count';
import { AcFaIcon } from '../../utils/ac-fa-icon';
/**
 * Accera's full-featured stepper web-component.
 */
export class AcStepper {
  constructor() {
    this.steps = undefined;
    this.done = undefined;
  }
  /**
   * Increments the count of concluded steps.
   */
  async next() {
    if (this.done < this.steps) {
      this.done++;
      this.stepperChange.emit({ index: this.done });
    }
  }
  /**
   * Decrement the count of concluded steps.
   */
  async previous() {
    if (this.done > 0) {
      this.done--;
      this.stepperChange.emit({ index: this.done });
    }
  }
  render() {
    return [
      ...count(this.steps).map(i => h("li", { class: 'ac-stepper__step ' + (this.done >= i ? 'ac-stepper__step--active' : '') }, i + 1)),
      h("li", { class: 'ac-stepper__step ' + (this.done === this.steps ? 'ac-stepper__step--active' : '') }, h(AcFaIcon, { icon: faCheck }))
    ];
  }
  static get is() { return "ac-stepper"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-stepper.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-stepper.css"]
    };
  }
  static get properties() {
    return {
      "steps": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The count of steps to be displayed.\r\nTODO: It mighty support an array of steps in the future."
        },
        "attribute": "steps",
        "reflect": true
      },
      "done": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The number of concluded steps."
        },
        "attribute": "done",
        "reflect": true
      }
    };
  }
  static get events() {
    return [{
        "method": "stepperChange",
        "name": "stepperChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Dispatched when the steps state changes."
        },
        "complexType": {
          "original": "{ index: number }",
          "resolved": "{ index: number; }",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "next": {
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
          "text": "Increments the count of concluded steps.",
          "tags": []
        }
      },
      "previous": {
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
          "text": "Decrement the count of concluded steps.",
          "tags": []
        }
      }
    };
  }
}
//# sourceMappingURL=ac-stepper.js.map
