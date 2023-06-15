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
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { h } from '@stencil/core';
import { groupBy } from '../../../utils/collections/group-by';
import { Bind } from '../../../utils/lang/bind';
import { Debounced } from '../../../utils/lang/reactivity';
import { AcFaIcon } from '../../utils/ac-fa-icon';
export class AcMenu {
  constructor() {
    this.iconOnly = undefined;
    this.searchable = undefined;
    this.searchLabel = undefined;
    this.noResultsLabel = undefined;
    this.selected = undefined;
    this.searchFilter = undefined;
    this.filteredItems = undefined;
  }
  iconOnlyDidUpdate() {
    this.filteredItems = null;
    this.searchFilter = null;
    this.updateChildItems();
  }
  searchFilterDidUpdate() {
    if (this.searchFilter) {
      this.filteredItems = [];
      Object.keys(this.menuItems)
        .forEach(key => {
        const items = this.menuItems[key]
          .filter(item => {
          return item.fuzzyDescription.indexOf(this.searchFilter.toLowerCase()) > 0
            && !item.elt.disabled;
        });
        if (items.length > 0) {
          this.filteredItems.push({ groupTitle: key !== 'null' ? key : null, items });
        }
      });
    }
    else {
      this.filteredItems = null;
    }
  }
  componentDidLoad() {
    this.loadItemsFromHTML();
  }
  updateChildItems() {
    for (const menuItem of this.childItems) {
      menuItem.iconOnly = this.iconOnly;
    }
  }
  loadItemsFromHTML() {
    this.childItems = Array.from(this.menuContentElt.children)
      .filter(elt => elt.tagName === 'AC-MENU-ITEM');
    setTimeout(() => this.menuItems =
      Array.from(this.menuContentElt.querySelectorAll('ac-menu-item'))
        .filter(elt => !elt.submenu && !elt.disabled)
        .map(parseMenuItems)
        .reduce(groupBy('breadcrumbs'), {}), 0);
    this.childItems.forEach(item => {
      if (!item.submenu) {
        item.addEventListener('click', () => this.selected = item.id);
      }
    });
    // tslint:disable-next-line:triple-equals
    const initialItem = this.childItems.find(item => item.id == this.selected);
    if (initialItem) {
      this.select(initialItem);
    }
    this.updateChildItems();
  }
  onDidSelectedUpdate() {
    console.log(this.selected);
    // tslint:disable-next-line:triple-equals
    const targetItem = this.childItems.find(item => item.id == this.selected);
    this.select(targetItem);
  }
  /**
   * Mark a menu item as selected.
   */
  select(item) {
    if (!this.activeItem) {
      this.activeItem = item;
    }
    if (this.activeItem.id !== item.id) {
      this.activeItem.active = false;
      this.menuChange.emit(item.id);
    }
    item.active = true;
    this.activeItem = item;
  }
  async handleDebouncedKeyUp() {
    const nativeInput = await this.searchInput.getNativeInput();
    this.searchFilter = nativeInput.value;
  }
  hostData() {
    return {
      class: {
        'ac-menu--icon-only': this.iconOnly,
        'ac-menu--filtered': this.searchFilter
      }
    };
  }
  render() {
    return [
      // Searchbar
      this.searchable &&
        h("ac-input-base", { class: "ac-menu__search-bar", size: "small", placeholder: this.searchLabel || 'Search', onKeyUp: this.handleDebouncedKeyUp, ref: searchInput => this.searchInput = searchInput }, h(AcFaIcon, { slot: "item-start", icon: faSearch, size: 12 })),
      // Content
      h("div", { class: "ac-menu__content", ref: menuContentElt => this.menuContentElt = menuContentElt }, h("slot", null)),
      // Search Results
      this.filteredItems && this.filteredItems.length > 0 &&
        h("div", { class: "ac-menu__search-results" }, this.filteredItems.map(renderFilteredGroup))
    ];
  }
  static get is() { return "ac-menu"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-menu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-menu.css"]
    };
  }
  static get properties() {
    return {
      "iconOnly": {
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
          "text": ""
        },
        "attribute": "icon-only",
        "reflect": false
      },
      "searchable": {
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
          "text": ""
        },
        "attribute": "searchable",
        "reflect": false
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
          "text": ""
        },
        "attribute": "search-label",
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
          "text": ""
        },
        "attribute": "no-results-label",
        "reflect": false
      },
      "selected": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "selected",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "searchFilter": {},
      "filteredItems": {}
    };
  }
  static get events() {
    return [{
        "method": "menuChange",
        "name": "menuChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "iconOnly",
        "methodName": "iconOnlyDidUpdate"
      }, {
        "propName": "searchFilter",
        "methodName": "searchFilterDidUpdate"
      }, {
        "propName": "selected",
        "methodName": "onDidSelectedUpdate"
      }];
  }
}
__decorate([
  Bind,
  Debounced(200)
], AcMenu.prototype, "handleDebouncedKeyUp", null);
// Utils
// --------------------------------------------------
function parseMenuItems(elt) {
  const parents = getMenuItemHierarchy(elt, []).reverse();
  return {
    elt,
    parents,
    breadcrumbs: parents.length > 0 ? parents.join(' > ') : null,
    title: elt.innerText,
    href: elt.href,
    onClick: () => elt.click(),
    fuzzyDescription: (parents.join('; ') + '; ' + elt.innerText + '; ' + elt.href).toLowerCase()
  };
}
function getMenuItemHierarchy(elt, parents) {
  if (elt.parentElement.slot !== 'submenu') {
    return parents;
  }
  const menuItem = elt.parentElement.parentElement.parentElement;
  parents.push(menuItem.querySelector('.ac-menu-item__native > .ac-menu-item__text').innerText);
  return getMenuItemHierarchy(menuItem, parents);
}
function renderFilteredGroup(group) {
  return (h("div", { class: "ac-menu__group" }, h("span", { class: "ac-menu__group-title" }, group.groupTitle), group.items.map(item => (h("ac-menu-item", { href: item.href, onClick: item.onClick }, item.title)))));
}
//# sourceMappingURL=ac-menu.js.map
