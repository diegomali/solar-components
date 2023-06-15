import { r as registerInstance, g as getElement } from './index-253b3ca9.js';
import { C as ControllerBehavior } from './controller-behavior-ad5d1bb3.js';
import './component-behavior-12d14453.js';

var __rest = (undefined && undefined.__rest) || function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const AcPanelController = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The instance of the controller behavior that setup the modals on the screen.
     */
    this.controllerBehavior = new ControllerBehavior(this);
    this.target = 'ac-panel';
    this.bound = undefined;
  }
  /**
   * Setup a new modal on the screen.
   */
  async create(props) {
    const { popperOptions, popperPivot, popperPlacement } = props, restProps = __rest(props, ["popperOptions", "popperPivot", "popperPlacement"]);
    const wrapper = document.createElement('ac-popper');
    restProps.wrapper = wrapper;
    wrapper.style.zIndex = '9000';
    wrapper.popperPlacement = popperPlacement;
    wrapper.popperPivot = popperPivot;
    wrapper.popperOptions = Object.assign({ onCreate: (data) => {
        data.instance.popper.style.width = data.offsets.reference.width + 'px';
        data.instance.popper.style.top = data.placement === 'bottom' ? '8px' : '-8px';
        data.instance.scheduleUpdate();
      }, onUpdate: (data) => {
        data.instance.popper.style.width = data.offsets.reference.width + 'px';
        data.instance.popper.style.top = data.placement === 'bottom' ? '8px' : '-8px';
      }, modifiers: {
        preventOverflow: {
          boundariesElement: this.controllerBehavior.root,
        },
      } }, popperOptions);
    return this.controllerBehavior.create(restProps);
  }
  /**
   * Clear all modals that are displayed.
   */
  async dismiss(elt) {
    if (elt) {
      return elt.remove();
    }
  }
  disconnectedCallback() { }
  get host() { return getElement(this); }
};

export { AcPanelController as ac_panel_controller };

//# sourceMappingURL=ac-panel-controller.entry.js.map