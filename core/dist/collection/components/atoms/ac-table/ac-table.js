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
import { h } from '@stencil/core';
import { sortArray } from '../../../utils/collections/sort-array';
import { Bind } from '../../../utils/lang/bind';
import { TableBody } from './children/table-body';
import { TableHeader } from './children/table-header';
export class AcTable {
  constructor() {
    this.options = undefined;
    this.fetch = undefined;
    this.selectRow = undefined;
    this.loading = undefined;
    this.noResultsLabel = undefined;
    this.params = {
      ordering: 'asc',
      property: '',
      selected: 1,
      filters: {
        limitRows: '',
        totalRows: '',
        search: ''
      }
    };
  }
  onParamsDidUpdate() {
    if (this.fetch) {
      this.update();
    }
    else if (!this.fetch && this.options) {
      this.options = Object.assign(Object.assign({}, this.options), { rows: sortArray(this.options.rows, this.params.ordering, this.params.property) });
    }
  }
  changeOrder(ev) {
    this.params = Object.assign(Object.assign({}, this.params), { property: ev.target.id, ordering: this.params.ordering === 'asc' ? 'desc' : 'asc' });
    this.change.emit();
  }
  async update() {
    this.fetch(this.params)
      .then(rows => {
      this.options = (Object.assign(Object.assign({}, this.options), { rows: rows.rows }));
      this.tableChange.emit();
    })
      .catch(() => {
      this.options = (Object.assign(Object.assign({}, this.options), { rows: null }));
    });
  }
  onAddFetch() {
    this.update();
  }
  componentDidLoad() {
    if (this.fetch) {
      this.update();
    }
  }
  render() {
    return [
      this.options &&
        h("table", { class: "table" }, h(TableHeader, { columns: this.options ? this.options.header : null, click: this.changeOrder, order: this.params }), h(TableBody, { rows: this.options.rows, columns: this.options.header, onSelect: this.selectRow, noResultsLabel: this.noResultsLabel, loading: this.loading }))
    ];
  }
  static get is() { return "ac-table"; }
  static get originalStyleUrls() {
    return {
      "$": ["ac-table.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ac-table.css"]
    };
  }
  static get properties() {
    return {
      "options": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "Options",
          "resolved": "Options",
          "references": {
            "Options": {
              "location": "local",
              "path": "C:/Users/tnascimento/projetcts/solar-components/core/src/components/atoms/ac-table/ac-table.tsx"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      },
      "fetch": {
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
          "text": ""
        },
        "attribute": "fetch",
        "reflect": false
      },
      "selectRow": {
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
          "text": ""
        },
        "attribute": "select-row",
        "reflect": false
      },
      "loading": {
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
          "text": ""
        },
        "attribute": "loading",
        "reflect": false
      },
      "noResultsLabel": {
        "type": "string",
        "mutable": true,
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
      "params": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "{ ordering: string; property: string; selected: number; filters: { limitRows: string; totalRows: string; search: string; }; }",
          "resolved": "{ ordering: string; property: string; selected: number; filters: { limitRows: string; totalRows: string; search: string; }; }",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "{\r\n    ordering: 'asc',\r\n    property: '',\r\n    selected: 1,\r\n    filters: {\r\n      limitRows: '',\r\n      totalRows: '',\r\n      search: ''\r\n    }\r\n  }"
      }
    };
  }
  static get events() {
    return [{
        "method": "change",
        "name": "changeOrder",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "tableChange",
        "name": "tableChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "update": {
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
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "params",
        "methodName": "onParamsDidUpdate"
      }, {
        "propName": "fetch",
        "methodName": "onAddFetch"
      }];
  }
}
__decorate([
  Bind
], AcTable.prototype, "changeOrder", null);
__decorate([
  Bind
], AcTable.prototype, "update", null);
//# sourceMappingURL=ac-table.js.map
