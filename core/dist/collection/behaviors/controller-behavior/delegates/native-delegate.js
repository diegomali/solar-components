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
/**
 * The default framework delegate.
 */
export class NativeDelegate {
  createComponent(tag, options) {
    const { component, componentProps } = options, props = __rest(options, ["component", "componentProps"]);
    const element = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(key => {
        if (typeof props[key] === 'string') {
          element.setAttribute(key, props[key]);
        }
        else {
          element[key] = props[key];
        }
      });
    }
    if (component) {
      if (typeof component === 'string') {
        element.innerHTML = component;
      }
      else {
        // The component is a HTMLElement:
        if (componentProps) {
          Object.assign(component, componentProps);
        }
        element.appendChild(component);
      }
    }
    return element;
  }
  async attachViewToDom(domRoot, element) {
    domRoot.appendChild(element);
    await element.componentOnReady();
  }
  // @ts-ignore
  detachViewFromDom(element, props) {
    return element.remove();
  }
}
export const nativeDelegate = new NativeDelegate();
//# sourceMappingURL=native-delegate.js.map
