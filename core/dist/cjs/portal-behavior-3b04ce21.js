'use strict';

const componentBehavior = require('./component-behavior-ab8d7c53.js');

/**
 * Implements a Portal logic, used to transfer VNode to a custom element by property.
 * This behavior will extend the default component's render function, rendering the VNode passed by the vchildren prop.
 */
class PortalBehavior extends componentBehavior.ComponentBehavior {
  constructor(component) {
    super(component);
    componentBehavior.extendMethod(component, 'render', original => {
      return component.customRender ? component.customRender(component.vchildren) : component.vchildren || original();
    });
  }
}

exports.PortalBehavior = PortalBehavior;

//# sourceMappingURL=portal-behavior-3b04ce21.js.map