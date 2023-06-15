import { h } from './index-253b3ca9.js';
import { i as isNil } from './isNil-66dcf9f6.js';

var __rest = (undefined && undefined.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
/**
 * Used to create a Component that dispatch a ControllerComponent#set directly from a render tree.
 * This will pass the vchildren as a render function to the controller to render it through the portal.
 * @param controllerRef The reference of the controller element to dispatch.
 */
function createControllerPortal(controllerRef) {
  // Controls the host created by the controller.
  let portal;
  let TargetTag;
  return (props, children) => {
    const { ref: refCallback, reset, onDidDismiss } = props, restProps = __rest(props, ["ref", "reset", "onDidDismiss"]);
    if (!portal && !reset) {
      controllerRef.create(Object.assign(Object.assign({}, props), { render: ({ ref, Tag }) => {
          TargetTag = Tag;
          return h(TargetTag, Object.assign({}, restProps, { ref: ref }), children);
        } }))
        .then(elt => {
        if (refCallback) {
          refCallback(elt);
        }
        portal = elt.parentElement;
      });
    }
    else if (!reset) {
      portal.vchildren = h(TargetTag, Object.assign({}, restProps), children);
      portal.forceUpdate();
    }
    else {
      // Clears the host if the reset prop is true
      if (portal) {
        if (onDidDismiss) {
          onDidDismiss();
        }
        portal.remove();
        portal = null;
      }
    }
    // void component
    return null;
  };
}

const ensureController = controllerName => {
  let controller = document.querySelector(controllerName);
  if (isNil(controller)) {
    controller = document.createElement(controllerName);
    document.body.appendChild(controller);
  }
  return controller;
};

export { createControllerPortal as c, ensureController as e };

//# sourceMappingURL=ensure-controller-a89477f2.js.map