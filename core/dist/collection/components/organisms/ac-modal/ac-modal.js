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
import { h } from '@stencil/core';
import { TransitionBehavior } from '../../../behaviors/transition-behavior';
import { Bind } from '../../../utils/lang/bind';
import { AcFaIcon } from '../../utils/ac-fa-icon';
/**
 * Accera's full-featured modal web-component.
 */
export class AcModal {
  constructor() {
    /**
     * The instance of the transition behavior used to animate this component.
     */
    this.transitionBehavior = new TransitionBehavior(this);
    this.title = undefined;
  }
  componentWillLoad() { }
  disconnectedCallback() {
    this.closeEv.emit();
  }
  close() {
    this.host.remove();
  }
  render() {
    return [
      h("header", { class: "ac-modal__header" }, this.title ?
        h("span", { class: "ac-modal__title" }, this.title) :
        h("slot", { name: "modal-title" }), h("ac-button", { fill: "clear", theme: "primary", shape: "round", "icon-only": true, onClick: this.close }, h(AcFaIcon, { icon: faTimes }))),
      h("section", { class: "ac-modal__content" }, h("slot", null)),
      h("footer", { class: "ac-modal__footer" }, h("slot", { name: "modal-actions" }))
    ];
  }
  static get is() { return "ac-modal"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-modal.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "The title that will be displayed on the modal."
        },
        "attribute": "title",
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
__decorate([
  Bind
], AcModal.prototype, "close", null);
//# sourceMappingURL=ac-modal.js.map
