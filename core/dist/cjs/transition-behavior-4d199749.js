'use strict';

const animation = require('./animation-2589982c.js');
const componentBehavior = require('./component-behavior-ab8d7c53.js');

/**
 * Implements hooks to control the transitions states, such as entering and leaving.
 * Useful for CSS animations. CSS classes are provided, controlled by it state:
 * - `transition--before-enter` The state before the component enters on the screen.
 * - `transition--after-enter` The state after the component enters on the screen.
 * - `transition--before-leave` The state before the component leave the screen.
 */
class TransitionBehavior extends componentBehavior.ComponentBehavior {
  constructor() {
    super(...arguments);
    this.removeIsQueued = false;
  }
  /**
   * Applies a mokeypatch of componentWillLoad to add the transition hooks. Also, it dispatch the CSS transitions.
   */
  beforeAttach() {
    componentBehavior.extendMethod(this.component, 'componentWillLoad', async (componentWillLoad) => {
      this.component.host.classList.add('transition--before-enter');
      await animation.animate(this.component.host).then(animation.wait());
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
      await animation.animate(this.component.host).then(animation.wait());
      Element.prototype.remove.apply(this.component.host);
    }
  }
}

exports.TransitionBehavior = TransitionBehavior;

//# sourceMappingURL=transition-behavior-4d199749.js.map