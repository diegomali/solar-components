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
import { addStyle, animate } from '../../../utils/animation';
import { Bind } from '../../../utils/lang/bind';
/**
 * Accera's full-featured tabs webcomponent.
 */
export class AcTabs {
  constructor() {
    this.theme = undefined;
    this.compact = undefined;
    this.selected = undefined;
  }
  onDidSelectedUpdate() {
    // tslint:disable-next-line:triple-equals
    const tab = this.childTabs.find(tab => tab.id == this.selected);
    this.select(tab);
  }
  onDidCompactUpdate() {
    this.childTabs.forEach(tab => {
      tab.compact = this.compact;
    });
  }
  componentDidLoad() {
    // @TODO: Change it to componentDidRender hook.
    this.loadTabsFromHTML();
  }
  componentDidUpdate() {
    this.loadTabsFromHTML();
  }
  /**
   * Load the tabs from the children.
   */
  loadTabsFromHTML(selected) {
    this.childTabs = Array.from(this.host.querySelectorAll('ac-tab'));
    if (!this.currentTab) {
      this.currentTab = this.childTabs[0];
    }
    this.childTabs.forEach(tab => {
      tab.addEventListener('click', () => this.select(tab));
    });
    this.childTabs.forEach(tab => {
      tab.compact = this.compact;
      // tslint:disable-next-line:triple-equals
      if (selected && selected == tab.id) {
        tab.active = true;
      }
    });
    this.selected = this.currentTab.id;
    setTimeout(() => this.moveBulletToCurrentTab(), 100);
  }
  /**
   * Mark a tab as selected.
   */
  async select(tab) {
    if (this.currentTab.id !== tab.id) {
      this.currentTab.active = false;
      tab.active = true;
      this.currentTab = tab;
      await this.moveBulletToCurrentTab();
      this.selected = this.currentTab.id;
      this.tabChange.emit(this.currentTab.id);
    }
  }
  /**
   * Animate the bullet element to a tab on the screen.
   */
  moveBulletToCurrentTab() {
    const bulletBounding = this.currentTab.getBoundingClientRect();
    const hostBounding = this.host.getBoundingClientRect();
    const bulletLeft = ((bulletBounding.left - hostBounding.left) + bulletBounding.width / 2);
    const bulletLeftWithScroll = bulletLeft + this.wrapperElt.scrollLeft;
    return animate(this.bulletElt)
      .then(addStyle({ left: bulletLeftWithScroll + 'px' }));
  }
  /**
   * Update the bullet element position when occurs a scroll, preventing breaks on the layout.
   */
  handleWrapperScroll() {
    this.bulletElt.style.transform = `translateX(-${this.wrapperElt.scrollLeft}px)`;
  }
  render() {
    return (h(Host, { class: {
        [`ac-tabs--${this.theme}`]: this.theme !== undefined,
        'ac-tabs--compact': this.compact
      } }, h("span", { class: "ac-tabs__wrapper", ref: wrapper => this.wrapperElt = wrapper, onScroll: this.handleWrapperScroll }, h("slot", null)), h("span", { class: "ac-tabs__bullet", style: { left: '0px' }, ref: bullet => this.bulletElt = bullet })));
  }
  static get is() { return "ac-tabs"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-tabs.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-tabs.css"]
    };
  }
  static get properties() {
    return {
      "theme": {
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
          "text": "The theme color defined in the color palette. The default is primary."
        },
        "attribute": "theme",
        "reflect": false
      },
      "compact": {
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
        "attribute": "compact",
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
  static get events() {
    return [{
        "method": "tabChange",
        "name": "tabChange",
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
        "propName": "selected",
        "methodName": "onDidSelectedUpdate"
      }, {
        "propName": "compact",
        "methodName": "onDidCompactUpdate"
      }];
  }
}
__decorate([
  Bind
], AcTabs.prototype, "handleWrapperScroll", null);
//# sourceMappingURL=ac-tabs.js.map
