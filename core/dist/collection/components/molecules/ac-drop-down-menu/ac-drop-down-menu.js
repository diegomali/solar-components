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
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Host, h } from '@stencil/core';
import { isNil } from 'ramda';
import { createControllerPortal } from '../../../behaviors/controller-behavior/create-controller-portal';
import { FocusBehavior } from '../../../behaviors/focus-behavior';
import { Bind } from '../../../utils/lang/bind';
import { ensureController } from '../../../utils/stencil/ensure-controller';
import { AcFaIcon } from '../../utils/ac-fa-icon';
export class AcDropDownMenu {
  constructor() {
    /**
     * Internal reference to the select panel.
     */
    this.SelectPanel = createControllerPortal(ensureController('ac-panel-controller'));
    /**
     * The instance of the FocusBehavior used to close the panel when the user clicks outside.
     */
    this.focusBehavior = new FocusBehavior(this);
    this.options = [];
    this.value = undefined;
    this.compact = undefined;
    this.isPanelOpen = false;
  }
  isShowingPanelDidUpdate() {
    this.hasFocus = this.isPanelOpen;
  }
  componentDidLoad() {
    if (this.options.length === 0) {
      this.options = Array.from(this.host.querySelectorAll('ac-drop-option'))
        .map((option) => {
        return {
          label: option.label || option.innerText.trim(),
          value: option.value,
          image: option.image
        };
      });
    }
    if (isNil(this.value) && this.options.length > 0) {
      this.value = this.options[0].value;
    }
  }
  disconnectedCallback() {
    this.isPanelOpen = false;
  }
  /**
   * Toggle the panel view.
   */
  whenBlur(element) {
    // If the target element is'nt a child of the panel.
    if (!this.selectPanel.contains(element)) {
      if (this.isPanelOpen) {
        this.isPanelOpen = !this.isPanelOpen;
      }
    }
  }
  handlePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }
  handleSelect(option) {
    this.isPanelOpen = !this.isPanelOpen;
    this.value = option.value;
    this.selectChange.emit(option);
  }
  render() {
    const filterSelected = option => {
      if (isNil(this.value)) {
        return false;
      }
      if (isNil(option.value)) {
        return false;
      }
      return option.value.toString() === this.value.toString();
    };
    const SelectPanel = this.SelectPanel;
    return h(Host, { class: { 'ac-list': true } }, h("section", { style: { display: 'none' } }, h("slot", null)), this.options && this.options
      .filter(filterSelected)
      .map(x => (h("ac-button", { class: { 'ac-drop-down-menu__button': true, 'ac-drop-down-menu--compact': this.compact }, theme: this.isPanelOpen ? 'primary' : 'light', onClick: this.handlePanel, fill: "flat" }, x.image && h("img", { slot: "icon-start", src: x.image }), h("span", null, x.label), this.options.length > 0
      && h(AcFaIcon, { slot: "icon-end", icon: this.isPanelOpen ? faChevronUp : faChevronDown, size: 12 })))), h(SelectPanel, { ref: selectPanel => this.selectPanel = selectPanel, popperPivot: this.host, reset: !this.isPanelOpen }, h("ul", { class: { 'ac-list': true, 'ac-drop-down-menu__list--compact': this.compact } }, this.options.map(option => (h("ac-drop-option", { class: "ac-list__item", label: option.label, onClick: () => this.handleSelect(option) }, option.image && h("img", { src: option.image, slot: "image", class: "ac-drop-down__image" })))))));
  }
  static get is() { return "ac-drop-down-menu"; }
  static get originalStyleUrls() {
    return {
      "$": ["./ac-drop-down-menu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-drop-down-menu.css"]
    };
  }
  static get properties() {
    return {
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "AcDropOption[]",
          "resolved": "AcDropOption[]",
          "references": {
            "AcDropOption": {
              "location": "import",
              "path": "./ac-drop-option"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "List of all options."
        },
        "defaultValue": "[]"
      },
      "value": {
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
          "text": "Value of selected option."
        },
        "attribute": "value",
        "reflect": true
      },
      "compact": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Compact mode."
        },
        "attribute": "compact",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isPanelOpen": {}
    };
  }
  static get events() {
    return [{
        "method": "selectChange",
        "name": "selectChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event call on option change."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "isPanelOpen",
        "methodName": "isShowingPanelDidUpdate"
      }];
  }
}
__decorate([
  Bind
], AcDropDownMenu.prototype, "whenBlur", null);
__decorate([
  Bind
], AcDropDownMenu.prototype, "handlePanel", null);
//# sourceMappingURL=ac-drop-down-menu.js.map
