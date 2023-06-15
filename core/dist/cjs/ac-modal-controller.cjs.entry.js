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
    this.target = 'ac-modal';
    /**
     * The list of modals that are displayed.
     */
    this.modalList = [];
    this.bound = undefined;
  }
  /**
   * Setup a new modal on the screen.
   */
  async create(props) {
    const wrapper = document.createElement('ac-overlay');
    props.wrapper = wrapper;
    const modal = await this.controllerBehavior.create(props);
    wrapper.addEventListener('backDropClick', () => {
      modal.remove();
    });
    modal.addEventListener('close', () => {
      wrapper.remove();
      scrollManager.ScrollManager.enable();
    });
    this.modalList.push(modal);
    scrollManager.ScrollManager.disable();
    return modal;
  }
  /**
   * Clear all modals that are displayed.
   */
  async dismiss(data) {
    const topModal = this.modalList.pop();
    return topModal.dismiss(data);
  }
  disconnectedCallback() { }
  get host() { return index.getElement(this); }
};

exports.ac_modal_controller = AcModalController;

//# sourceMappingURL=ac-modal-controller.cjs.entry.js.map