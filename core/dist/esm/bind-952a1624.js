/**
 * A method decorator that binds a method to it instance.
 */
// @ts-ignore
function Bind(target, name, descriptor) {
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

export { Bind as B };

//# sourceMappingURL=bind-952a1624.js.map