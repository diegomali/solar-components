'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cac7f93f.js');
const controllerBehavior = require('./controller-behavior-4fd05e07.js');
require('./component-behavior-ab8d7c53.js');

const AcToastController = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.controllerBehavior = new controllerBehavior.ControllerBehavior(this);
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
  get host() { return index.getElement(this); }
};

exports.ac_toast_controller = AcToastController;

//# sourceMappingURL=ac-toast-controller.cjs.entry.js.map