export function groupBy(key) {
  return (rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  };
}
//# sourceMappingURL=group-by.js.map
