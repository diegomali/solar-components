/**
 * Extend a method functionality, applying monkeypatch method.
 * @link https://www.audero.it/blog/2016/12/05/monkey-patching-javascript/
 * @param target The target object.
 * @param method The name of the method that will be extended.
 * @param extend The method's patch.
 */
function extendMethod(target, method, extend) {
  const original = target[method];
  target['__' + method + '__patch_list'] = target['__' + method + '__patches'] || [];
  const patchList = target['__' + method + '__patch_list'];
  patchList.push(extend);
  target[method] = function (...args) {
    let lastResult;
    for (const patch of patchList) {
      lastResult = patch.bind(this)(original ? original.bind(this) : null, args);
    }
    return lastResult;
  };
}

/**
 * Represents a Component's Behavior Modification.
 */
class ComponentBehavior {
  constructor(component) {
    this.component = component;
    if (this.beforeAttach) {
      this.beforeAttach();
    }
    // Native Elements support
    if (this.component.native) {
      console.warn('Attaching a behavior to a native element', this.component);
      this.component.host.remove = () => {
        this.component.disconnectedCallback();
        Element.prototype.remove.apply(this.component.host);
      };
      setTimeout(() => this.component.componentDidLoad(), 0);
    }
    extendMethod(this.component, 'componentDidLoad', componentDidLoad => {
      if (componentDidLoad) {
        componentDidLoad();
      }
      if (this.attach) {
        this.attach();
      }
    });
    extendMethod(this.component, 'disconnectedCallback', disconnectedCallback => {
      if (disconnectedCallback) {
        disconnectedCallback();
      }
      if (this.detach) {
        this.detach();
      }
    });
  }
}

export { ComponentBehavior as C, extendMethod as e };

//# sourceMappingURL=component-behavior-12d14453.js.map