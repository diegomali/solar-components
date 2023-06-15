import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-253b3ca9.js';
import { g as faSearch } from './index.es-9ca36090.js';
import { B as Bind } from './bind-952a1624.js';
import { D as Debounced } from './reactivity-1f85cfd2.js';
import { A as AcFaIcon } from './ac-fa-icon-8b19be0a.js';

function groupBy(key) {
  return (rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  };
}

const acMenuCss = "ac-menu{display:flex;flex-direction:column;width:100%;padding:0 8px}ac-menu ac-menu-item{margin-bottom:8px}ac-menu .ac-menu__group{padding-bottom:16px}ac-menu .ac-menu__group .ac-menu__group-title{color:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.32);font-size:10px;font-weight:bold;text-transform:uppercase}ac-menu .ac-menu__search-bar{margin-bottom:24px;transition:opacity ease-in-out 0.1s, background ease-in-out 0.1s;border:0px;background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.08);fill:var(--color-theme-contrast, #111111) !important}ac-menu .ac-menu__search-bar:hover,ac-menu .ac-menu__search-bar.ac-input--focus{background:rgba(var(--color-theme-contrast-rgb, 17, 17, 17), 0.16)}ac-menu .ac-menu__search-bar .ac-input__native{color:var(--color-theme-contrast, #111111) !important}ac-menu.ac-menu--icon-only ac-input-base.ac-menu__search-bar{opacity:0}ac-menu.ac-menu--filtered .ac-menu__content{display:none}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AcMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuChange = createEvent(this, "menuChange", 7);
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
  __stencil_render() {
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
  get host() { return getElement(this); }
  static get watchers() { return {
    "iconOnly": ["iconOnlyDidUpdate"],
    "searchFilter": ["searchFilterDidUpdate"],
    "selected": ["onDidSelectedUpdate"]
  }; }
  render() { return h(Host, this.hostData(), this.__stencil_render()); }
};
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
AcMenu.style = acMenuCss;

export { AcMenu as ac_menu };

//# sourceMappingURL=ac-menu.entry.js.map