export function cloneAttributes(el) {
  return Object.values(el.attributes).reduce((acc, attr) => {
    acc[attr.name] = attr.value;
    return acc;
  }, {});
}
//# sourceMappingURL=clone-attributes.js.map
