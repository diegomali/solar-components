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
import { Host, h } from '@stencil/core';
import { Bind } from '../../../utils/lang/bind';
import dragula from 'dragula';
import { AcFaIcon } from '../../utils/ac-fa-icon';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
export class AcPickList {
  constructor() {
    this.numberAvailableOptionsSelected = 0;
    this.numberOfSelectedOptions = 0;
    this.options = undefined;
    this.searchLabel = 'Search';
    this.noResultsLabel = undefined;
    this.availableLabel = undefined;
    this.selectedLabel = undefined;
    this.addLabel = 'Add';
    this.addAllLabel = 'Add all';
    this.removeLabel = 'Remove';
    this.removeAllLabel = 'Remove All';
  }
  /**
   * Return the selected items.
   */
  getSelectedOptions() {
    return Promise.resolve(this.acListSelectedOptions.options);
  }
  /**
   * Method that add all options on the selected ac-list
   */
  addAllOptions() {
    if (this.acListAvalibles.options) {
      this.acListSelectedOptions.options = [
        ...this.acListAvalibles.options
      ];
      this.acListAvalibles.options = [];
    }
  }
  /**
   * Method that add options on the selected ac-list
   */
  addSelectedOptions() {
    if (this.acListAvalibles.options) {
      this.acListSelectedOptions.options = this.acListAvalibles
        .options
        .reduce((newList, option) => {
        if (option.selected) {
          newList.push(Object.assign(Object.assign({}, option), { selected: false }));
        }
        return newList;
      }, [...this.acListSelectedOptions.options]);
      this.acListAvalibles.options = this.acListAvalibles.options
        .filter(x => x.selected === false);
    }
  }
  /**
   * Method that remove all options on the selected ac-list
   */
  removeAllOptions() {
    this.acListAvalibles.options = [
      ...this.acListAvalibles.options,
      ...this.acListSelectedOptions.options
    ];
    this.acListSelectedOptions.options = [];
  }
  /**
   * Method that remove options on the selected ac-list
   */
  removeOptions() {
    this.acListAvalibles.options = this.acListSelectedOptions.options
      .reduce((newList, option) => {
      if (option.selected) {
        newList.push(Object.assign(Object.assign({}, option), { selected: false }));
      }
      return newList;
    }, [...this.acListAvalibles.options]);
    this.acListSelectedOptions.options = this.acListSelectedOptions.options
      .filter(x => x.selected === false);
  }
  /**
   * Method that handle selected options.
   */
  handleChangeAclistSelectedOptions(event) {
    if (event.detail) {
      event.detail.getSelectedOptions()
        .then(({ length }) => this.numberOfSelectedOptions = length);
    }
    else {
      this.numberOfSelectedOptions = 0;
    }
  }
  /**
   * Method that handle changes on ac-list of avalibles options.
   */
  handleChangeAclistAvailableOptionsSelected(event) {
    if (event.detail) {
      event.detail.getSelectedOptions()
        .then(({ length }) => this.numberAvailableOptionsSelected = length);
    }
    else {
      this.numberAvailableOptionsSelected = 0;
    }
  }
  componentDidRender() {
    const drake = dragula([this.acListAvalibles.querySelector('.ac-list'), this.acListSelectedOptions.querySelector('.ac-list')], {
      invalid: (el) => {
        return el.classList.contains('ac-list__list-separator');
      }
    });
    drake
      .on('drop', (el, target, source) => {
      drake.cancel(true);
      if (!source.parentElement || !target.parentElement) {
        return;
      }
      const acListSource = source.parentElement.parentElement;
      const acListTarget = target.parentElement.parentElement;
      if (acListTarget === acListSource) {
        return;
      }
      const option = acListSource.options.find(x => x.value.toString() === el.value.toString());
      if (option) {
        option.selected = false;
        el.remove();
        acListSource.options = acListSource.options.filter(x => x.value.toString() !== el.value.toString());
        acListTarget.options = [
          option,
          ...acListTarget.options
        ];
      }
    });
  }
  render() {
    const disabledAddAll = this.acListAvalibles
      ? this.acListAvalibles.options.length === 0
      : false;
    const disabledRemoveAll = this.acListSelectedOptions ? this.acListSelectedOptions.options.length === 0 : true;
    return (h(Host, null, h("ac-order-list", { class: "ac-pick-list__column", onListChange: this.handleChangeAclistAvailableOptionsSelected, ref: acList => this.acListAvalibles = acList, searchLabel: this.searchLabel, label: this.availableLabel, options: this.options, "no-results-label": this.noResultsLabel, multiple: true }, h("slot", null)), h("section", { class: "ac-pick-list__column ac-pick-list__action-panel ac-pick-list__action-panel--gutter" }, h("div", { class: "ac-pick-list__cell ac-pick-list__cell--align-start ac-pick-list__cell--dir-col" }, h("ac-button", { disabled: this.numberAvailableOptionsSelected === 0, class: "ac-pick-list__button", onClick: this.addSelectedOptions }, this.addLabel, h(AcFaIcon, { slot: "icon-start", icon: faAngleDoubleRight, class: {
        "ac-pick-list__button-icon": true,
        "ac-pick-list__button-icon--disabled": this.numberAvailableOptionsSelected === 0
      }, size: 12 })), h("ac-button", { disabled: disabledAddAll, class: "ac-pick-list__button", fill: "clear", theme: "primary", onClick: this.addAllOptions }, this.addAllLabel)), h("div", { class: "ac-pick-list__cell ac-pick-list__cell--align-end ac-pick-list__cell--dir-col" }, h("ac-button", { class: "ac-pick-list__button", disabled: this.numberOfSelectedOptions === 0, onClick: this.removeOptions }, this.removeLabel, h(AcFaIcon, { slot: "icon-start", icon: faAngleDoubleLeft, class: {
        "ac-pick-list__button-icon": true,
        "ac-pick-list__button-icon--disabled": this.numberOfSelectedOptions === 0
      }, size: 12 })), h("ac-button", { disabled: disabledRemoveAll, fill: "clear", theme: "primary", class: "ac-pick-list__button", onClick: this.removeAllOptions }, this.removeAllLabel))), h("ac-order-list", { class: "ac-pick-list__column", ref: acList => this.acListSelectedOptions = acList, onListChange: this.handleChangeAclistSelectedOptions, label: this.selectedLabel, multiple: true, searchLabel: this.searchLabel })));
  }
  static get is() { return "ac-pick-list"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-pick-list.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-pick-list.css"]
    };
  }
  static get properties() {
    return {
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "AcOption[]",
          "resolved": "AcOption<{}>[]",
          "references": {
            "AcOption": {
              "location": "import",
              "path": "../../../utils/types/ac-option"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "List of all options available."
        }
      },
      "searchLabel": {
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
          "text": "Text to be search."
        },
        "attribute": "search-label",
        "reflect": false,
        "defaultValue": "'Search'"
      },
      "noResultsLabel": {
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
          "text": "Label to be show when no results is fouond."
        },
        "attribute": "no-results-label",
        "reflect": false
      },
      "availableLabel": {
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
          "text": "Label for ac-list of avalible options"
        },
        "attribute": "available-label",
        "reflect": false
      },
      "selectedLabel": {
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
          "text": "Label for ac-list of selected options"
        },
        "attribute": "selected-label",
        "reflect": false
      },
      "addLabel": {
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
          "text": "Label of the button that add options on the  selected ac-list."
        },
        "attribute": "add-label",
        "reflect": false,
        "defaultValue": "'Add'"
      },
      "addAllLabel": {
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
          "text": "Label of the button that add all options on the selected ac-list."
        },
        "attribute": "add-all-label",
        "reflect": false,
        "defaultValue": "'Add all'"
      },
      "removeLabel": {
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
          "text": "Label of the button that remove options on the on selected ac-list."
        },
        "attribute": "remove-label",
        "reflect": false,
        "defaultValue": "'Remove'"
      },
      "removeAllLabel": {
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
          "text": "Label of the button that remove all options on the  selected ac-list."
        },
        "attribute": "remove-all-label",
        "reflect": false,
        "defaultValue": "'Remove All'"
      }
    };
  }
  static get states() {
    return {
      "numberAvailableOptionsSelected": {},
      "numberOfSelectedOptions": {}
    };
  }
  static get methods() {
    return {
      "getSelectedOptions": {
        "complexType": {
          "signature": "() => Promise<AcOption<{}>[]>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "AcOption": {
              "location": "import",
              "path": "../../../utils/types/ac-option"
            }
          },
          "return": "Promise<AcOption<{}>[]>"
        },
        "docs": {
          "text": "Return the selected items.",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "host"; }
}
__decorate([
  Bind
], AcPickList.prototype, "addAllOptions", null);
__decorate([
  Bind
], AcPickList.prototype, "addSelectedOptions", null);
__decorate([
  Bind
], AcPickList.prototype, "removeAllOptions", null);
__decorate([
  Bind
], AcPickList.prototype, "removeOptions", null);
__decorate([
  Bind
], AcPickList.prototype, "handleChangeAclistSelectedOptions", null);
__decorate([
  Bind
], AcPickList.prototype, "handleChangeAclistAvailableOptionsSelected", null);
//# sourceMappingURL=ac-pick-list.js.map
