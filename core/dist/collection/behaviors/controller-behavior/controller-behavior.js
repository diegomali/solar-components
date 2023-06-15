var __rest = (this && this.__rest) || function (s, e) {
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
import { ComponentBehavior } from '../../utils/stencil/component-behavior';
import { nativeDelegate } from './delegates/native-delegate';
/**
 * Used to implement a Controller Component logic.
 * A controller component is a singleton that can make operations in a context of all the layout,
 * breaking the atomic design.
 * Use it to create modals, toasts, floating panels etc.
 * This was based on the abstraction from Ionic Team.
 */
export class ControllerBehavior extends ComponentBehavior {
  /**
   * Bound the controller to the provided bound or to the parentElement.
   */
  attach() {
    this.root = document.querySelector(this.component.bound) || this.component.host.parentElement;
  }
  /**
   * Clear the controller before unload.
   */
  detach() {
    // @ts-ignore
    return this.component.dismissAll ? this.component.dismissAll() : null;
  }
  /**
   * Create a new element by the Controller's managed target and append it to the bound parent.
   * @param options The properties based on the target component.
   * @param customDelegate A custom DOM api used to attach the component.
   */
  async create(options, customDelegate) {
    const { wrapper, render } = options, props = __rest(options, ["wrapper", "render"]);
    const delegate = customDelegate || nativeDelegate;
    if (render) {
      // Using a portal
      return new Promise(res => {
        wrapper.vchildren = render({ ref: res, Tag: this.component.target });
        this.root.appendChild(wrapper);
      });
    }
    else {
      // Using delegate
      const element = await delegate.createComponent(this.component.target, props);
      element.controller = this.component;
      element._resolveDismiss = null;
      element._resolveWillDismiss = null;
      element.onDidDismiss = () => new Promise(res => element._resolveDismiss = res);
      element.onWillDismiss = () => new Promise(res => element._resolveWillDismiss = res);
      element.dismiss = async (data) => {
        let canDismiss = true;
        if (this.component.willDismissComponent) {
          canDismiss = await this.component.willDismissComponent(element, data);
        }
        if (canDismiss) {
          if (element._resolveWillDismiss) {
            await element._resolveWillDismiss(data);
          }
          if (wrapper) {
            await delegate.detachViewFromDom(wrapper, props);
          }
          else {
            await delegate.detachViewFromDom(element, props);
          }
          if (element._resolveDismiss) {
            await element._resolveDismiss(data);
          }
        }
      };
      if (wrapper) {
        wrapper.appendChild(element);
        await delegate.attachViewToDom(this.root, wrapper);
      }
      else {
        await delegate.attachViewToDom(this.root, element);
      }
      return element;
    }
  }
}
//# sourceMappingURL=controller-behavior.js.map
