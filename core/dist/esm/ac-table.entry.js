import { h, r as registerInstance, c as createEvent } from './index-253b3ca9.js';
import { B as Bind } from './bind-952a1624.js';
import { f as faSpinner } from './index.es-9ca36090.js';
import { A as AcFaIcon } from './ac-fa-icon-8b19be0a.js';

function sortArray(array, order = 'asc', property) {
  return array.sort((a, b) => {
    // force null to last
    a = a[property] === null || a[property] === undefined ? '' : a[property];
    b = b[property] === null || b[property] === undefined ? '' : b[property];
    // force any string values to lowercase
    a = typeof a === 'string' ? a.toLowerCase() : a;
    b = typeof b === 'string' ? b.toLowerCase() : b;
    // Return either 1 or -1 to indicate a params priority
    if (order === 'desc') {
      return (b > a) ? 1 : (b < a) ? -1 : 0;
    }
    else {
      return (a > b) ? 1 : (a < b) ? -1 : 0;
    }
  });
}

const buildContent = props => {
  const type = props.type;
  switch (type) {
    case 'status':
      return `<ac-badge type="${props.value.type}" text="${props.value.label}" upper-case />`;
    default:
      return props.value;
  }
};
const TableCell = props => {
  const content = buildContent(props);
  return (
  // @ts-ignore
  h("td", { onClick: () => props.onClick(), innerHTML: content }));
};

const TableBody = props => {
  return (h("tbody", null,
    props.loading &&
      h("div", { class: "table--loading" },
        h(AcFaIcon, { icon: faSpinner, size: 20, anim: "spin" })),
    props.rows && props.rows.map(row => h("tr", null, props.columns.map(cell => h(TableCell, { type: cell.type, value: row[cell.key], onClick: () => props.onSelect && cell.type !== 'action' ? props.onSelect(row) : null })))),
    (!props.rows || props.rows.length === 0) ?
      h("tr", null,
        h("td", { colSpan: props.columns.length }, props.noResultsLabel || 'No Results Found.')) : null));
};

const TableHeader = props => {
  return (h("thead", null,
    h("tr", null, props.columns.map(header => h("th", { onClick: props.order ? props.click : () => {
      }, id: header.key },
      h("strong", null, header.label),
      props.order.property === header.key ?
        h("span", { class: props.order ? `order-${props.order.ordering} order` : 'order' },
          h("i", { class: "fas fa-arrow-up" }))
        : h("span", { class: "order-space-icon" },
          h("i", { class: "fas fa-arrow-up " }),
          " "))))));
};

const acTableCss = "ac-table table{position:relative;width:100%;border-collapse:collapse}ac-table thead th{padding-bottom:11px;border-bottom:2px solid var(--color-neutral-lighter, #F5F5F5);text-align:start;white-space:nowrap}ac-table thead th strong{padding-right:8px;color:var(--color-neutral-darker, #646464);font-weight:normal;pointer-events:none}ac-table thead th i:before{color:var(--color-neutral-inverted, #111111);font-size:8px}ac-table thead th i:first-child{transform:translateY(-4px);transition:transform ease-in-out 0.25s}ac-table thead th .order{display:inline-flex;position:relative;align-items:flex-start;justify-content:flex-start;pointer-events:none}ac-table thead th .order.order-asc i:first-child{transform:rotate(180deg)}ac-table thead th .order-space-icon{visibility:hidden}ac-table td{border-bottom:1px solid var(--color-neutral-lighter, #F5F5F5)}ac-table tbody tr:hover{background-color:rgba(var(--color-primary-normal-rgb, 0, 70, 111), 0.04);cursor:pointer}ac-table tbody tr td>*{display:flex;flex-direction:column}ac-table tbody .table--loading{display:flex;position:absolute;align-items:center;justify-content:center;width:100%;height:100%;background-color:rgba(var(--color-neutral-contrast-rgb, 255, 255, 255), 0.8)}";

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
const AcTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.change = createEvent(this, "changeOrder", 7);
    this.tableChange = createEvent(this, "tableChange", 7);
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
  static get watchers() { return {
    "params": ["onParamsDidUpdate"],
    "fetch": ["onAddFetch"]
  }; }
};
__decorate([
  Bind
], AcTable.prototype, "changeOrder", null);
__decorate([
  Bind
], AcTable.prototype, "update", null);
AcTable.style = acTableCss;

export { AcTable as ac_table };

//# sourceMappingURL=ac-table.entry.js.map