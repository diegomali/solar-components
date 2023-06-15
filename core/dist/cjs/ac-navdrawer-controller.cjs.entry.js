'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const controllerBehavior = require('./controller-behavior-4fd05e07.js');
const scrollManager = require('./scroll-manager-3afc7662.js');
require('./component-behavior-ab8d7c53.js');

const AcModalController = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The instance of the controller behavior that setup the modals on the screen.
     */
    this.controllerBehavior = new controllerBehavior.ControllerBehavior(this);
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
      scrollManager.ScrollManager.enable();
    });
    scrollManager.ScrollManager.disable();
    return navDrawer;
  }
  /**
   * Clear all modals that are displayed.
   */
  async dismiss() {
    return;
  }
  disconnectedCallback() { }
  get host() { return index.getElement(this); }
};

exports.ac_navdrawer_controller = AcModalController;

//# sourceMappingURL=ac-navdrawer-controller.cjs.entry.js.map