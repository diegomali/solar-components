import { a as animate, w as wait } from './animation-ab8aa382.js';
import { C as ComponentBehavior, e as extendMethod } from './component-behavior-12d14453.js';

/**
 * Implements hooks to control the transitions states, such as entering and leaving.
 * Useful for CSS animations. CSS classes are provided, controlled by it state:
 * - `transition--before-enter` The state before the component enters on the screen.
 * - `transition--after-enter` The state after the component enters on the screen.
 * - `transition--before-leave` The state before the component leave the screen.
 */
class TransitionBehavior extends ComponentBehavior {
  constructor() {
    super(...arguments);
    this.removeIsQueued = false;
  }
  /**
   * Applies a mokeypatch of componentWillLoad to add the transition hooks. Also, it dispatch the CSS transitions.
   */
  beforeAttach() {
    extendMethod(this.component, 'componentWillLoad', async (componentWillLoad) => {
      this.component.host.classList.add('transition--before-enter');
      await animate(this.component.host).then(wait());
      if (componentWillLoad) {
        return componentWillLoad();
      }
    });
  }
  /**
   * Execute the componentWillEnter transition.
   * Also, it applies a mokeypatch of the native Element#remove function to add the transition hooks.
   */
  async attach() {
    if (this.component.componentWillEnter) {
      await this.component.componentWillEnter();
    }
    this.component.host.classList.replace('transition--before-enter', 'transition--after-enter');
    // Monkeypatch native Element#remove.
    // This function will wait for transitions.
    this.component.host.remove = this.customRemoveFn.bind(this);
  }
  detach() { }
  /**
   * A custom remove teardown used to replace the native HTMLElement#remove, dispatching the CSS transitions.
   */
  async customRemoveFn() {
    if (!this.removeIsQueued) {
      this.removeIsQueued = true;
      // Deep animations
      const allChildren = this.component.host.getElementsByClassName('transition--after-enter');
      await Promise.all(Array.from(allChildren).map(child => child.remove()));
      this.component.host.classList.add('transition--before-leave');
      if (this.component.componentWillLeave) {
        await this.component.componentWillLeave();
      }
      await animate(this.component.host).then(wait());
      Element.prototype.remove.apply(this.component.host);
    }
  }
}

export { TransitionBehavior as T };

//# sourceMappingURL=transition-behavior-4856978d.js.map