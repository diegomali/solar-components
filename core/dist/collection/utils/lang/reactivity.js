/**
 * A method decorator used to debounce calls.
 * @param delay The amount of time in milliseconds to debounce.
 */
export function Debounced(delay) {
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
export function debounce(func, delay) {
  let debounceTimer;
  return function (...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}
//# sourceMappingURL=reactivity.js.map
