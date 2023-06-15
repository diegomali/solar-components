import { r as registerInstance, g as getElement } from './index-253b3ca9.js';
import { C as ControllerBehavior } from './controller-behavior-ad5d1bb3.js';
import { S as ScrollManager } from './scroll-manager-98c8e649.js';
import './component-behavior-12d14453.js';

const AcModalController = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The instance of the controller behavior that setup the modals on the screen.
     */
    this.controllerBehavior = new ControllerBehavior(this);
    this.target = 'ac-navdrawer';
    this.bound = undefined;
  }
  /**
   * Setup a new navdrawer on the screen.
   */
  async create(props) {
    const wrapper = document.createElement('ac-overlay');
    wrapper.backdrop = 'light';
    wrapper.position = props.position;
    props.wrapper = wrapper;
    props.mode = 'over';
    const navDrawer = await this.controllerBehavior.create(Object.assign(Object.assign({}, props), { showToggle: false }));
    wrapper.addEventListener('backDropClick', () => {
      navDrawer.remove();
    });
    navDrawer.addEventListener('close', () => {
      wrapper.remove();
      ScrollManager.enable();
    });
    ScrollManager.disable();
    return navDrawer;
  }
  /**
   * Clear all modals that are displayed.
   */
  async dismiss() {
    return;
  }
  disconnectedCallback() { }
  get host() { return getElement(this); }
};

export { AcModalController as ac_navdrawer_controller };

//# sourceMappingURL=ac-navdrawer-controller.entry.js.map