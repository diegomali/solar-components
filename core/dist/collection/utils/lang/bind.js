/**
 * A method decorator that binds a method to it instance.
 */
// @ts-ignore
export function Bind(target, name, descriptor) {
  return {
    get() {
      const bound = descriptor.value.bind(this);
      Object.defineProperty(this, name, {
        value: bound
      });
      return bound;
    }
  };
}
//# sourceMappingURL=bind.js.map
