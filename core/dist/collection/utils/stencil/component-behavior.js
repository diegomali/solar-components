import { extendMethod } from '../lang/extend-method';
/**
 * Represents a Component's Behavior Modification.
 */
export class ComponentBehavior {
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
//# sourceMappingURL=component-behavior.js.map
