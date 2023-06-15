import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { h } from '@stencil/core';
import { AcFaIcon } from '../../../utils/ac-fa-icon';
import { TableCell } from './table-cell';
export const TableBody = props => {
  return (h("tbody", null, props.loading &&
    h("div", { class: "table--loading" }, h(AcFaIcon, { icon: faSpinner, size: 20, anim: "spin" })), props.rows && props.rows.map(row => h("tr", null, props.columns.map(cell => h(TableCell, { type: cell.type, value: row[cell.key], onClick: () => props.onSelect && cell.type !== 'action' ? props.onSelect(row) : null })))), (!props.rows || props.rows.length === 0) ?
    h("tr", null, h("td", { colSpan: props.columns.length }, props.noResultsLabel || 'No Results Found.')) : null));
};
//# sourceMappingURL=table-body.js.map
