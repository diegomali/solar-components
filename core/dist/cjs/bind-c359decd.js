'use strict';

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

exports.Bind = Bind;

//# sourceMappingURL=bind-c359decd.js.map