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
      ScrollManager.enable();
    });
    this.modalList.push(modal);
    ScrollManager.disable();
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
  get host() { return getElement(this); }
};

export { AcModalController as ac_modal_controller };

//# sourceMappingURL=ac-modal-controller.entry.js.map