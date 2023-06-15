import { h } from '@stencil/core';
const buildContent = props => {
  const type = props.type;
  switch (type) {
    case 'status':
      return `<ac-badge type="${props.value.type}" text="${props.value.label}" upper-case />`;
    default:
      return props.value;
  }
};
export const TableCell = props => {
  const content = buildContent(props);
  return (
  // @ts-ignore
  h("td", { onClick: () => props.onClick(), innerHTML: content }));
};
//# sourceMappingURL=table-cell.js.map
