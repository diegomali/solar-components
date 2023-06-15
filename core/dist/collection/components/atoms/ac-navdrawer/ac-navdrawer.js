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
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Host, h } from '@stencil/core';
import { isNil } from 'ramda';
import { TransitionBehavior } from '../../../behaviors/transition-behavior';
import { Bind } from '../../../utils/lang/bind';
import { AcFaIcon } from '../../utils/ac-fa-icon';
import { AcNeogridShape } from '../../utils/ac-neogrid-shape';
/**
 * Accera's Sidebar webcomponent.
 */
export class AcNavdrawer {
  constructor() {
    /**
     * The instance of the transition behavior used to animate this component.
     */
    this.transitionBehavior = new TransitionBehavior(this);
    this.showToggle = true;
    this.title = undefined;
    this.theme = undefined;
    this.mode = 'push';
    this.compact = undefined;
    this.options = undefined;
  }
  compactDidUpdate() {
    for (const menu of this.childMenus) {
      menu.iconOnly = this.compact;
    }
  }
  componentDidLoad() {
    this.loadItemsFromHTML();
  }
  componentWillLoad() { }
  disconnectedCallback() {
    this.closeEv.emit();
  }
  loadItemsFromHTML() {
    this.childMenus = Array.from(this.host.querySelectorAll('ac-menu'));
  }
  toggleMode() {
    this.compact = !this.compact;
  }
  close() {
    this.host.remove();
  }
  renderHeader() {
    if (this.options) {
      return (h("ac-drop-down-menu", { compact: this.compact, options: this.options, class: "ac-navdrawer__drop-down-menu" }));
    }
    else if (!isNil(this.title)) {
      return (h("div", { class: "ac-navdrawer__title" }, h("span", { class: "ac-navdrawer__title-content" }, this.title), h("ac-button", { class: "ac-navdrawer__close-button", fill: "clear", theme: "primary", shape: "round", "icon-only": true, onClick: this.close }, h(AcFaIcon, { icon: faTimes, size: 14 }))));
    }
    else {
      return h("slot", { name: "header" });
    }
  }
  render() {
    return (h(Host, { class: {
        [`ac-navdrawer--${this.theme}`]: !!this.theme,
        'ac-navdrawer--compact': this.compact,
        'ac-navdrawer--over': this.mode === 'over'
      } }, h("div", { class: "ac-navdrawer__header" }, this.renderHeader()), h("nav", { class: "ac-navdrawer__content" }, h("slot", { name: "content" })), this.showToggle && h("div", { class: "ac-navdrawer__toggle-button", onClick: this.toggleMode }, h(AcNeogridShape, { class: "ac-navdrawer__toggle-button-bg" }), h(AcFaIcon, { class: "ac-navdrawer__toggle-button-icon", icon: this.compact ? faChevronRight : faChevronLeft, size: 12 }))));
  }
  static get is() { return "ac-navdrawer"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-navdrawer.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-navdrawer.css"]
    };
  }
  static get properties() {
    return {
      "showToggle": {
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
          "text": "Show or hide toggle button"
        },
        "attribute": "show-toggle",
        "reflect": false,
        "defaultValue": "true"
      },
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
          "text": "Show title in the navdrawer and toggle header"
        },
        "attribute": "title",
        "reflect": false
      },
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
          "text": "The color theme."
        },
        "attribute": "theme",
        "reflect": false
      },
      "mode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'push' | 'over'",
          "resolved": "\"over\" | \"push\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Control the mode of the navedrawer."
        },
        "attribute": "mode",
        "reflect": false,
        "defaultValue": "'push'"
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
      },
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "AcDropOption[]",
          "resolved": "AcDropOption[]",
          "references": {
            "AcDropOption": {
              "location": "import",
              "path": "../../molecules/ac-drop-down-menu/ac-drop-option"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "List of option to be show on the header."
        }
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
          "text": ""
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "compact",
        "methodName": "compactDidUpdate"
      }];
  }
}
__decorate([
  Bind
], AcNavdrawer.prototype, "toggleMode", null);
__decorate([
  Bind
], AcNavdrawer.prototype, "close", null);
//# sourceMappingURL=ac-navdrawer.js.map
