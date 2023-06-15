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
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { h } from '@stencil/core';
import { Bind } from '../../../utils/lang/bind';
import { count } from '../../../utils/lang/count';
import { AcFaIcon } from '../../utils/ac-fa-icon';
export class AcPagination {
  constructor() {
    this.totalPages = undefined;
    this.selected = 1;
    this.nextLabel = 'Next';
    this.previousLabel = 'Previous';
  }
  handleChangePage(ev) {
    this.selected = parseInt(ev.detail);
    this.paginationChange.emit(this.selected);
  }
  handleNextPage() {
    if (this.selected < this.totalPages) {
      this.selected = this.selected + 1;
    }
  }
  handleAfterPage() {
    if (this.selected > 1) {
      this.selected = this.selected - 1;
    }
  }
  definePages() {
    if (this.selected === 1 && this.skipPagesPrevious) {
      this.skipPagesPrevious.classList.add('skip-pages__disable');
    }
    else if (this.skipPagesPrevious) {
      this.skipPagesPrevious.classList.remove('skip-pages__disable');
    }
    if (this.selected === this.totalPages && this.skipPagesNext) {
      this.skipPagesNext.classList.add('skip-pages__disable');
    }
    else if (this.skipPagesNext) {
      this.skipPagesNext.classList.remove('skip-pages__disable');
    }
  }
  render() {
    return [
      this.totalPages > 0 &&
        h("ac-tabs", { selected: this.selected, compact: true }, h("div", { class: "skip-pages skip-pages__disable", onClick: this.handleAfterPage, ref: skipPagesPrevious => this.skipPagesPrevious = skipPagesPrevious }, h(AcFaIcon, { class: "skip-pages--icon", icon: faAngleLeft, size: 12 }), h("span", null, this.previousLabel)), ...count(this.totalPages).map(i => h("ac-tab", { id: i + 1, compact: true }, i + 1)), h("div", { class: "skip-pages", ref: skipPagesNext => this.skipPagesNext = skipPagesNext }, h("span", { onClick: this.handleNextPage }, this.nextLabel), h(AcFaIcon, { class: "skip-pages--icon", icon: faAngleRight, size: 12 })))
    ];
  }
  static get is() { return "ac-pagination"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-pagination.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-pagination.css"]
    };
  }
  static get properties() {
    return {
      "totalPages": {
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
          "text": "The amount of pages."
        },
        "attribute": "total-pages",
        "reflect": false
      },
      "selected": {
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
          "text": "The selected page."
        },
        "attribute": "selected",
        "reflect": false,
        "defaultValue": "1"
      },
      "nextLabel": {
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
          "text": "Used to localize the Next button label."
        },
        "attribute": "next-label",
        "reflect": false,
        "defaultValue": "'Next'"
      },
      "previousLabel": {
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
          "text": "Used to localize the Previous button label."
        },
        "attribute": "previous-label",
        "reflect": false,
        "defaultValue": "'Previous'"
      }
    };
  }
  static get events() {
    return [{
        "method": "paginationChange",
        "name": "paginationChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event emitted when changed tab"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "totalPages",
        "methodName": "definePages"
      }, {
        "propName": "selected",
        "methodName": "definePages"
      }];
  }
  static get listeners() {
    return [{
        "name": "tabChange",
        "method": "handleChangePage",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Bind
], AcPagination.prototype, "handleNextPage", null);
__decorate([
  Bind
], AcPagination.prototype, "handleAfterPage", null);
//# sourceMappingURL=ac-pagination.js.map
