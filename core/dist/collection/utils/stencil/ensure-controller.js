import { isNil } from 'ramda';
export const ensureController = controllerName => {
  let controller = document.querySelector(controllerName);
  if (isNil(controller)) {
    controller = document.createElement(controllerName);
    document.body.appendChild(controller);
  }
  return controller;
};
//# sourceMappingURL=ensure-controller.js.map
