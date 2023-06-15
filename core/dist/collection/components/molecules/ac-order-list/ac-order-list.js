import { h } from '@stencil/core';
import { AcFaIcon } from '../../utils/ac-fa-icon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { isEmpty } from 'ramda';
export class AcOrderList {
  constructor() {
    this.setFilterText = (text) => this.filterText = text;
    this.filterText = undefined;
    this.options = undefined;
    this.searchLabel = undefined;
    this.label = undefined;
    this.noResultsLabel = undefined;
    this.multiple = false;
  }
  handleOptionsChange() {
    this.options
      .forEach((option, index) => {
      if (option.order === undefined) {
        option.order = index;
      }
    });
    this.listChange.emit(this);
  }
  updateSelectedOptions(option) {
    if (this.multiple === false) {
      this.options.filter(x => x.value !== option.value).forEach(x => x.selected = false);
    }
    option.selected = !option.selected;
    this.options = [...this.options];
    this.listChange.emit(this);
  }
  handleSelect(e, option) {
    e.stopImmediatePropagation();
    this.updateSelectedOptions(option);
  }
  handleChecked(e, option) {
    /* TODO: review ac-check fire more than once */
    e.stopImmediatePropagation();
    if (!e.srcElement.classList.contains('ac-check__native')) {
      return;
    }
    if (this.multiple === false) {
      this.options.filter(x => x.value !== option.value).forEach(x => x.selected = false);
    }
    this.updateSelectedOptions(option);
  }
  async getSelectedOptions() {
    return Promise.resolve(this.options.filter(x => x.selected));
  }
  componentDidLoad() {
    if (!this.options) {
      this.loadOptionsFromHTML();
    }
  }
  loadOptionsFromHTML() {
    const listItems = Array.from(this.host.querySelectorAll('option'));
    if (listItems) {
      this.options = listItems
        .map((item) => {
        return ({
          title: item.text,
          value: item.value,
          selected: item.hasAttribute('selected') ? item.selected : false,
          separator: false,
          group: item.parentElement.tagName === 'OPTGROUP' ? item.parentElement.label : null
        });
      });
    }
  }
  render() {
    const listItems = this.renderList();
    return [
      h("section", { style: { display: 'none' } }, h("slot", null)),
      h("label", { class: "ac-order-list__header-title" }, this.label, " (", this.options ? this.options.length : 0, ")"),
      h("section", { class: "ac-order-list__container" }, h("ac-input-base", { class: "ac-order-list__search-bar", type: "text", placeholder: this.searchLabel, value: this.filterText, onChange: ({ target: { value } }) => this.setFilterText(value), size: "small" }, h("ac-button", { slot: "item-start", fill: "clear", "icon-only": true }, h(AcFaIcon, { icon: faSearch, class: "ac-list__search-bar-icon", size: 12 }))), h("ol", { class: "ac-list" }, listItems.length > 0
        ? listItems
        : !isEmpty(this.filterText) && h("li", { class: "ac-list__item ac-list__list-item--empty" }, this.noResultsLabel)))
    ];
  }
  renderList() {
    if (this.options) {
      const options = this.filterText
        ? this.options.filter(option => option.title.toUpperCase().includes(this.filterText.toUpperCase()))
        : this.options;
      let hasGroup = false;
      const a = options
        .sort((a, b) => a.order > b.order ? 1 : -1)
        .reduce((state, option) => {
        if (!(state.has(option.group))) {
          hasGroup = hasGroup === false && !isEmpty(option.group) ? true : hasGroup;
          state.set(option.group, [(h("li", { class: "ac-list__separator" }, h("span", { class: "ac-list__separator-title" }, option.group), h("span", { class: "ac-list__separator-line" })))]);
        }
        const elements = state.has(option.group)
          ? state.get(option.group)
          : [];
        elements.push((h("li", { value: option.value, key: option.value, class: {
            "ac-list__item": true,
            "ac-list__item--selected": option.selected
          }, onClick: (e) => this.handleSelect(e, option) }, this.multiple && h("ac-check", { class: "ac-order-list__checkbox", checked: option.selected, onClick: (e) => this.handleChecked(e, option) }), option.title)));
        state.set(option.group, elements);
        return state;
      }, new Map());
      return Array.from(a.values()).reduce((result, arr) => {
        if (hasGroup === false) {
          arr.splice(0, 1);
        }
        return result.concat(arr);
      }, []);
    }
    return [];
  }
  static get is() { return "ac-order-list"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-order-list.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-order-list.css"]
    };
  }
  static get properties() {
    return {
      "filterText": {
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
          "text": ""
        },
        "attribute": "filter-text",
        "reflect": false
      },
      "options": {
        "type": "unknown",
        "mutable": true,
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
          "text": "Used to customize the searchbar's label"
        },
        "attribute": "search-label",
        "reflect": false
      },
      "label": {
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
          "text": "Used to customize the field label"
        },
        "attribute": "label",
        "reflect": false
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
          "text": "Message that will be rendered with the search results in zero items"
        },
        "attribute": "no-results-label",
        "reflect": false
      },
      "multiple": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If true, the component will handle multiple selected items."
        },
        "attribute": "multiple",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "listChange",
        "name": "listChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "param",
              "text": "acList - Component."
            }],
          "text": "Event trigger on state change"
        },
        "complexType": {
          "original": "AcOrderList",
          "resolved": "AcOrderList",
          "references": {
            "AcOrderList": {
              "location": "global"
            }
          }
        }
      }];
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
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "options",
        "methodName": "handleOptionsChange"
      }];
  }
}
//# sourceMappingURL=ac-order-list.js.map
