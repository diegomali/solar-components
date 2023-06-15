import { h } from '@stencil/core';
export const TableHeader = props => {
  return (h("thead", null, h("tr", null, props.columns.map(header => h("th", { onClick: props.order ? props.click : () => {
    }, id: header.key }, h("strong", null, header.label), props.order.property === header.key ?
    h("span", { class: props.order ? `order-${props.order.ordering} order` : 'order' }, h("i", { class: "fas fa-arrow-up" }))
    : h("span", { class: "order-space-icon" }, h("i", { class: "fas fa-arrow-up " }), " "))))));
};
//# sourceMappingURL=table-header.js.map
