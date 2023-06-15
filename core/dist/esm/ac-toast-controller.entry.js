import { r as registerInstance, g as getElement } from './index-253b3ca9.js';
import { C as ControllerBehavior } from './controller-behavior-ad5d1bb3.js';
import './component-behavior-12d14453.js';

const AcToastController = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.controllerBehavior = new ControllerBehavior(this);
    this.target = 'ac-toast';
    this.toastList = [];
    this.bound = undefined;
  }
  async create(props) {
    const wrapper = document.createElement('ac-overlay');
    wrapper.noLayer = true;
    wrapper.position = 'flex-end flex-end';
    props.wrapper = wrapper;
    const toast = await this.controllerBehavior.create(props);
    toast.addEventListener('close', () => {
      wrapper.remove();
    });
    this.toastList.push(toast);
    setTimeout(() => {
      wrapper.remove();
    }, props.time || 3000);
    return toast;
  }
  async dismiss(data) {
    const topToast = this.toastList.pop();
    return topToast.dismiss(data);
  }
  disconnectedCallback() {
  }
  get host() { return getElement(this); }
};

export { AcToastController as ac_toast_controller };

//# sourceMappingURL=ac-toast-controller.entry.js.map