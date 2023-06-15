/**
 * A method decorator used to debounce calls.
 * @param delay The amount of time in milliseconds to debounce.
 */
function Debounced(delay) {
  return (target, propName, descriptor) => {
    descriptor.value = debounce(target[propName], delay);
    return descriptor;
  };
}
/**
 * Used to debounce a target function calls.
 * @param func The target function to debounce.
 * @param delay The amount of time in milliseconds to debounce.
 */
function debounce(func, delay) {
  let debounceTimer;
  return function (...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

const reactivity = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Debounced: Debounced,
  debounce: debounce
});

export { Debounced as D, reactivity as r };

//# sourceMappingURL=reactivity-1f85cfd2.js.map